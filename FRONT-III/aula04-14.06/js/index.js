// CONFIGURAR A URL BASE DE REQUISIÇÕES DA API
const api = axios.create({
    baseURL: 'http://localhost:8080'
})


// COMPONENTES BOOTSTRAP
const modalCadastrar = new bootstrap.Modal('#exampleModal') // diz que o elemento de id exampleModal será usado para criar um modal do bootstrap


// ELEMENTOS DOM PAGINA LOGIN
const formLogin = document.getElementById('form-login')
const formCadastro = document.getElementById('form-cadastro')

const nomeInput = document.getElementById('cadastro-nome')
const emailInput = document.getElementById('cadastro-email')
const senhaInput = document.getElementById('cadastro-senha')
const repetirSenhaInput = document.getElementById('cadastro-repetir-senha')

const emailInputLogin = document.getElementById('login-email')
const senhaInputLogin = document.getElementById('login-senha')

// VALIDAÇÕES CAMPOS CADASTRO
nomeInput.addEventListener('keyup', (event) => {
    if (!event.target.value) {
        event.target.classList.remove('is-valid')
        event.target.classList.remove('is-invalid')
        return
    }

    if (event.target.value && event.target.value.length < 3) {
        event.target.classList.add('is-invalid')
        event.target.classList.remove('is-valid')
    } else {
        event.target.classList.remove('is-invalid')
        event.target.classList.add('is-valid')
    }
});

emailInput.addEventListener('keyup', (event) => {
    if (!event.target.value) {
        event.target.classList.remove('is-valid')
        event.target.classList.remove('is-invalid')
        return
    }

    if (!event.target.value.includes('.com')) {
        event.target.classList.remove('is-valid')
        event.target.classList.add('is-invalid')

    } else {
        event.target.classList.remove('is-invalid')
        event.target.classList.add('is-valid')
    }
});

senhaInput.addEventListener('keyup', (event) => {
    if (!event.target.value) {
        event.target.classList.remove('is-valid')
        event.target.classList.remove('is-invalid')
        return
    }

    if (event.target.value.length < 6) {
        event.target.classList.add('is-invalid')
        event.target.classList.remove('is-valid')
    } else {
        event.target.classList.remove('is-invalid')
        event.target.classList.add('is-valid')
    }
});

repetirSenhaInput.addEventListener('keyup', (event) => {
    if (!event.target.value) {
        event.target.classList.remove('is-valid')
        event.target.classList.remove('is-invalid')
        return
    }

    if (senhaInput.value !== event.target.value) {
        event.target.classList.add('is-invalid')
        event.target.classList.remove('is-valid')
    } else {
        event.target.classList.remove('is-invalid')
        event.target.classList.add('is-valid')
    }
})


//  ------------------  FORMULARIOS -------------------------
// LÓGICA DO CADASTRO DE USUARIO - SUBMIT FORM CADASTRO
formCadastro.addEventListener('submit', async (event) => {
    event.preventDefault()

    // o JS NATIVO
    // event.target -> elemento que disparou o evento
    if (!event.target.checkValidity()) {
        event.target.classList.add('was-validated')
        return
    }

    event.target.classList.remove('was-validated')

    if (senhaInput.value !== repetirSenhaInput.value) {
        return
    }

    await cadastrarUsuario(nomeInput.value, emailInput.value, senhaInput.value);
})


// LÓGICA DO LOGIN DE USUARIO - SUBMIT FORM LOGIN
formLogin.addEventListener('submit', async (event) => {
    event.preventDefault()

    //VERIFICAR SE O FORMULÁRIO ESTÁ VALIDO
    const formularioValido = formLogin.checkValidity()

    if (!formularioValido) {
        formLogin.classList.add('was-validated') // was-validated
        return
    }

    // LÓGICA LOGIN USUARIO
    formLogin.classList.remove('was-validated')

    await loginUsuario(emailInputLogin.value, senhaInputLogin.value)
});


// ------------------- API ---------------------------------
// URL + ROTA = http://localhost:8080/users
// CADASTRO - Verbo Post 
// Dado necessário a ser enviado no body - { name: 'João',  email: 'teste@teste.com', password: '123' }
async function cadastrarUsuario(nome, email, senha) {
    // É O QUE A API ESPERA RECEBER NO BODY
    const dadosUsuario = {
        name: nome,
        email: email,
        password: senha
    }

    try {
        const resposta = await api.post('/users', dadosUsuario) // send

        // resposta tem informações do AXIOS
        alert(resposta.data.message)

        limparInputsCadastro()
        removerValidacaoInputsCadastro()
        modalCadastrar.hide()


    } catch (error) {
        // 401, 400, 404, ... 500 
        // {..., response: { data: { message: 'Nossa mensagem' } }}
        // message é customizado - VEM DA API
        alert(error.response.data.message)
        removerValidacaoInputsCadastro()
        emailInput.value = ''
    }
}

// URL + ROTA = http://localhost:8080/login
// LOGIN - Verbo Post
// Dado necessário a ser enviado no body - { email: 'teste@teste.com', password: '123' }
async function loginUsuario(email, senha) {
    // É O QUE A API ESPERA RECEBER NO BODY
    const credenciaisUsuario = {
        email: email,
        password: senha
    }

    try {
        // resposta tem informações do AXIOS
        const resposta = await api.post('/login', credenciaisUsuario) // send

        // API RETORNA OS DADOS DO USUARIO LOGADO - armazenamos no localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(resposta.data.user))

        // mostrar mensagem
        alert(resposta.data.message)


        //limpar inputs


        // redirecionar usuario

    } catch (error) {
        // 401, 400, 404, ... 500 
        // {..., response: { data: { message: 'Nossa mensagem' } }}
        // message é customizado - VEM DA API
        alert(error.response.data.message)
    }
}

// ------------------ UTILITARIOS -----------------------------------
function limparInputsCadastro() {
    nomeInput.value = ''
    emailInput.value = ''
    senhaInput.value = ''
    repetirSenhaInput.value = ''
}

function removerValidacaoInputsCadastro() {
    nomeInput.classList.remove('is-valid', 'is-invalid')
    emailInput.classList.remove('is-valid', 'is-invalid')
    senhaInput.classList.remove('is-valid', 'is-invalid')
    repetirSenhaInput.classList.remove('is-valid', 'is-invalid')
}

