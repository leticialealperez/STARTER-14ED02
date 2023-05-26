let listContatos = [];

document.addEventListener('DOMContentLoaded', async () => {
    const tokenLocal = localStorage.getItem('token')
    const tokenSession = sessionStorage.getItem('token')

    if (!tokenLocal && !tokenSession) {
        window.location.href = 'index.html'
        return
    }


    const emailLocal = localStorage.getItem('email')
    const emailSession = sessionStorage.getItem('email')
    const paragrafo = document.getElementById('texto-apresentacao')

    if (emailLocal) {
        paragrafo.innerText = `Bem vindo, ${emailLocal}`

        listContatos = await buscarContatos(emailLocal)

        listContatos.forEach((contato) => {
            montarCard(contato)
        });
    }

    if (emailSession) {
        paragrafo.innerText = `Bem vindo, ${emailSession}`

        listContatos = await buscarContatos(emailSession)

        listContatos.forEach((contato) => {
            montarCard(contato)
        });
    }

})

async function buscarContatos(emailUsuarioLogado) {
    try {
        const resposta = await apiConfig.get(`/users/${emailUsuarioLogado}/contatos/listar`)

        console.log(resposta.data.dados)
        return resposta.data.dados

    } catch (erro) {
        console.log(erro)
        return []
    }
}

// construir os cards de contatos
function montarCard(contato) {
    /*
        <div class="container-contato">
            <h3>João</h3>
            <p>(51) 9988-7755</p>
            <p>joao@teste.com</p>
        </div>
    */

    const main = document.getElementById('espaco-cards');

    // criar a div
    const div = document.createElement('div') // <div></div>
    div.classList.add('container-contato') // <div class="container-contato"></div>

    // criar h3
    const h3 = document.createElement('h3') // <h3></h3>
    h3.innerText = contato.nome // // <h3>João</h3>

    const paragrafoTelefone = document.createElement('p') // <p></p>
    paragrafoTelefone.innerText = contato.telefone // <p>(51) 9988-7755</p>

    const paragrafoEmail = document.createElement('p') // <p></p>
    paragrafoEmail.innerText = contato.email // <p>joao@teste.com</p>

    // ordem de montagem da DOM
    div.appendChild(h3)
    div.appendChild(paragrafoTelefone)
    div.appendChild(paragrafoEmail)
    main.appendChild(div)

}

// LOGOUT DO USUARIO
const btnSair = document.getElementById('btn-sair')

btnSair.addEventListener('click', () => {
    // remover token e email do local ou session storage

    // local
    localStorage.removeItem('token')
    localStorage.removeItem('email')

    // session
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')


    // direcionar o usuario pra página de login
    window.location.href = 'index.html'
})


