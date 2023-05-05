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
const listaUsuarios = []

// -------------------------------------------------------------------------------------------
// ROTAS

// USUARIOS

// GET - LISTAR TODOS OS USUÁRIOS
// QUERY PARAMS - /users?email="Joao"&idade="18" - filtros

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
});

// GET - LISTAR UM USUARIO POR ID
// PATH PARAMS - /users/1 - buscar UM, atualizar, deletar
app.get('/users/:id', (request, response) => {
    // PARAMETRO DE REQUISIÇÃO É UM OBJETO { id: 17 }
    const params = request.params
    console.log(params)

    // == valor  === valor e tipo
    const usuarioEncontrado = listaUsuarios.find((user) => user.id == params.id)

    if (!usuarioEncontrado) {
        return response.status(404).json({
            sucesso: false,
            dado: null,
            mensagem: 'Usuário não encontrado pelo ID informado'
        })
    }

    return response.status(200).json({
        sucesso: true,
        dados: usuarioEncontrado,
        mensagem: 'Usuário encontrado com sucesso!'
    })
})


// POST - inserir/cadastrar/criar - CREATE
// body - É UM PACOTE EM FORMATO JSON COM OS DADOS NECESSARIOS PARA CADASTRAR UM USUARIO
app.post('/users', (request, response) => {
    const dados = request.body

    if (!dados.email || !dados.email.includes('@') || !dados.email.includes('.com')) {
        return response.status(400).json({
            sucesso: false,
            dados: null,
            mensagem: "É obrigatório informar um e-mail válido para cadastro do usuário"
        })
    }

    if (!dados.password || dados.password.length < 6) {
        return response.status(400).json({
            sucesso: false,
            dados: null,
            mensagem: "É obrigatório informar a senha para cadastro do usuário com no mínimo 6 caracteres"
        })
    }

    // new Date()
    // .getTime() - retorna a quantidade de milessegundos desde 1970 1 de janeiro até o agora

    const novoUsuario = {
        id: new Date().getTime(),
        email: dados.email,
        password: dados.password,
        transactions: []
    }

    const existe = listaUsuarios.some((user) => user.email === novoUsuario.email)

    if (existe) {
        return response.status(400).json({
            sucesso: false,
            dados: null,
            mensagem: "Outro usuário já está cadastrado com este e-mail."
        })
    }

    // adicionar o novo usuario na lista
    listaUsuarios.push(novoUsuario)

    return response.status(201).json({
        sucesso: true,
        dados: novoUsuario,
        mensagem: "Usuário cadastrado com sucesso!"
    })

})


