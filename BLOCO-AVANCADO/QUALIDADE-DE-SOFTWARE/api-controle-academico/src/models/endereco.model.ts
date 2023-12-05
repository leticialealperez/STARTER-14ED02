export class Endereco {
	constructor(
		private _id: string,
		private _logradouro: string,
		private _cep: string,
		private _numero: string,
		private _cidade: string,
		private _uf: string,
		private _complemento?: string
	) {}

	public get id(): string {
		return this._id;
	}

	public get logradouro(): string {
		return this._logradouro;
	}

	public get cep(): string {
		return this._cep;
	}

	public get numero(): string {
		return this._numero;
	}

	public get cidade(): string {
		return this._cidade;
	}

	public get uf(): string {
		return this._uf;
	}

	public get complemento(): string | undefined {
		return this._complemento;
	}

	public toJSON() {
		return {
			id: this._id,
			logradouro: this._logradouro,
			cep: this._cep,
			numero: this._numero,
			cidade: this._cidade,
			uf: this._uf,
			complemento: this._complemento,
		};
	}
}
