import bcrypt from 'bcrypt';
import { BcryptAdapter } from '../../src/adapters';
import { envs } from '../../src/envs';


describe('Teste unitários para o adapter BcryptAdapter', () => {
    function createSut() {
        return new BcryptAdapter(Number(envs.BCRYPT_SALT));
    }

    test('Deve retornar uma hash quando executado enviando uma string qualquer', async () => {
        // 1 - mocks
        // jest.fn() => Creates a mock function.
        // jest.spyOn() => Creates a mock function similar to jest.fn but also tracks calls to object[methodName]
        
        // 1ª OPÇÃO MOCK
        const mockBcrypt = jest.fn().mockReturnValue('any_hash');
        (bcrypt.hash as jest.Mock) = mockBcrypt;

        // 2ª OPÇÃO MOCK
        // jest.spyOn(bcrypt, 'hash')
        // .mockImplementation(() => Promise.resolve('any_hash'));

        // 2 - sut
        const sut = createSut();

        // 3 - chamada para a o metodo a ser testado
        const hash =  await sut.gerarHash('senha_qualquer');

        // 4 - validação
        expect(hash).toBe('any_hash');
    });

    test('Deve retornar true quando/se comparar uma senha com uma hash equivalente', async () => {
        const mockBcrypt = jest.fn().mockReturnValue(true);
        (bcrypt.compare as jest.Mock) = mockBcrypt;

        const sut = createSut();

        const valido =  await sut.compararHash('senha_qualquer', 'hash_qualquer');

        expect(valido).toBe(true);
    });
})