import request from 'supertest';
import repository from '../../../src/database/prisma.connection';
import { createServer } from '../../../src/server/app.server';
import { alunoGenerator } from '../generators/aluno.generator';
import { tokenGenerator } from '../generators/token.generator';

describe('Listar alunos - Integração', () => {
    const server = createServer();
    let token = '';

    beforeAll( async () => {
        token = tokenGenerator();

        const alunosGerados = await alunoGenerator();

        await repository.aluno.createMany({
            data: [...alunosGerados]
        });
    });

    afterAll(async () => {
        await repository.aluno.deleteMany();

        await repository.$disconnect();
    });

    jest.setTimeout(1000000);

    test('deve retornar 200 e uma lista de tamanho 2', async () => {

        const alunosGerados = await alunoGenerator();

        // dispara a requisição
        const response = await request(server).get('/alunos').set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("mensagem", "Alunos listados com sucesso");
        expect(response.body.dados).toHaveLength(2);
        expect(response.body.dados[0].nome).toBe(alunosGerados[alunosGerados.length - 1].nomeCompleto);
    })

    test('Retornar 404 quando não for encontrado nenhum aluno na base de dados', async () => {

        await repository.aluno.deleteMany();

        const response = await request(server).get('/alunos').set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(404);
        expect(response.body).toHaveProperty("mensagem", "Não foram encontrados alunos cadastrados no sistema.");
    });
})