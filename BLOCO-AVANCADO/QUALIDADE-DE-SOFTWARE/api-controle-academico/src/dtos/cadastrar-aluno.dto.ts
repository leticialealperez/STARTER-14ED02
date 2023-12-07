import { TipoAluno } from '@prisma/client';

export interface CadastrarAlunoDTO {
	nome: string;
	email: string;
	senha: string;
	tipo: TipoAluno;
	idade?: number;
}
