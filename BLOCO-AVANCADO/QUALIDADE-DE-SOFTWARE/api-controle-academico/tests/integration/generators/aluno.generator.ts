import { Aluno, TipoAluno } from '@prisma/client';
import { BcryptAdapter } from '../../../src/adapters';
import { envs } from '../../../src/envs';


export async function alunoGenerator() {
    const adapter = new BcryptAdapter(Number(envs.BCRYPT_SALT));
    const hash = await adapter.gerarHash('any_hash');
    const aluno1: Omit<Aluno, 'id' | 'atualizadoEm' | 'criadoEm'> = {
        idade: 27,
        email: 'joao@teste.com',
        nomeCompleto: 'João da Silva',
        password: hash,
        tipo: 'T' as TipoAluno
    };
                

    const aluno2: Omit<Aluno, 'id' | 'atualizadoEm' | 'criadoEm'> = {
        idade: 27,
        email: 'maria@teste.com',
        nomeCompleto: 'Maria da Silva',
        password: hash,
        tipo: 'M' as TipoAluno
    };


    return [aluno1, aluno2]
}