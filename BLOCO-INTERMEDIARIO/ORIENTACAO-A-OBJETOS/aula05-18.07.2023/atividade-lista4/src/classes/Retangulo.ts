import { FormatoDoElemento } from '../contratos/FormatoDeElemento';

class Retangulo implements FormatoDoElemento {
	constructor(public comprimento: number, public altura: number) {}

	desenhar() {
		// como vai ser feito
		console.log('Desenhando um retangulo...');
		console.log(this.comprimento);
		console.log(this.altura);
	}

	redimensionar() {
		// como vai ser feito
		console.log('Redimensionando um retangulo...');
		console.log(this.comprimento);
		console.log(this.altura);
	}
}
