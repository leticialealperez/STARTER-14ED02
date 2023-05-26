// document.onload = () => {
// }

document.addEventListener('DOMContentLoaded', () => {
    // 1 - verifica se tem algo chamado 'token' no localStorage
    // 1 - chave , 2 - valor

    // OBS: quando precisamos armazenar OBJETOS OU ARRAYS no local ou session storage

    // Converter um objeto/array => string   ==== JSON.stringify()
    // const teste = { nome: 'Leticia' }
    // JSON.stringify(teste)


    // Converter um string/json => objeto/array   ==== JSON.parse()
    // const teste = { "nome": "Leticia" }
    // const convertido = JSON.parse(teste)
    // console.log(convertido.nome)

    const tokenLocalStorage = localStorage.getItem('token')

    const tokenSessionStorge = sessionStorage.getItem('token')


    console.log(tokenLocalStorage)
    console.log(tokenSessionStorge)

    if (tokenLocalStorage || tokenSessionStorge) {
        window.location.href = 'home.html'
    }

})

const formLoginElement = document.getElementById('form-login');

formLoginElement.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    // daqui pra baixo conseguimos capturar o value dos campos tranquilamente pois a página não reestarta

    const emailInput = document.getElementById('email')
    const senhaInput = document.getElementById('senha')
    const permanecerConectado = document.getElementById('lembrar').checked

    const emailValido = validarPreenchimentoCampo(emailInput.value)
    const senhaValido = validarPreenchimentoCampo(senhaInput.value)

    if (!emailValido || !senhaValido) {
        alert("Preencha os campos corretamente")
        return
    }

    const dadosUsuario = {
        email: emailInput.value,
        senha: senhaInput.value,
    }

    const deuBom = await login(dadosUsuario, permanecerConectado);

    if (deuBom) {
        emailInput.value = ''
        senhaInput.value = ''
        window.location.href = 'home.html'
    } else {
        senhaInput.value = ''
    }
})


function validarPreenchimentoCampo(valorDigitado) {
    if (valorDigitado === '') {
        return false
    }

    return true
}

async function login(dadosUsuario, permanecerConectado) {
    try {
        const resposta = await apiConfig.post('/usuarios/login', dadosUsuario)

        console.log(resposta)

        if (permanecerConectado) {
            localStorage.setItem('token', resposta.data.dados.token)
            localStorage.setItem('email', resposta.data.dados.email)
        } else {
            sessionStorage.setItem('token', resposta.data.dados.token)
            sessionStorage.setItem('email', resposta.data.dados.email)
        }

        return true


    } catch (erro) {
        alert(`${erro.response.data.mensagem}`)
        return false
    }
}