import { Veiculo } from './Veiculo';

// FILHO
export class Motocicleta extends Veiculo {
	constructor(
		chassi: string,
		kmRodado: number,
		cor: string,
		dono: string,
		renavam: string,
		capacidade: number,
		consumo: number,
		private _qtdPesinho: number
	) {
		super(chassi, kmRodado, cor, dono, renavam, capacidade, consumo);
	}

	rodar(): void {
		// DEFINE "O COMO"
		this._kmRodados += 50;
		this._consumo += 1;
	}
}
