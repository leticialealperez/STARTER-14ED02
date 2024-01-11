import request from 'supertest';
import repository from '../../../src/database/prisma.connection';
import { createServer } from '../../../src/server/app.server';
import { alunoGenerator } from '../generators/aluno.generator';

describe('Cadastrar alunos - Integração', () => {
    const server = createServer();

    beforeAll( async () => {
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

    test('Deve retornar erro quando o email informado já tiver sido cadastrado', async () => {

        const [aluno1] = await alunoGenerator();

        // dispara a requisição
        const response = await request(server).post('/alunos').send({
            nome: 'any_nome', 
            email: aluno1.email, 
            senha: 'any_senha', 
            tipo: 'F'
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty("code", 400);
        expect(response.body).toHaveProperty("ok", false);
        expect(response.body).toHaveProperty("mensagem", "E-mail já cadastrado");
        expect(response.body.dados).toBeUndefined();
    });

    test('Deve retornar erro quando o email informado já tiver sido cadastrado', async () => {

        const novoAluno = {
            nome: 'Pedro da Silva', 
            email: 'pedro@teste.com', 
            senha: 'any_senha', 
            tipo: 'F'
        };

        // dispara a requisição
        const response = await request(server).post('/alunos').send(novoAluno);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty("code", 201);
        expect(response.body).toHaveProperty("ok", true);
        expect(response.body).toHaveProperty("mensagem", "Aluno cadastrado!");
        expect(response.body.dados).toBeDefined();
        expect(response.body.dados).toHaveProperty("email", novoAluno.email);
        expect(response.body.dados).toHaveProperty("nome", novoAluno.nome);
    });
})