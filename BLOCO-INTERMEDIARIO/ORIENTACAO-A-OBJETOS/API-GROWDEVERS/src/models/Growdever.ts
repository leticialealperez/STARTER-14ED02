import { randomUUID } from 'crypto';
import { Habilidade } from './Habilidade';

export interface DetalhesAluno {
	id: string;
	nome: string;
	idade: number;
	matricula: string;
	habilidades: Array<Habilidade>;
}

export class Growdever {
	private _id: string;
	private _habilidades: Array<Habilidade>;
	private _nome: string;
	private _idade: number;
	private _matricula: string;

	constructor(nome: string, idade: number) {
		this._id = randomUUID();
		this._nome = nome;
		this._idade = idade;
		this._matricula = new Date().getTime().toString();
		this._habilidades = [];
	}

	public addHabilidade(novaHabilidade: Habilidade): void {
		this._habilidades.push(novaHabilidade);
	}

	public detalheAluno(): DetalhesAluno {
		const detalhesAluno = {
			id: this._id,
			nome: this._nome,
			idade: this._idade,
			matricula: this._matricula,
			habilidades: this._habilidades,
		};

		return detalhesAluno;
	}

	// METODO MODIFICADORES => atualização do atributo
	public set nome(novoNome: string) {
		// lógica de validação do novo nome
		if (novoNome !== '') {
			this._nome = novoNome;
		} else {
			console.log(
				'Nome não pode ser alterado. Não tem caracters mínimos para alteração.'
			);
		}
	}

	public set idade(novaIdade: number) {
		this._idade = novaIdade;
	}
}

// POO => Classes => objeto é uma instancia
// PROCEDURAL => TYPE/INTERFACE => objeto literal
