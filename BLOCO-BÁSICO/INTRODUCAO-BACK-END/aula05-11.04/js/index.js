let saque = Number(prompt('Digite o valor a ser sacado: G$ ')) 

// 'texto' => NAN | '152,50' => NAN | '152.50' => 152.50 === inválido | clicou no CANCELAR => null == 0
// -10 0

if(isNaN(saque) || saque <= 0 || !Number.isInteger(saque)) {
    document.write('<p>Por favor, digite um valor inteiro positivo válido</p>')
}else {

    let gc50 = parseInt(saque / 50)
    saque %=  50
    let gc10 = parseInt(saque / 10)
    saque %= 10
    let gc5 = parseInt(saque / 5)
    saque %= 5
    let gc1 = parseInt(saque / 1)
    saque %= 1

    document.write(`<p>${gc50} notas de G$50 </p>`)
    document.write(`<p>${gc10} notas de G$10 </p>`)
    document.write(`<p>${gc5} notas de G$5 </p>`)
    document.write(`<p>${gc1} notas de G$1 </p>`)
}
