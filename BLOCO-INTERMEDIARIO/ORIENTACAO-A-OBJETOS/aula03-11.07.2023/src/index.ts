import prompt from 'prompt-sync';
import { Aluno } from './classes/Aluno';
const teclado = prompt();

/*

 O QUE É UMA CLASSE?

 - É a abstração do que há em comum (em termos de caracteristicas e comportamentos) a um conjunto de objetos.
 É um molde/esqueleto para a criação de objetos.

 Ex: Empresa, Aluno, Imovel

 No final será um tipo de dado personalizado à nossa aplicação/software bem como string, number e boolean por exemplo

*/

/*

    MAS ENTÃO, O QUE É UM OBJETO?

    Um objeto é uma instância de uma classe. Um dado gerado a partir de um molde (uma classe).
    Terá a combinação da estrutura de dados (atributos) e o comportamento (métodos) da classe que o gerou.

    Ex: Um aluno, Uma empresa, Um imovel

*/

const wallace = new Aluno('Wallace', '000.111.222.-33', 27);
wallace.aprenderHabilidade('CSS');
wallace.aprenderHabilidade('Javascript');
wallace.mudarTurma();
wallace.realizarAtividade(8);

const felipe = new Aluno('Felipe', '222.333.444-55', 21);
felipe.realizarAtividade(10);
felipe.mudarTurma();
felipe.aprenderHabilidade('HTML');

const anderson = new Aluno('Anderson Quym', '555.666.777-88', 18);
anderson.realizarAtividade(9.8);
anderson.realizarAtividade(10);
anderson.realizarAtividade(9);
anderson.mudarTurma();
anderson.aprenderHabilidade('Javacsript');

// wallace.nomeCompleto = 'Wallace Dev';
// wallace.CPF = '000.111.222-33';
console.log(wallace);
console.log(felipe);
console.log(anderson);
