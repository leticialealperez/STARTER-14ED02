import { randomUUID } from 'crypto';

abstract class Base {
	protected _id: string;
	protected _criadoEm: Date;

	constructor() {
		this._id = randomUUID();
		this._criadoEm = new Date();
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

		this._criadoEm;
	}
}

class Cliente extends User {
	constructor() {
		super('teste@teste.com', '123');

		this._criadoEm;
	}
}

const novoAdmin = new Admin().login();
