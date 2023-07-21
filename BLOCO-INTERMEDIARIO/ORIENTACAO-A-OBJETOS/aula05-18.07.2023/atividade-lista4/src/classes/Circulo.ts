import { FormatoDoElemento } from '../contratos/FormatoDeElemento';

export class Circulo implements FormatoDoElemento {
	constructor(public raio: number) {}

	desenhar() {
		console.log('Desenhando...');
		console.log(this.raio);
	}
	redimensionar() {
		console.log('Redimensionando...');
		console.log(this.raio);
	}
}
