import { Veiculo } from './Veiculo';

// FILHO
export class Caminhao extends Veiculo {
	constructor(
		chassi: string,
		kmRodado: number,
		cor: string,
		dono: string,
		renavam: string,
		capacidade: number,
		consumo: number,
		private _qtdEixos: number,
		private _tipoRolagem:
			| 'simples'
			| 'dupla'
			| 'tandem'
			| 'não em tandem'
			| ''
	) {
		super(chassi, kmRodado, cor, dono, renavam, capacidade, consumo);
	}

	rodar(): void {
		// DEFINE "O COMO"
		this._kmRodados += 5;
		this._consumo += 1;
	}
}
