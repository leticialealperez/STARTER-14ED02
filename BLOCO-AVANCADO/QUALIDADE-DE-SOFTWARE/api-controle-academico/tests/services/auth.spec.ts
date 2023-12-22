import { BcryptAdapter, JWTAdapter } from '../../src/adapters';
import { AuthService } from '../../src/services';
import { prismaMock } from '../config/prisma.mock';

describe('Testes para o service de Autenticação', () => {
    function createSut() {
        return new AuthService();
    }

    test('Deve retornar um objeto de erro quando o email informado não tiver cadastrado no DB', async () => {
        prismaMock.aluno.findUnique.mockResolvedValue(null);

        const sut = createSut();
        const result = await sut.login({
            email: 'any_email',
            senha: 'any_senha'
        });

        expect(result).toBeTruthy();
        expect(result.ok).toBe(false);
        expect(result.code).toBe(401);
        expect(result.mensagem).toBe('Credenciais inválidas. E-mail não cadastrado.');
        expect(result.dados).toBeUndefined();
    });

    test('Deve retornar um objeto de erro quando a senha informada for inválida', async () => {
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

        jest.spyOn(BcryptAdapter.prototype, 'compararHash').mockResolvedValue(false);

        const sut = createSut();
        const result = await sut.login({
            email: 'any_email',
            senha: 'any_senha'
        });

        expect(result).toBeTruthy();
        expect(result.ok).toBe(false);
        expect(result.code).toBe(401);
        expect(result.mensagem).toBe('Credenciais inválidas.');
        expect(result.dados).toBeUndefined();
    });

    test('Deve retornar um objeto de sucesso quando a senha e o email informado for válido', async () => {
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

        jest.spyOn(BcryptAdapter.prototype, 'compararHash').mockResolvedValue(true);
        jest.spyOn(JWTAdapter.prototype, 'gerarToken').mockReturnValue('any_token');

        const sut = createSut();
        const result = await sut.login({
            email: 'any_email',
            senha: 'any_senha'
        });

        expect(result).toBeTruthy();
        expect(result.ok).toBe(true);
        expect(result.code).toBe(200);
        expect(result.mensagem).toBe('Login efetuado');
        expect(result.dados).toBeDefined();
        expect(result.dados).toHaveProperty('token');
        expect(result.dados?.token).toBe('any_token');
        expect(result.dados).toHaveProperty('dadosAluno');
        expect(result.dados?.dadosAluno).toBeDefined();
        expect(result.dados?.dadosAluno).toHaveProperty('id');
    });
})