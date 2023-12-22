import { Aluno } from '@prisma/client';
import request from 'supertest';
import { createServer } from '../../src/server';
import { prismaMock } from '../config/prisma.mock';

describe('POST /alunos', () => {
    const server = createServer();

    test('Deve retornar 400 quando enviado um body faltando propriedades', async () => {
        const response = await request(server).post("/alunos").send();

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(false);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(400);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('Faltam campos!');
    });

    test('Deve retornar 400 quando enviado no body um email invalido', async () => {
        const response = await request(server).post("/alunos").send({
            nome: 'any_nome', 
            email: 'email_invalido', 
            senha: 'any_senha', 
            tipo: 'any_tipo'
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(false);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(400);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('E-mail inválido!');
    });

    test('Deve retornar 400 quando enviado no body uma senha invalida', async () => {
        const response = await request(server).post("/alunos").send({
            nome: 'any_nome', 
            email: 'email_invalido@teste.com', 
            senha: '123', 
            tipo: 'any_tipo'
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(false);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(400);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('Mínimo 6 caracteres para senha');
    });

    test('Deve retornar 400 quando enviado no body um tipo invalido', async () => {
        const response = await request(server).post("/alunos").send({
            nome: 'any_nome', 
            email: 'email_invalido@teste.com', 
            senha: 'any_senha', 
            tipo: 'any_tipo'
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(false);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(400);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('Tipo inválido!');
    });

    test('Deve retornar 500 quando tiver qualquer erro no servidor', async () => {
        prismaMock.aluno.findUnique.mockRejectedValue(new Error('any_error'))


        const response = await request(server).post("/alunos").send({
            nome: 'any_nome', 
            email: 'email_invalido@teste.com', 
            senha: 'any_senha', 
            tipo: 'T'
        });

        expect(response.statusCode).toBe(500);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(false);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(500);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('Error: any_error');
    });

    test('Deve retornar 400 quando enviado um email já cadastrado na base de dados', async () => {
        prismaMock.aluno.findUnique.mockResolvedValue({
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        })


        const response = await request(server).post("/alunos").send({
            nome: 'any_nome', 
            email: 'any_email@teste.com', 
            senha: 'any_senha', 
            tipo: 'T'
        });

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(false);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(400);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('E-mail já cadastrado');
        expect(response.body.dados).toBeUndefined();
    });

     test('Deve retornar 201 quando enviado os dados corretos no body', async () => {
        const alunoMock: Aluno = {
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        }
        prismaMock.aluno.findUnique.mockResolvedValue(null);
        prismaMock.aluno.create.mockResolvedValue(alunoMock);


        const response = await request(server).post("/alunos").send({
            nome: 'any_nome', 
            email: 'any_email@teste.com', 
            senha: 'any_senha', 
            tipo: 'T'
        });

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('ok');
        expect(response.body.ok).toBe(true);
        expect(response.body).toHaveProperty('code');
        expect(response.body.code).toBe(201);
        expect(response.body).toHaveProperty('mensagem');
        expect(response.body.mensagem).toBe('Aluno cadastrado!');
        expect(response.body).toHaveProperty('dados');
        expect(response.body.dados).toBeDefined();
        expect(response.body.dados).toEqual({
            id: alunoMock.id,
            nome: alunoMock.nomeCompleto,
            idade: alunoMock.idade,
            email: alunoMock.email
        });
    });

})