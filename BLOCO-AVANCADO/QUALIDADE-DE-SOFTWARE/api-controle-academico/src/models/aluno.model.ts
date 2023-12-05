import { Endereco } from './endereco.model';

export class Aluno {
	constructor(
		private _id: string,
		private _nome: string,
		private _email: string,
		private _senha: string,
		private _idade?: number,
		private _endereco?: Endereco
	) {}

	public get id(): string {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get email(): string {
		return this._email;
	}

	public get senha(): string {
		return this._senha;
	}

	public get idade(): number | undefined {
		return this._idade;
	}

	public get endereco(): Endereco | undefined {
		return this._endereco;
	}

	public toJSON() {
		return {
			id: this._id,
			nome: this._nome,
			email: this._email,
			idade: this._idade,
			endereco: this._endereco?.toJSON(),
		};
	}
}
