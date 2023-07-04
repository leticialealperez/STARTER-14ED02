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

        /*
            {
                "sucesso": true,
                "paginaAtual": 3,
                "totalRegistros": 22,
                "totalPaginas": 3,
                "mensagem": "Contatos do usuário leticia@teste.com listados com sucesso!",
                "dados": []
            }
        
        */

        const respostaApi = await buscarContatos(emailLocal) // { modelo da api }

        // se não tiver resposta da api (caiu no catch) não monta os cards e nem nada abaixo
        if (!respostaApi) {
            return
        }

        // se tiver resposta da api monta os cards e tudo mais
        listContatos = respostaApi.dados

        montarCard(listContatos)

        // verifica a quantidade total de paginas para montar a quantidade certa de botões
        // console.log(respostaApi.totalPaginas)
        montarBotoes(emailLocal, respostaApi.totalPaginas)
    }

    if (emailSession) {
        paragrafo.innerText = `Bem vindo, ${emailSession}`

        listContatos = await buscarContatos(emailSession)

        listContatos.forEach((contato) => {
            montarCard(contato)
        });
    }

})

async function buscarContatos(emailUsuarioLogado, paginaMostrada) {
    paginaAtual = paginaMostrada
    try {
        const resposta = await apiConfig.get(`/users/${emailUsuarioLogado}/contatos/listar`, {
            params: {
                pagina: paginaMostrada || 1,
            }
        })

        console.log(resposta.data.dados)
        return resposta.data

    } catch (erro) {
        console.log(erro)
        return false
    }
}

// construir os cards de contatos
function montarCard(contatos) {
    /*
        <div class="container-contato">
            <h3>João</h3>
            <p>(51) 9988-7755</p>
            <p>joao@teste.com</p>
        </div>
    */

    const main = document.getElementById('espaco-cards');
    main.innerHTML = ''

    contatos.forEach((contato) => {
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
    });
}

// construir os botoes de navegação
function montarBotoes(emailUsuario, quantidade) {
    const divEspaco = document.getElementById('espaco-botoes')

    /*

        <button onclick="buscarContatos(email, 1)">Pagina 1</button>

    */

    for (let contador = 1; contador <= quantidade; contador++) {
        const button = document.createElement('button') // <button></button>
        button.setAttribute('class', `btn-paginacao pagina-${contador}`)
        button.innerText = `Página ${contador}` // <button>Página 1</button>
        button.addEventListener('click', async () => {
            const respostaApi = await buscarContatos(emailUsuario, contador)
            montarCard(respostaApi.dados)
        })

        divEspaco.appendChild(button)
    }

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



function click(numPagina) {
    alert(numPagina)
}


