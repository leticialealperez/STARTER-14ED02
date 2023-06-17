// CONFIGURACAO DO CLIENT HTTP AXIOS
const api = axios.create({
    baseURL: 'https://api.disneyapi.dev'
});

// CAPTURAR OS ELEMENTOS DA DOM QUE SERÃO MODIFICADOS PELO JS
const espacoCardsRow = document.getElementById('espaco-cards')
const botaoPrev = document.getElementById('botao-prev')
const botaoAtual = document.getElementById('botao-atual')
const botaoNext = document.getElementById('botao-next')
const qtdPersonagensSpan = document.getElementById('qtd-personagens')

let paginaAtual = 1
let totalPaginas = 0

// 1 BUSCA DEVE OCORRER QUANDO A PAGINA CARREGA
document.addEventListener('DOMContentLoaded', async () => {
    const dadosRetornados = await buscarPersonagens(paginaAtual);

    qtdPersonagensSpan.innerText = dadosRetornados.totalPersonagens

    // ESSA LINHA ABAIXO VOCES NAO FAZEM - nao fazer o map
    const listaManipulada = dadosRetornados.personagens.map((personagem, index) => {
        if (index % 2 === 0) {
            const dado = {
                ...personagem, // spread operator - copia todos os dados que tiverem dentro de um array ou objeto
                status: 'Alive'
            }

            return dado
        } else if (index % 3 === 0) {
            return {
                ...personagem,
                status: 'Dead'
            }
        } else {
            return {
                ...personagem,
                status: 'Unknown'
            }
        }
    });

    montarColunasCards(listaManipulada)
    mudarBotoes(dadosRetornados.paginaAnterior, dadosRetornados.proximaPagina)

});

botaoNext.addEventListener('click', proximaPagina)
botaoPrev.addEventListener('click', paginaAnterior)


function montarColunasCards(listaPersonagens) {
    espacoCardsRow.innerHTML = ""

    listaPersonagens.forEach((personagem) => {
        /*
            <div class="col-12 col-md-6 col-lg-4">
                    <div class="card w-100">
                        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" class="card-img-top"
                            alt="Avatar">
                        <div class="card-body px-4">
                            <h5 class="card-title">
                                Nome Personagem
                            </h5>

                            <p class="card-text">
                                <span class="text-danger">
                                    <i class="bi bi-caret-right-fill"></i>
                                </span>
                                Vivo - Humano
                            </p>

                            <dl>
                                <dt>Última localização conhecida:</dt>
                                <dd>Planeta XPTO</dd>

                                <dt>Visto a última vez em:</dt>
                                <dd>Nome do Capitulo</dd>
                            </dl>

                        </div>
                    </div>
                </div>
        */

        // CRIA COLUNA
        const divCol = document.createElement('div')
        divCol.setAttribute('class', 'col-12 col-md-6 col-lg-4')

        // CRIA CARD
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card w-100')

        // CRIA IMAGEM
        const imgCard = document.createElement('img')
        imgCard.setAttribute('src', `${personagem.imageUrl}`)
        imgCard.setAttribute('class', 'card-img-top')
        imgCard.setAttribute('alt', `${personagem.name}`)

        // CRIA CARD BODY
        const divCardBody = document.createElement('div')
        divCardBody.setAttribute('class', 'card-body px-4')

        // CRIA TITULO CARD
        const tituloCard = document.createElement('h5')
        tituloCard.setAttribute('class', 'card-title')
        tituloCard.innerText = personagem.name

        // CRIA PARAGRAFO
        const descricaoPersonagem = document.createElement('p')
        descricaoPersonagem.setAttribute('class', 'card-text')
        descricaoPersonagem.innerHTML = `
            <span class="${personagem.status === 'Alive' ? 'text-success' : personagem.status === 'Dead' ? 'text-danger' : 'text-secondary'}">
                <i class="bi bi-caret-right-fill"></i>
            </span>
            Vivo - Humano
        `

        // CRIA DL
        const detalhamentoPersonagem = document.createElement('dl');
        detalhamentoPersonagem.innerHTML = `
            <dt>Última localização conhecida:</dt>
            <dd>Planeta XPTO</dd>

            <dt>Visto a última vez em:</dt>
            <dd>Nome do Capitulo</dd>
        `

        // APPENDS - criar os filhos dentros dos respectivos elementos pais
        divCardBody.appendChild(tituloCard)
        divCardBody.appendChild(descricaoPersonagem)
        divCardBody.appendChild(detalhamentoPersonagem)

        divCard.appendChild(imgCard)
        divCard.appendChild(divCardBody)

        divCol.appendChild(divCard)

        espacoCardsRow.appendChild(divCol)

    })
}

function mudarBotoes(prev, next) {
    botaoAtual.children[0].innerText = paginaAtual

    if (!prev) {
        botaoPrev.classList.remove('cursor-pointer')
        botaoPrev.classList.add('disabled')
    } else {
        botaoPrev.classList.add('cursor-pointer')
        botaoPrev.classList.remove('disabled')
    }

    if (!next) {
        botaoNext.classList.remove('cursor-pointer')
        botaoNext.classList.add('disabled')
    } else {
        botaoNext.classList.add('cursor-pointer')
        botaoNext.classList.remove('disabled')
    }
}


async function buscarPersonagens(pagina) {
    try {
        const resposta = await api.get('/character', {
            params: {
                pageSize: 20, // ISSO NAO É PRA FAZER NO RICKY AND MORTY
                page: pagina,
            }
        });

        const dadosApi = {
            totalPaginas: resposta.data.info.totalPages,
            totalPersonagens: resposta.data.info.totalPages * resposta.data.info.count,
            personagens: resposta.data.data,
            proximaPagina: resposta.data.info.nextPage,
            paginaAnterior: resposta.data.info.previousPage
        }

        return dadosApi

    } catch (erro) {
        console.log(erro) // debug (erros de requisicao e erros de sintaxe - 400, 401, 500 ...
        alert('Erro na busca de personagens.')
        // aqui é momento de mostrar uma mensagem se der erro na requisicao
    }
}

async function proximaPagina() {
    // verificar se o botão esta desabilitado
    if (!botaoNext.classList.contains('disabled')) {
        // só dispara a requisição pra API se o botão estiver habilitado
        ++paginaAtual

        const dadosAPI = await buscarPersonagens(paginaAtual)

        // ESSA LINHA ABAIXO VOCES NAO FAZEM - nao fazer o map
        const listaManipulada = dadosAPI.personagens.map((personagem, index) => {
            if (index % 2 === 0) {
                const dado = {
                    ...personagem, // spread operator - copia todos os dados que tiverem dentro de um array ou objeto
                    status: 'Alive'
                }

                return dado
            } else if (index % 3 === 0) {
                return {
                    ...personagem,
                    status: 'Dead'
                }
            } else {
                return {
                    ...personagem,
                    status: 'Unknown'
                }
            }
        });

        montarColunasCards(listaManipulada)
        mudarBotoes(dadosAPI.paginaAnterior, dadosAPI.proximaPagina)
    }
}

async function paginaAnterior() {
    // verificar se o botão esta desabilitado
    if (!botaoPrev.classList.contains('disabled')) {
        // só dispara a requisição pra API se o botão estiver habilitado
        --paginaAtual

        const dadosAPI = await buscarPersonagens(paginaAtual)

        // ESSA LINHA ABAIXO VOCES NAO FAZEM - nao fazer o map
        const listaManipulada = dadosAPI.personagens.map((personagem, index) => {
            if (index % 2 === 0) {
                const dado = {
                    ...personagem, // spread operator - copia todos os dados que tiverem dentro de um array ou objeto
                    status: 'Alive'
                }

                return dado
            } else if (index % 3 === 0) {
                return {
                    ...personagem,
                    status: 'Dead'
                }
            } else {
                return {
                    ...personagem,
                    status: 'Unknown'
                }
            }
        });

        montarColunasCards(listaManipulada)
        mudarBotoes(dadosAPI.paginaAnterior, dadosAPI.proximaPagina)
    }
}

