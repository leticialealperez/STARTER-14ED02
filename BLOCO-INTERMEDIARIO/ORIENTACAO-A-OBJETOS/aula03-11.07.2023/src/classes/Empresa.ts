// Growdev, Google, Amazon

// razaoSocial, nomeFantasia, CNPJ, funcionarios, valorTotalPatrimonio

// por padrão toda Empresa nasce com nenhum funcionario e com o valor do patrimonio zerado

// uma empresa pode contratar e demitir funcionarios

/*

constructor() {
    
}

*/

export class Empresa {
	nomeFantasia: string;
	CNPJ: string;
	razaoSocial: string;
	funcionarios: string[];
	valorTotalPatrimonio: number;

	constructor(nomeFantasia: string, CNPJ: string, razaoSocial: string) {
		this.nomeFantasia = nomeFantasia;
		this.CNPJ = CNPJ;
		this.razaoSocial = razaoSocial;
		this.funcionarios = [];
		this.valorTotalPatrimonio = 0;
	}

	contratar(funcionarios: string): void {
		// aqui é uma rotina que vai executar para modifcar uma propriedade
		this.funcionarios.push(funcionarios);
	}

	demitir(funcionario: string): string | undefined {
		// aqui é uma rotina que vai executar para modifcar uma propriedade
		// array.find(() => ) for

		// [5] = Joao da Silva

		// parametro => Joaquim Pereira
		const indice = this.funcionarios.findIndex((rH) => rH === funcionario); // -1

		if (indice < 0) {
			console.log('não foi possivel demitir um funcionario inexistente');

			return undefined;
		} else {
			const [funcionarioExcluido] = this.funcionarios.splice(indice, 1); // 1

			return funcionarioExcluido;
		}
	}
}
