import { randomUUID } from 'crypto';

abstract class Base {
	private _id: string;
	private _criadoEm: Date;

	constructor() {
		this._id = randomUUID();
		this._criadoEm = new Date();
	}

	public get id(): string {
		return this._id;
	}

	public get criadoEm(): Date {
		return this._criadoEm;
	}
}

abstract class User extends Base {
	protected _email: string;
	protected _senha: string;

	constructor(email: string, senha: string) {
		super();
		this._email = email;
		this._senha = senha;
	}

	public login(): void {}
}

class Admin extends User {
	constructor() {
		super('teste@teste.com', '123');

		this.criadoEm;
	}
}

class Cliente extends User {
	constructor() {
		super('teste@teste.com', '123');

		this.criadoEm;
	}
}

const novoAdmin = new Admin().login();
