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

    const valorConvertido = Number(valor)

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


// ATUALIZAR
// PUT => verbos/metodos




// DELETAR
// DELETE => verbos/metodos









