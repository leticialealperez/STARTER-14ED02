import { Aluno } from '../../src/models';
import { AlunoService } from '../../src/services';
import { prismaMock } from '../config/prisma.mock';


describe('Testes unitários para o service de Alunos', () => {
    function createSut() {
        return new AlunoService();
    }
    
    // LISTAR TODOS
    test('Deve retornar um objeto de erro quando não houver aluno cadastrado na base de dados', async() => {
        prismaMock.aluno.findMany.mockResolvedValue([]);

        const sut = createSut();

        const result = await sut.listar();

        expect(result).toBeTruthy();
        expect(result.ok).toBe(false);
        expect(result.code).toBe(404);
        expect(result.mensagem).toBe('Não foram encontrados alunos cadastrados no sistema.');
        expect(result.dados).toBeUndefined();
    });

    // LISTAR TODOS
    test('Deve retornar um objeto de sucesso quando houver ao menos um aluno cadastrado na base de dados', async() => {
        prismaMock.aluno.findMany.mockResolvedValue([{
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        }]);

        const sut = createSut();
        const result = await sut.listar();

        expect(result).toBeTruthy();
        expect(result.ok).toBe(true);
        expect(result.code).toBe(200);
        expect(result.mensagem).toBe('Alunos listados com sucesso');
        expect(result.dados).toBeDefined();
        expect(result.dados).toHaveLength(1);
    });

    // CADASTRAR
    test('Deve retornar um objeto de erro quando houver a um aluno cadastrado com o email informado no parametro', async () => {
        prismaMock.aluno.findUnique.mockResolvedValue({
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        });

        const sut = createSut();
        const result = await sut.cadastrar({
            email: 'any_email',
            nome: 'any_nome',
            senha: 'any_senha',
            tipo: 'T'
        });

        expect(result).toBeTruthy();
        expect(result.ok).toBe(false);
        expect(result.code).toBe(400);
        expect(result.mensagem).toBe('E-mail já cadastrado');
        expect(result.dados).toBeUndefined();
    });

    // CADASTRAR
    test('Deve retornar um objeto de sucesso quando não houver o email cadastrado na base de dados', async () => {
        prismaMock.aluno.findUnique.mockResolvedValue(null);
        prismaMock.aluno.create.mockResolvedValue({
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        })

        const sut = createSut();
        const result = await sut.cadastrar({
            email: 'any_email',
            nome: 'any_nome',
            senha: 'any_senha',
            tipo: 'T'
        });

        expect(result).toBeTruthy();
        expect(result.ok).toBe(true);
        expect(result.code).toBe(201);
        expect(result.mensagem).toBe('Aluno cadastrado!');
        expect(result.dados).toBeDefined();
        expect(result.dados).toBeInstanceOf(Aluno);
    });

    // LISTAR POR ID - id é invalido
    test('Deve retornar um objeto de erro quando o ID informado não existir na base de dados', async () => {
        prismaMock.aluno.findUnique.mockResolvedValue(null);

        const sut = createSut();
        const result = await sut.listarPorID('any_id');

        expect(result).toBeTruthy();
        expect(result.ok).toBe(false);
        expect(result.code).toBe(404);
        expect(result.mensagem).toBe('Aluno não encontrado');
        expect(result.dados).toBeUndefined();
    });

    // LISTAR POR ID - id é válido
    test('Deve retornar um objeto de sucesso quando o ID informado existir na base de dados', async () => {
        prismaMock.aluno.findUnique.mockResolvedValue({
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        });

        const sut = createSut();
        const result = await sut.listarPorID('any_id');

        expect(result).toBeTruthy();
        expect(result.ok).toBe(true);
        expect(result.code).toBe(200);
        expect(result.mensagem).toBe('Aluno encontrado');
        expect(result.dados).toBeDefined();
        expect(result.dados).toBeInstanceOf(Aluno);
    });

    // ATUALIZAR
    test('Deve retornar um objeto de sucesso quando o ID informado existir na base de dados', async () => {
        prismaMock.aluno.update.mockResolvedValue({
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        });

        const sut = createSut();
        const result = await sut.atualizar({
            idAluno: 'any_id'
        });

        expect(result).toBeTruthy();
        expect(result.ok).toBe(true);
        expect(result.code).toBe(200);
        expect(result.mensagem).toBe('Aluno atualizado');
        expect(result.dados).toBeDefined();
        expect(result.dados).toBeInstanceOf(Aluno);
    });


    // DELETAR
    test('Deve retornar um objeto de sucesso quando o ID informado existir na base de dados', async () => {
        prismaMock.aluno.delete.mockResolvedValue({
            id: 'any_id',
            atualizadoEm: new Date(),
            criadoEm: new Date(),
            email: 'any_email',
            idade:27,
            nomeCompleto: 'any_name',
            password: 'any_password',
            tipo: 'T'
        });

        const sut = createSut();
        const result = await sut.deletar('any_id');

        expect(result).toBeTruthy();
        expect(result.ok).toBe(true);
        expect(result.code).toBe(200);
        expect(result.mensagem).toBe('Aluno excluido');
        expect(result.dados).toBeDefined();
        expect(result.dados).toBeInstanceOf(Aluno);
    });

})