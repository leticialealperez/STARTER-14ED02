
const btnIncluir = window.document.querySelector('.incluir')

const span = window.document.getElementById('presentes')
const mensagem = window.document.getElementById('mensagem-presenca')

let counter = 0;

btnIncluir.onclick = () => {
    counter++
    span.innerText = counter;

    if (counter >= 10) {
        mensagem.innerText = 'Aula já pode ser iniciada!'
        // mensagem.classList.remove('vermelho')
        // mensagem.classList.add('verde')

        mensagem.setAttribute('class', 'verde')
    }

    if (counter >= 20) {
        mensagem.innerText = 'Aula LOTADA!'
        // mensagem.classList.remove('vermelho')
        // mensagem.classList.add('verde')

        mensagem.setAttribute('class', 'amarelo')
    }
}



