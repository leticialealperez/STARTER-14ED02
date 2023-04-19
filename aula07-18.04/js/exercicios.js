/*

1. Crie um objeto em JavaScript para colocar dois atributos de um
produto. Atribua o preço e descrição do produto com o valor “90” e a
descrição com o valor “Mouse”. Mostre no console o valor dos dois
atributos.

*/

/*
let produto = {
    preco: 90,
    descricao: 'mouse'
}

console.log(`Valor: R$ ${produto.preco}, descrição: ${produto.descricao}`)
*/

/*

2. Crie um objeto em JavaScript para colocar 5 atributos de um
notebook. Atribua os seguintes atributos:
Processador = i7
Memória = 16GB
Preço = 5000
HD = 1TB
SSD = 256GB
Por fim, mostre o nome e valor de cada atributo no console,
exatamente como está na atividade.

*/

// let produto = {
//     processador: 'i7',
//     memoria: '16GB',
//     preco: 5000,
//     hd: '1TB',
//     ssd: '256GB'
// }


//  console.log(`Processador = ${produto.processador}`)
//  console.log(`Memória = ${produto.memoria}`)
//  console.log(`Preço = ${produto.preco}`)
//  console.log(`HD = ${produto.hd}`)
//  console.log(`SSD = ${produto.ssd}`)

//  for(let key in produto){
//     console.log(`${key} = ${produto[key]}`)
//  }



//  let lista = [1, 2, 3]


 // CHAVE - objs => propriedades/atributos  ====  array => indices
 // VALOR - 

 // for in => sempre vai ter acesso a CHAVE
 // ARRAYS como para OBJETOS
//  for(let key in lista){
//     console.log(`${key} = ${lista[key]}`)
//  }


 // for of => VALOR
 // ARRAYS
//  for(let numero of lista){
//     console.log(`${numero}`)
//  }



/*

3. Crie um objeto para colocar nome e duas notas. Atribua nome e duas notas para o primeiro objeto, que será nosso primeiro aluno. Agora crie mais um objeto para colocar informações do nosso segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo aluno. Por fim mostre a média desta turma de 2 alunos.

*/
//  const aluno = {
//     nome: "Felipe Chinelo",
//     nota1: 9, 
//     nota2: 8
//  }

// media1 = (aluno.nota1 + aluno.nota2) / 2

// console.log(`media 1 = ${media1}`)

// const aluno2 = {
//     nome: "Charlitos",
//     nota3: 1, 
//     nota4: 5
//  }

// media2 = (aluno2.nota3 + aluno2.nota4) / 2

// console.log(`Média do melhor aluno: ${media2}`)

// media3 = (media1 + media2) /2

// console.log(`media3 = ${media3}`)

const aluno1 = {
    nome: '',
    notas: []
}

const aluno2 = {
    nome: '',
    notas: []
}

aluno1.nome = prompt('Digite o nome do Aluno 1: ')
aluno2.nome = prompt('Digite o nome do Aluno 2: ')

let somaAluno1 = 0;
let somaAluno2 = 0;

for(let contador = 0; contador < 2; contador++) {
    const nota = Number(prompt(`Aluno 1 - Digite a nota ${contador + 1}: `))
    somaAluno1 += nota;
    aluno1.notas.push(nota)
}

for(let contador = 0; contador < 2; contador++) {
    const nota = Number(prompt(`Aluno 2 - Digite a nota ${contador + 1}: `))
    somaAluno2 += nota;
    aluno2.notas.push(nota)
}

aluno1.media = somaAluno1 / aluno1.notas.length
aluno2.media = somaAluno2 / aluno2.notas.length

let mediaTurma = (aluno1.media + aluno2.media) / 2

document.write(`<p>Média Aluno 1 - ${aluno1.media.toFixed(2)}</p>`)
document.write(`<p>Média Aluno 2 - ${aluno2.media.toFixed(2)}</p>`)
document.write(`<p>Média da Turma - ${mediaTurma.toFixed(2)}</p>`)
/*

4. Crie um cadastro de pessoas onde o usuário informe o nome,  idade e se está trabalhando ou não, se a pessoa estiver trabalhando
pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000



*/