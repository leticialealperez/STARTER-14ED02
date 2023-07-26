import cors from 'cors';
import { randomUUID } from 'crypto';
import 'dotenv/config';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORTA, () => console.log(`Servidor rodando na porta ${process.env.PORTA}`))
app.get('/', (request, response) => {
    return response.status(200).send('<h1>API Growdev Rodando 🚀</h1>')
})


// definição da variável que será a carteira com saldo e as transações realizadas

const carteira = {
    saldo: 0,
    transacoes: []
}

// ROTAS PARA TRANSAÇÕES
// CADASTRO
// POST => verbos/metodos
app.post('/transacoes', (request, response) => {
    const { valor, tipo, descricao } = request.body;

    if (!valor) {
        return response.status(400).json({
            mensagem: 'É preciso informar o valor da transação'
        })
    }

    const valorConvertido = Number(valor) // "1000" => 1000

    if (isNaN(valorConvertido) || valorConvertido < 0) {
        return response.status(400).json({
            mensagem: "o dado enviado para valor não é um dado numérico válido."
        })
    }


    if (!tipo) {
        return response.status(400).json({
            mensagem: 'É preciso informar o tipo da transação'
        })
    }

    let tipoConvertido;

    if (typeof tipo === 'string') {
        tipoConvertido = tipo.toLowerCase()
    }

    if (tipoConvertido !== 'entrada' && tipoConvertido !== 'saida') {
        return response.status(400).json({
            mensagem: 'O tipo precisa ser "entrada" ou "saida"'
        })
    }

    if (!descricao) {
        return response.status(400).json({
            mensagem: 'É preciso informar a descrição da transação'
        })
    }


    const novaTransacao = {
        id: randomUUID(),
        valor: valorConvertido,
        tipo: tipoConvertido,
        descricao: descricao,
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
    const { idTransacao } = request.params

    const transacaoEncontrada = carteira.transacoes.find((transacao) => transacao.id === idTransacao)

    if (!transacaoEncontrada) {
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
// REGRA: mostrar apenas as propriedades tipo, valor, dataLancamento e descricao - OK
app.get('/transacoes', (request, response) => {

    // FILTROS NÃO PODE SER OBRIGATÓRIO
    const { tipoTransacao, valorMin, valorMax } = request.query;

    let listaTransacoesFiltrada = [...carteira.transacoes];

    if (tipoTransacao) {
        if (tipoTransacao !== 'entrada' && tipoTransacao !== 'saida') {
            return response.status(400).json({
                mensagem: "Parametro inválido para tipo da transação."
            });
        }

        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.tipo === tipoTransacao)
    }

    if (valorMin && valorMax) {
        const valorMinConvertido = Number(valorMin)
        const valorMaxConvertido = Number(valorMax)

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

        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor >= valorMinConvertido && transacao.valor <= valorMaxConvertido)

        return response.status(200).json({
            mensagem: "Transações listadas com sucesso!",
            transacoes: listaTransacoesFiltrada.map(({ valor, tipo, dataLancamento, descricao }) => ({ valor, tipo, dataLancamento, descricao }))
        })

    }

    if (valorMin) {
        const valorMinConvertido = Number(valorMin)

        if (isNaN(valorMinConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor mínimo."
            })
        }

        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor >= valorMinConvertido)
    }

    if (valorMax) {
        const valorMaxConvertido = Number(valorMax)

        if (isNaN(valorMaxConvertido)) {
            return response.status(400).json({
                mensagem: "Parametro inválido para valor máximo."
            })
        }

        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor <= valorMaxConvertido)
    }

    return response.status(200).json({
        mensagem: "Transações listadas com sucesso!",
        transacoes: listaTransacoesFiltrada.map(({ valor, tipo, dataLancamento, descricao }) => ({ valor, tipo, dataLancamento, descricao }))
    })
})

/*
    id - não vai ser modificado
    dataLancamento - não vai ser modificado
    valor - 
    tipo - 
    descricao - 

*/
// ATUALIZAR
// PUT => verbos/metodos
app.put('/transacoes/:idTransacao', (request, response) => {
    // todas as propriedades a serem atualizadas são opcionais na entrada do dado
    const { valor, tipo, descricao } = request.body;
    const { idTransacao } = request.params;

    console.log(request.body);
    // ao menos uma propriedade deve ser atualizada
    if (!valor && !tipo && !descricao) {
        return response.status(400).json({
            mensagem: 'É preciso informar ao menos uma propriedade a ser atualizada.'
        })
    }

    let valorConvertido; // undefined

    if (valor) {
        valorConvertido = Number(valor)

        // aceita somente números e deve ser igual ou maior que zero
        if (isNaN(valorConvertido) || valorConvertido < 0) {
            return response.status(400).json({
                mensagem: "O valor não pode ser negativo e deve ser um dado numérico.",
            })
        }
    }

    // só é aceito 'entrada' e 'saida'
    let tipoConvertido; // undefined

    if (tipo) {
        if (typeof tipo === 'string') {
            tipoConvertido = tipo.toLowerCase()
        }

        if (tipoConvertido !== 'entrada' && tipoConvertido !== 'saida') {
            return response.status(400).json({
                mensagem: 'O tipo precisa ser "entrada" ou "saida"',
            })
        }
    }

    // COMO VOU SABER QUAL TRANSAÇÃO PRECISO ATUALIZAR? pelo ID [2] = {...}
    const indiceEncontrado = carteira.transacoes.findIndex((transacao) => transacao.id === idTransacao) // 0, 1, 2, 3 ...

    // não encontrou nenhuma transação pelo ID informado na rota
    if (indiceEncontrado === -1) {
        return response.status(404).json({
            mensagem: 'Transação não encontrada pelo ID informado.'
        })
    }

    //    0, "", null, undefined, false => false => NÃO/FALSE
    //    1, " ", true => true
    const listaCopia = [...carteira.transacoes]
    const novaTransacao = {
        ...listaCopia[indiceEncontrado], // copiar as infos de ID e dataLancamento
        tipo: tipoConvertido || listaCopia[indiceEncontrado].tipo,
        valor: valorConvertido || listaCopia[indiceEncontrado].valor,
        descricao: descricao || listaCopia[indiceEncontrado].descricao
    }

    listaCopia[indiceEncontrado] = novaTransacao

    console.log(carteira.transacoes)

    const novoSaldo = listaCopia.reduce((valorInicial, transacao) => {
        if (transacao.tipo === 'entrada') {
            return valorInicial + transacao.valor
        }

        if (transacao.tipo === 'saida') {
            return valorInicial - transacao.valor
        }
    }, 0)

    if (novoSaldo < 0) {
        return response.status(400).json({
            mensagem: "Não é possível modificar a transação informada por não possui saldo suficiente para o decremento."
        })
    }

    carteira.transacoes[indiceEncontrado] = listaCopia[indiceEncontrado]


    return response.status(200).json({
        mensagem: 'Transação atualizada com sucesso.',
        transacao: carteira.transacoes[indiceEncontrado]
    })
})

// DELETAR
// DELETE => verbos/metodos