
// QUERY SELECTOR (#, ., div, section > ul) - serve para buscar um elemento na DOM com base no seletor CSS que for especificado
// const elementoTitle = window.document.querySelector('title') // <title>Titulo da Página</title>

// console.log(elementoTitle)

//const novoTitulo = prompt("Informe o novo título para página")

// innerHTML OU innerText - lidam com o conteúdo de uma tag
// console.log(elementoTitle.innerText)
// elementoTitle.innerText = novoTitulo



// SELETORES DA DOM

// document.getElementById - retorna APENAS UM ELEMENTO
// const elementoAncoraLink2 = window.document.getElementById('link2') // id errado ou não existe? null
// se existe ele retorna o elemento inteiro

// console.log(elementoAncoraLink2)
// elementoAncoraLink2.style = "text-decoration: none; color: red;"
// elementoAncoraLink2.href = 'http://www.growdev.com.br'
// elementoAncoraLink2.target = '_blank'
// elementoAncoraLink2.innerText = 'Site Growdev'


// document.querySelector - seletor CSS
// const itemElemento = window.document.querySelector('li')
// itemElemento.innerHTML = '<h3>Link Modificado</h3>'
// itemElemento.innerText = '<h3>Link Modificado</h3>'



// document.querySelectAll - todos os elementos que atenderem ao seletor CSS
// NODELIST !== Array
// const items = window.document.querySelectorAll('li')

// percorre os elementos da NodeList
// items.forEach((item) => {
//     // elemento - tag + atributos + conteudos
//     item.innerHTML = 'MODIFICADO'
//     console.log(item)
// })

// percorre os elementos da NodeList
// for (const item of items) {
//     // elemento - tag + atributos + conteudos
//     item.innerHTML = 'ITEM'
// }


// document.getElementsByTagName
// const items = window.document.getElementsByTagName('li')

// for (const item of items) {
//     // elemento - tag + atributos + conteudos
//     item.style = 'color: red; list-style: square'
//     item.children[0].style = 'text-decoration: none; color: inherit'
// }


// document.getElementsByClassName
// const items = window.document.getElementsByClassName('item')

// for (const item of items) {
//     //elemento - tag + atributos + conteudos
//     item.style = 'color: blue; list-style: square'
//     item.children[0].style = 'text-decoration: none; color: inherit'
// }



// const tituloElement = window.document.getElementById('titulo')

// tituloElement.onclick = () => {
//     tituloElement.style = 'color: grey'
//     tituloElement.innerText = "Titulo da Página!"
// }

// tituloElement.onmouseenter = () => {
//     tituloElement.style = 'color: red'
// }

// tituloElement.onmouseleave = () => {
//     tituloElement.style = 'color: yellow'
//     tituloElement.innerText = "Mudou!"
// }
