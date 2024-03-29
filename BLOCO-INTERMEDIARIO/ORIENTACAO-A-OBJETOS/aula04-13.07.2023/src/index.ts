import prompt from 'prompt-sync';
import { Empresa } from './classes/Empresa';
import { Growdever } from './classes/Growdever';
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

const wallace = new Growdever('Wallace', '000.111.222.-33', 27);
wallace.nomeCompleto = 'Wallace Dev';

wallace.atualizarCPF(
	'Leticia',
	'Registro estava errado por erro de sistema',
	'000.111.222.-35'
);
console.log(`${wallace.nomeCompleto} - ${wallace.CPF}`);

wallace.aprenderHabilidade('CSS');
wallace.aprenderHabilidade('Javascript');
wallace.mudarTurma('Programa Advanced - 2ed - Turma 1');
wallace.realizarAtividade(8);

const felipe = new Growdever('Felipe', '222.333.444-55', 21);
felipe.realizarAtividade(10);
felipe.mudarTurma('Programa Advanced - 2ed - Turma 2');
felipe.aprenderHabilidade('HTML');
console.log(`${felipe.nomeCompleto} - ${felipe.CPF}`);

const anderson = new Growdever('Anderson Quym', '555.666.777-88', 18);
anderson.realizarAtividade(9.8);
anderson.realizarAtividade(10);
anderson.realizarAtividade(9);
anderson.mudarTurma('Programa Advanced - 3ed - Turma 1');
anderson.aprenderHabilidade('Javascript');
console.log(`${anderson.nomeCompleto} - ${anderson.CPF}`);

// wallace.nomeCompleto = 'Wallace Dev';
// wallace.CPF = '000.111.222-33';
// console.log(wallace);
// console.log(felipe);
// console.log(anderson);

const google = new Empresa(
	'Google Inc.',
	'46.789.589/0001-59',
	'Google Inc. LTDA'
);

// google.contratar('Wallace');
// google.contratar('Eduarda');

const growdev = new Empresa(
	'Growdev',
	'46.789.478/0001-59',
	'Growdev Serviços de Tecnologia LTDA.'
);

// growdev.contratar('Fabricio');
// growdev.contratar('Rafael Apolinário');
// growdev.contratar('Leticia');

// growdev.demitir('Jaque');

// console.log(google);
// console.log(growdev);
