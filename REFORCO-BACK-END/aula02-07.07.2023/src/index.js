import cors from 'cors';
import { randomUUID } from 'crypto';
import 'dotenv/config';
import express from 'express';
import { validaDescricao, validaFiltros, validaIDTransacao, validaTipo, validaValor } from './middlewares';


const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORTA, () => console.log(`Servidor rodando na porta ${process.env.PORTA}`))
app.get('/', (request, response) => {
    return response.status(200).send('<h1>API Growdev Rodando 🚀</h1>')
})


// definição da variável que será a carteira com saldo e as transações realizadas
export const carteira = {
    saldo: 0,
    transacoes: []
}

// ROTAS PARA TRANSAÇÕES
// CADASTRO
// POST => verbos/metodos
app.post('/transacoes', validaValor, validaTipo, validaDescricao, (request, response) => {
    const { valor, tipo, descricao } = request.body;

    const novaTransacao = {
        id: randomUUID(),
        valor: valor,
        tipo: tipo,
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
app.get('/transacoes/:idTransacao', validaIDTransacao, (request, response) => {
    const { indiceTransacao } = request.body

    return response.status(200).json({
        mensagem: "Transação encontrada",
        transacao: carteira.transacoes[indiceTransacao],
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
app.get('/transacoes', validaFiltros, (request, response) => {
    const { tipoTransacao, valorMin, valorMax } = request.body;

    let listaTransacoesFiltrada = [...carteira.transacoes];

    if (tipoTransacao) {
        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.tipo === tipoTransacao)
    }

    if (valorMin && valorMax) {
        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor >= valorMin && transacao.valor <= valorMax)

        return response.status(200).json({
            mensagem: "Transações listadas com sucesso!",
            transacoes: listaTransacoesFiltrada.map(({ valor, tipo, dataLancamento, descricao }) => ({ valor, tipo, dataLancamento, descricao }))
        })

    }

    if (valorMin) {
        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor >= valorMin)
    }

    if (valorMax) {
        listaTransacoesFiltrada = listaTransacoesFiltrada.filter((transacao) => transacao.valor <= valorMax)
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
app.delete(`/transacoes/:id`, (request, response) => {
    const params = request.params // { id: '121212' }

    const indiceEncontrado = carteira.transacoes.findIndex(
        (transaction) => transaction.id === params.id
    )

    if (indiceEncontrado === -1) {
        return response.status(404).json('Transação não encontrada.')
    }

    // NÃO PODE FICAR NEGATIVO O VALOR DO SALDO
    const listaCopia = [...carteira.transacoes]
    listaCopia.splice(indiceEncontrado, 1)

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
            mensagem: "Não é possível excluir a transação pois sua carteira ficará negativa."
        })
    }

    carteira.saldo = novoSaldo
    carteira.transacoes = listaCopia

    return response.status(200).json({
        mensagem: `Transação excluida com sucesso. Seu novo saldo é de ${carteira.saldo.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}`,
        transcoes: carteira.transacoes
    })
})