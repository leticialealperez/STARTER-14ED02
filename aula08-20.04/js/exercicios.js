/*

Crie um algoritmo que adicione produtos em um carrinho de compras de uma loja virtual.
Para isso crie um objeto para estruturar os dados desse carrinho de compra. Será necessário armazenar a lista de produtos que foram adicionados pelo usuario e informações sobre o pagamento. Sabendo que:

- Todo produto deve possuir NOME, QUANTIDADE e PREÇO UNITÁRIO, sendo estes, informados pelo usuário;

Ex: Arroz, 2, R$5.00

- O carrinho de compras de possuir a LISTA DE PRODUTOS, TOTAL DA COMPRA e dados sobre o PAGAMENTO escolhido pelo usuário;

- O PAGAMENTO deve possuir a MODALIDADE escolhida pelo usuário, sendo valores válidos para essa propriedade apenas: CREDITO, DEBITO, PIX e DINHEIRO; O sistema não deve aceitar outro valor como forma de pagamento;

- O PAGAMENTO deve possuir QUANTIDADE DE PARCELAS, DESCONTO, ACRÉSCIMO e VALOR DA PARCELA

- Se a modalidade escolhida pelo usuário for CREDITO, o usuário deverá informar a quantidade de parcelas e o sistema deverá calcular o valor do acréscimo com base na seguinte tabela:
até 5x      - 5%  do total da compra
até 10x     - 10% do total da compra
acima de 10 - 15% do total da compra

OBS: o TOTAL DA COMPRA é a soma de (preço unitario * quantidade) de todos os produtos adicionados na LISTA DE PRODUTOS

- Se a modalidade escolhida pelo usuário for CRÉDITO, o sistema deverá preencher a propriedade desconto com o valor 0 (zero) e calcular o valor da parcela considerando a formula:
(totalCompra + acrescimo) / quantidadeParcelas

- Se a modalidade escolhida pelo usuário for DÉBITO, PIX ou DINHEIRO o sistema deverá preencher a propriedade QUANTIDADE DE PARCELAS, ACRESCIMO e VALOR DA PARCELA com o valor 0

- Se a modalidade escolhida pelo usuário for DÉBITO, o sistema deverá calcular e preencher a propriedade DESCONTO com o valor equivalente à 5% sobre o valor da compra;

- Se a modalidade escolhida pelo usuário for PIX ou DINHEIRO, o sistema deverá calcular e preencher a propriedade DESCONTO com o valor equivalente à 10% sobre o valor da compra;

Ao final o sistema deverá mostrar um resumo final sobre o carrinho de compras com:
- Produtos: nome, quantidade, preço unitário e valor total do produto (preço * quantidade)
- Pagamento:
 Se a MODALIDADE for CREDITO mostrar MODALIDADE, TOTAL DA COMPRA, ACRESCIMO, TOTAL COM ACRESCIMO, QUANTIDADE DE PARCELAS e VALOR DA PARCELA
 Se o método for DÉBITO, PIX ou DINHEIRO mostrar MODALIDADE, TOTAL DA COMPRA, DESCONTO e TOTAL COM DESCONTO


 - funções
 - objetos
 - arrays

 - Botão 1 - Adicionar itens
 - Botão 2 - Informar a forma de pagamento
 - Botão 3 - Imprimir resumo da compra
*/

// GLOBAL
// let carrinho = {
//     itens: []
// }


let listaAluno = []


// LOCAL
function adicionarAluno() {
    // quando a variavel está apagada ela não esta sendo usada em lugar nenhum
    let novoAluno = {}

    novoAluno.nome = prompt('Digite o nome do aluno: ')
    novoAluno.turma = prompt('Informe a turma deste novo aluno: ')

    // console.log(novoAluno)


    listaAluno.push(novoAluno) // [0] => { nome: 'Charles', turma: 'Starter 14ed'}
}

// listaAlunos => plural => vários alunos
// listaAlunos[0] => singular => { nome: 'Charles', turma: 'Starter 14ed'}


function listarAlunos() {
    for (let aluno of listaAluno) {
        document.write(`<p>${aluno.nome} - ${aluno.turma}</p>`)
    }
}


// BLOCO
for (let i = 0; i < listaAluno.length; i++) {
    // EXISTENTE SOMENTE DENTRO DO FOR
}

if (true) {
    let item = 'arroz'
}

// NÃO DA CERTO
console.log(i)
console.log(item)

