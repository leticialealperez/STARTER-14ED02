import cors from 'cors';
import { randomUUID } from 'crypto';
import 'dotenv/config';
import express from 'express';

const app = express();

// CONVERTE O ARQUIVO JSON PARA UM OBJETO JS
app.use(express.json());
app.use(cors());


// const senhaBanco = process.env.SENHA_BANCO
const porta = process.env.PORTA;
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});

// READ -> LISTAR
// GET 
app.get('/', (request, response) => {
    // toda requição recebe envia dois parametros para a função
    return response.status(200).send('<h1>API Growdev Rodando 🚀</h1>')
})

// ROTAS PARA TRANSAÇÕES

// definição da variável que será a carteira com saldo e as transações realizadas
const carteira = {
    saldo: 0,
    transacoes: []
}

// CADASTRO
// POST => verbos/metodos
app.post('/transacoes', (request, response) => {
    const { valor, tipo } = request.body;
    // validar se existe .valor dentro do body
    // "", 0, undefined, null
    if (!valor) {
        return response.status(400).json({
            mensagem: 'É preciso informar o valor da transação'
        })
    }

    const valorConvertido = Number(valor) // "sdfgdfgd" => NaN

    if (isNaN(valorConvertido) || valorConvertido < 0) { // F || F => F
        return response.status(400).json({
            mensagem: "o dado enviado para valor não é um dado numérico válido."
        })
    }

    // validar se existe .tipo dentro do body
    // "", 0, undefined, null
    if (!tipo) {
        return response.status(400).json({
            mensagem: 'É preciso informar o tipo da transação'
        })
    }

    // validar se o que está dentro de .tipo é 'entrada' ou 'saida'
    let tipoConvertido;

    if (typeof tipo === 'string') {
        tipoConvertido = tipo.toLowerCase()
    }

    if (tipoConvertido !== 'entrada' && tipoConvertido !== 'saida') {
        return response.status(400).json({
            mensagem: 'O tipo precisa ser "entrada" ou "saida"'
        })
    }

    // nesta linha
    const novaTransacao = {
        id: randomUUID(), // "123dsd45-4548sdsd78-fvsds-454sdsd54"
        valor: valorConvertido,
        tipo: tipoConvertido,
        dataLancamento: new Date().toLocaleString('pt-BR')
    }

    if (tipoConvertido === 'entrada') {
        carteira.saldo += valorConvertido
    } else {

        if (carteira.saldo < valorConvertido) {
            return response.status(400).json({
                mensagem: "Você não possui saldo suficiente para esta transação."
            })
        }

        carteira.saldo -= valorConvertido
    }

    carteira.transacoes.push(novaTransacao)

    return response.status(201).json({
        mensagem: `Transação realizada com sucesso. Seu novo saldo é de R$ ${carteira.saldo.toFixed(2)}`,
        transacoes: carteira.transacoes
    })
})

// LISTAR APENAS UM - POR ID
// GET => verbos/metodos
// QUANDO PRECISO BUSCAR ALGO ESPECIFICO USAMOS route params
app.get('/transacoes/:idTransacao', (request, response) => {
    // ID -> route params
    const { idTransacao } = request.params // { idTransacao: "1", outraCoisa: "5" } desconstrução

    // metodos de arrays - buscar um registro e delete eu preciso dos dados contidos na determinado posicao do array
    // FIND
    const transacaoEncontrada = carteira.transacoes.find((transacao) => transacao.id === idTransacao)
    // { ... }  ou undefined 
    // undefined === false 
    // !false => true
    // !true => false
    // undefined null "" 0 => false => !false => true
    if (!transacaoEncontrada) { // só executa o true
        // não deu bom undefined
        return response.status(404).json({
            mensagem: "Este ID informado não consta na base de dados!"
        })
    }

    return response.status(200).json({
        mensagem: "Transação encontrada",
        transacao: transacaoEncontrada,
    })
})



// LISTAR VÁRIOS
// GET => verbos/metodos
// QUANDO PRECISO BUSCAR UMA LISTA DE DADOS (filtrada ou não) query params
// deve ser possível listar todas as transações - OK
// deve ser possível listar somente as transacoes de entrada - OK
// deve ser possível listar somente as transacoes de saída - OK
// deve ser possível listar transações entre um range de valor (min && max) - OK
// deve ser possível listar transações com um valor mínimo - OK
// deve ser possível listar transações com um valor máximo - OK
// REGRA: mostrar apenas as propriedades tipo, valor e dataLancamento - OK
app.get('/transacoes', (request, response) => {

    // FILTROS NÃO PODE SER OBRIGATÓRIO
    const { tipoTransacao, valorMin, valorMax } = request.query; // { tipoTransacao: "", valorMin: "", valorMax: "" }

    // referencia 0x0000121545 => olha pros dados e copia tudo para a variavel listaTransacoesFiltrada => spread operator ...
    let listaTransacoesFiltrada = [...carteira.transacoes];

    if (tipoTransacao) {
        // "entrada" || "saida"
        if (tipoTransacao !== 'entrada' && tipoTransacao !== 'saida') {
            // erro
            return response.status(400).json({
                mensagem: "Parametro inválido para tipo da transação."
            });
        }

        // FILTER => sempre retorna uma lista cópia com todos os items que atenderem à condicao passada
        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.tipo === tipoTransacao)
    }

    if (valorMin && valorMax) {
        // 100 === "100" => true
        const valorMinConvertido = Number(valorMin) // "200" => 200 casting
        const valorMaxConvertido = Number(valorMax) // "5000" => 5000

        if (isNaN(valorMinConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor mínimo."
            })
        }

        if (isNaN(valorMaxConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor máximo."
            })
        }

        if (valorMinConvertido > valorMaxConvertido) {
            return response.status(400).json({
                mensagem: "Parametros inválidos. O valor mínimo deve ser menor que o valor máximo."
            })
        }

        // min200 - max500
        // [100, 200, 300, 400, 600]
        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor >= valorMinConvertido && transacao.valor <= valorMaxConvertido)

        return response.status(200).json({
            mensagem: "Transações listadas com sucesso!",
            transacoes: listaTransacoesFiltrada.map(({ valor, tipo, dataLancamento }) => ({ valor, tipo, dataLancamento }))
        })

    }

    if (valorMin) {
        // só aplica o filtro do valor min
        // 100 === "100" => true
        const valorMinConvertido = Number(valorMin) // "200" => 200 casting

        if (isNaN(valorMinConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor mínimo."
            })
        }

        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor >= valorMinConvertido)
    }

    if (valorMax) {
        // só filtra os que tiverem o valor Maximo
        // 100 === "100" => true
        const valorMaxConvertido = Number(valorMax) // "5000" => 5000

        if (isNaN(valorMaxConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor máximo."
            })
        }

        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor <= valorMaxConvertido)
    }

    return response.status(200).json({
        mensagem: "Transações listadas com sucesso!",
        // transacoes: listaTransacoesFiltrada.map((transacao) => {
        //     const { valor, tipo, dataLancamento } = transacao

        //     return { valor, tipo, dataLancamento }
        // })
        transacoes: listaTransacoesFiltrada.map(({ valor, tipo, dataLancamento }) => ({ valor, tipo, dataLancamento }))
    })
})


// ATUALIZAR
// PUT => verbos/metodos
//


// DELETAR
// DELETE => verbos/metodos









