import request from 'supertest';
import { JWTAdapter } from '../../../src/adapters';
import repository from '../../../src/database/prisma.connection';
import { envs } from '../../../src/envs';
import { createServer } from '../../../src/server';
import { criaRegistrosAlunos } from './alunos';

describe('Listar alunos - Integração', () => {
    const server = createServer();
    let token = '';

    beforeAll(async () => {
        // CRIA O TOKEN PARA ACESSAR A ROTA
        const adapter = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
        token = adapter.gerarToken({
            id: "any_id",
            nomeCompleto: "any_name",
            email: "any@teste.com",
            tipo: "T",
        });

        // CRIA 2 REGISTROS DE ALUNOS
        const alunos = await criaRegistrosAlunos();

        const createAlunos = repository.aluno.createMany({
            data: [...alunos]
        });

        await repository.$transaction([
            createAlunos
        ]);

    });

    afterAll(async () => {
        // LIMPA OS REGISTROS DA TABELA "ALUNOS"
        const deleteAlunos = repository.aluno.deleteMany();
        await repository.$transaction([
            deleteAlunos
        ]);

        // DESCONECTA O BANCO DE DADOS
        await repository.$disconnect();
    });

    test('Deve retornar a lista de alunos cadastrados em ordem desc', async () => {
        // dispara a requisição
        const alunos = await criaRegistrosAlunos();

        const response = await request(server).get("/alunos").set('Authorization', `Bearer ${token}`);
        
        expect(response.statusCode).toBe(200);
        expect(response.body.dados).toHaveLength(2);
        expect(response.body.dados[0].nome).toBe(alunos[alunos.length - 1].nomeCompleto);
    });

    test('Deve retornar 404 quando não tiver nenhum aluno cadastrado', async () => {
        // dispara a requisição
        await repository.aluno.deleteMany();

        const response = await request(server).get("/alunos").set('Authorization', `Bearer ${token}`);
        
        expect(response.statusCode).toBe(404);
    });
})