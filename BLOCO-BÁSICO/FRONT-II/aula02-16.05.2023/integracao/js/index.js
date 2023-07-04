
// 1 - CONSTRUIR O LAYOUT FIXO - OK


// 2 - CRIAR OS ELEMENTOS DA DOM COM BASE EM UMA LISTA DE DADOS
// PRIMEIRO LISTA FICTICIA - MOCK
// const listaTodos = [
//     {
//         userId: 1,
//         id: 1,
//         title: "delectus aut autem",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 2,
//         title: "quis ut nam facilis et officia qui",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 3,
//         title: "fugiat veniam minus",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 4,
//         title: "et porro tempora",
//         completed: true
//     },
//     {
//         userId: 1,
//         id: 5,
//         title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 6,
//         title: "qui ullam ratione quibusdam voluptatem quia omnis",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 7,
//         title: "illo expedita consequatur quia in",
//         completed: false
//     },
//     {
//         userId: 1,
//         id: 8,
//         title: "quo adipisci enim quam ut ab",
//         completed: true
//     },
//     {
//         userId: 1,
//         id: 9,
//         title: "molestiae perspiciatis ipsa",
//         completed: false
//     },

// ]

let listaDados = [];

// quando a página é carregada - EVENTO - ONLOAD ou DOMCONTENTLOADED
// document.onload = () => {

// }

document.addEventListener('DOMContentLoaded', async () => {
    await dispararRequisicao();
    console.log(listaDados)

    const ulElement = document.getElementById('espaco-tarefas')

    listaDados.forEach((item) => {

        // cria elementos utilizando o JS
        const liElement = document.createElement('li') // <li></li>
        liElement.setAttribute('id', `${item.id}`) // <li id="1"></li>

        liElement.classList.add('tarefa')

        // se item.completed for true add class completo
        if (item.completed) {
            liElement.classList.add('completo') // <li class="completo"></li>
        }

        liElement.innerText = item.title // <li class="completo">Tarefa 1</li>

        // criar a li dentro da ul - appendChild
        ulElement.appendChild(liElement)
    })
})




// 3 - INTEGRAÇÃO - TROCAR O MOCK POR DADOS REAIS
async function dispararRequisicao() {
    // JS ASSINCRONO 
    // pending - pendente
    // fulfilled - completo
    // rejected - rejeitado
    try {
        const resposta = await apiConfig.get('/todos')
        // { config: '', data: respostaAPI, ...  }
        //console.log(resposta.data)
        listaDados = resposta.data
        //console.log(listaDados)
    } catch {
        alert("Verifique os dados e tente novamente!")
    }
}
