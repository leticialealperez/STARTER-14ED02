import cors from 'cors';
import { randomUUID } from 'crypto';
import 'dotenv/config';
import express from 'express';

const app = express();

// CONVERTE O ARQUIVO JSON PARA UM OBJETO JS
app.use(express.json());
app.use(cors());

// addEventListener
// botao.addEventLister('click', () => {
// })
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
        tipo: tipoConvertido
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








