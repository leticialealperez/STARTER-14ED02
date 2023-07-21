import { randomUUID } from 'crypto';

// CLASSE PAI - SUPER CLASS
export abstract class Base {
	protected id: string;

	constructor() {
		this.id = randomUUID();
	}

	public mostrarDados(): void {
		console.log(`${this.id}`);
	}
}
