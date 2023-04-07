// IF ELSE IF
let condicao1 = false;
let condicao2 = false;
let condicao3 = true;

// QUAL LOG SERÁ MOSTRADO?

if(condicao1) {
    console.log("Condição 1")

} else if(condicao2) {
    console.log("Condição 2")

} else if(condicao3) {
    console.log("Condição 3")

} else {
    console.log("Nenhuma condição acima é TRUE")
}


// SWITCH CASE
// quando temos várias opções pre-definidas

let num1 = 10;
let num2 = 2;

let operador = '-'

// ===  => igual no valor e no tipo

switch(operador) {
    case '+':
        console.log(num1 + num2)
    break

    case '-':
        console.log(num1 - num2)
    break

    case '/':
        console.log(num1 / num2)
    break

    case '*':
        console.log(num1 * num2)
    break

    default:
        console.log("Operador errado!")
    break

}

// ...

// 1 => janeiro
// ...
// 12 => dezembro
// numero inválido