export abstract class Veiculo {
	constructor(
		protected _chassi: string,
		protected _kmRodados: number,
		protected _cor: string,
		protected _proprietario: string,
		protected _renavam: string,
		protected _capacidadeTanque: number,
		protected _consumo: number
	) {}

	// DEFINE "O QUE"
	rodar(): void {}
}
