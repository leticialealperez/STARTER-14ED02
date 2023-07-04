// CONFIGURAR A URL BASE DE REQUISIÇÕES DA API
const api = axios.create({
    baseURL: 'http://localhost:8080'
})

// COMPONENTES BOOTSTRAP
const modalCadastrar = new bootstrap.Modal('#modal-cadastrar') // diz que o elemento de id modalCadastrar será usado para criar um modal do bootstrap

// ELEMENTOS DOM PAGINA LOGIN
// formularios
const formLogin = document.getElementById('form-login')
const formCadastro = document.getElementById('form-cadastro')

// inputs cadastro
const nomeInput = document.getElementById('cadastro-nome')
const emailInput = document.getElementById('cadastro-email')
const senhaInput = document.getElementById('cadastro-senha')
const repetirSenhaInput = document.getElementById('cadastro-repetir-senha')

// inputs login
const emailInputLogin = document.getElementById('login-email')
const senhaInputLogin = document.getElementById('login-senha')

// LOGIN AUTOMATICO AO ACESSAR PAGINA LOGIN
document.addEventListener('DOMContentLoaded', loginAutomatico)

// VALIDAÇÕES CAMPOS CADASTRO
nomeInput.addEventListener('keyup', validaInput)
emailInput.addEventListener('keyup', validaInput)
senhaInput.addEventListener('keyup', validaInput)
repetirSenhaInput.addEventListener('keyup', validaInput)
emailInputLogin.addEventListener('keyup', validaInput)
senhaInputLogin.addEventListener('keyup', validaInput)


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

    // só dispara a requisição se o e-mail estiver 100% (conter @ e conter .com)
    if (emailInput.classList.contains('is-invalid')) {
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

    // só dispara a requisição se o e-mail estiver 100% (conter @ e conter .com)
    if (emailInputLogin.classList.contains('is-invalid')) {
        return
    }

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

        limparInputs()
        removerValidacaoInputs()
        modalCadastrar.hide()
    } catch (error) {
        // 401, 400, 404, ... 500
        // {..., response: { data: { message: 'Nossa mensagem' } }}
        // message é customizado - VEM DA API
        // também cai aqui mensagens de erro de sintaxe no código JS - erros do desenvolvedor
        alert(error.response.data.message)
        removerValidacaoInputs()
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

        // redirecionar usuario para página home
        window.location.href = 'home.html'

    } catch (error) {
        // 401, 400, 404, ... 500 
        // {..., response: { data: { message: 'Nossa mensagem' } }}
        // message é customizado - VEM DA API
        // também cai aqui mensagens de erro de sintaxe no código JS - erros do desenvolvedor
        alert(error.response.data.message)

        //limpar inputs login
        limparInputs()

        // remover validações inputs login
        removerValidacaoInputs()
    }
}

// ------------------ UTILITARIOS -----------------------------------
function limparInputs() {
    const inputsDOM = document.querySelectorAll('input');

    for (const input of inputsDOM) {
        input.value = ''
    }
}


function removerValidacaoInputs() {
    const inputsDOM = document.querySelectorAll('input');

    for (const input of inputsDOM) {
        input.classList.remove('is-valid', 'is-invalid')
    }
}

// VALIDAÇÃO DOS CAMPOS DE ENTRADA
function validaInput(event) {
    // remove validação do formulario todo já que o usuário já que o usuário esta editando os campos incorretos (keyup - digitou algo no campo)
    formCadastro.classList.remove('was-validated');
    formLogin.classList.remove('was-validated');

    // SÓ MOSTRARÁ O FFEDBACK VISUAL DA VALIDAÇÃO DO CAMPO AO USUARIO SE TIVER AO MENOS 1 CARACTER DIGITADO NO CAMPO
    if (!event.target.value) {
        event.target.classList.remove('is-valid')
        event.target.classList.remove('is-invalid')
        return
    }

    switch (event.target.name) {

        // valida campo nome - REGRA: mínimo 3 caracteres
        case 'nome':
            if (event.target.value.length >= 3) {
                event.target.classList.remove('is-invalid');
                event.target.classList.add('is-valid');
            } else {
                event.target.classList.remove('is-valid');
                event.target.classList.add('is-invalid');
            }
            break

        // valida email - REGRA: HTML já verifica se tem @, adiciona logica para verificar também se tem ".com"
        case 'email':
            if (event.target.value.includes('.com')) {
                event.target.classList.remove('is-invalid')
                event.target.classList.add('is-valid')
            } else {
                event.target.classList.remove('is-valid')
                event.target.classList.add('is-invalid')
            }
            break

        // valida senha - REGRA: mínimo 6 caracteres
        case 'senha':

            if (event.target.value.length >= 6) {
                event.target.classList.remove('is-invalid')
                event.target.classList.add('is-valid')
            } else {
                event.target.classList.remove('is-valid')
                event.target.classList.add('is-invalid')
            }
            break

        // valida repetir senha - REGRA: Deve ser igual ao valor digitado no campo 'senha'
        case 'repetir-senha':
            if (event.target.value === senhaInput.value) {
                event.target.classList.remove('is-invalid')
                event.target.classList.add('is-valid')
            } else {
                event.target.classList.remove('is-valid')
                event.target.classList.add('is-invalid')
            }
            break
        default:
            console.log(event.target.name) // debug - aqui vai executar se o name do input validado não cair em nenhum dos cases acima

    }
}

// VERIFICA SE EXISTE USUARIO LOGADO PARA REDIRECIONAMENTO AUTOMATICO
function loginAutomatico() {
    const usuarioLogado = localStorage.getItem('usuarioLogado')

    if (usuarioLogado) {
        window.location.href = 'home.html'
    }
}

