export class Avaliacao {
	constructor(private _id: string, private _idAluno: string, private _modulo: string, private _nota: number) {}

	public get id(): string {
		return this._id;
	}

	public get idAluno(): string {
		return this._idAluno;
	}

	public get modulo(): string {
		return this._modulo;
	}

	public get nota(): number {
		return this.nota;
	}

	public toJSON() {
		return {
			id: this._id,
			idAluno: this._idAluno,
			modulo: this._modulo,
			nota: this._nota,
		};
	}
}
