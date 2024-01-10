import { TipoAluno } from '@prisma/client';
import { BcryptAdapter } from '../../../src/adapters';
import { envs } from '../../../src/envs';

export async function criaRegistrosAlunos() {
    const hashSenha = await new BcryptAdapter(Number(envs.BCRYPT_SALT)).gerarHash('any_senha');
    const aluno1 = {
        email: 'joao@teste.com',
        nomeCompleto: 'João da Silva',
        password: hashSenha,
        tipo: 'F' as TipoAluno
    }
    const aluno2 = {
        email: 'maria@teste.com',
        nomeCompleto: 'Maria da Silva',
        password: hashSenha,
        tipo: 'T' as TipoAluno
    }

    return [aluno1, aluno2]
}