import { randomUUID } from 'crypto';

export class Habilidade {
	private _id: string;
	private _descricao: string;

	constructor(descricao: string) {
		this._id = randomUUID();
		this._descricao = descricao;
	}
}
