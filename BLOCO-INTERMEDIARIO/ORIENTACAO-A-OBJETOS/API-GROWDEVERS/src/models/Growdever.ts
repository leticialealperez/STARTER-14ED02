import { randomUUID } from 'crypto';
import { Habilidade } from './Habilidade';

interface DetalhesAluno {
	nome: string;
	idade: number;
	matricula: string;
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
			nome: this._nome,
			idade: this._idade,
			matricula: this._matricula,
		};

		return detalhesAluno;
	}

	// METODOS ACESSORES => somente leitura
	public get id(): string {
		return this._id;
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
