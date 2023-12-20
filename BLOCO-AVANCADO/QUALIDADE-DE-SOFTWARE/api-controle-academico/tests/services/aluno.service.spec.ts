import { AlunoService } from '../../src/services';
import { prismaMock } from '../config/prisma.mock';


describe('Testes unitários para o service de Alunos', () => {
    function createSut() {
        return new AlunoService();
    }

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
    })
})