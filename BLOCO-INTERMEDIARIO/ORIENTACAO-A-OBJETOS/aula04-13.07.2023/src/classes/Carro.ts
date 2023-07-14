import { Veiculo } from './Veiculo';

// FILHO
export class Carro extends Veiculo {
	constructor(
		chassi: string,
		kmRodado: number,
		cor: string,
		dono: string,
		renavam: string,
		capacidade: number,
		consumo: number,
		private _qtdAirbag: number,
		private _qtdStep: number
	) {
		super(chassi, kmRodado, cor, dono, renavam, capacidade, consumo);
	}

	rodar(): void {
		// DEFINE "O COMO"
		this._kmRodados += 12;
		this._consumo += 1;
	}
}
