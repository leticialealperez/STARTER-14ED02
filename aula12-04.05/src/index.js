import express from 'express';

// criação do app api servidor
const app = express();

// parse / converte o JSON para o formato que o dado for (array, objeto, string, number ...)
app.use(express.json());

app.listen(8080, () => console.log("Bombou 🚀"));

// GET - READ - visualização/listagem
app.get('/', (request, response) => {

    // enviar - send - envio de html/xml/yaml !== json
    // preciso mostrar dados? JSON!
    // mostrando um conteudo de pagina ou visual = send
    return response.status(200).send('<h1>Bem vindo à API de Transações da Growdev</h1>')
})

// DATABASE
const listaUsuarios = [
    {
        id: 1,
        email: 'joao@teste.com',
        password: '123',
        transactions: []
    },
    {
        id: 2,
        email: 'maria@teste.com',
        password: '1234',
        transactions: []
    },
    {
        id: 3,
        email: 'joaofelipe@teste.com',
        password: '12345',
        transactions: []
    }
]

// -------------------------------------------------------------------------------------------
// ROTAS

// USUARIOS

// GET - LISTAR TODOS OS USUÁRIOS
// QUERY PARAMS - /users?email="Joao"&idade="18" - filtros
// PATH PARAMS - /users/1 - buscar UM, atualizar, deletar
app.get('/users', (request, response) => {

    // QUERY = SEMPRE UM OBJETO
    const filtro = request.query


    if (filtro.email && filtro.email.length) {
        const listaFiltradaPorEmail = listaUsuarios.filter((user) => user.email.includes(filtro.email))

        if (!listaFiltradaPorEmail.length) {
            return response.status(404).json({
                sucesso: false,
                dados: null,
                mensagem: 'Não possui usuários cadastrados até o momento que atendam a condição de filtro!'
            })
        }

        return response.status(200).json({
            sucesso: true,
            mensagem: 'Usuários buscados com sucesso',
            dados: listaFiltradaPorEmail
        })

    }

    // 0 - false
    // !== 0 - true
    if (!listaUsuarios.length) {
        return response.status(404).json({
            sucesso: false,
            dados: null,
            mensagem: 'Não possui usuários cadastrados até o momento!'
        })
    }

    return response.status(200).json({
        sucesso: true,
        dados: listaUsuarios,
        mensagem: 'Dados de usuários buscados com sucesso!'
    })
})

// GET - LISTAR UM USUARIO POR ID


