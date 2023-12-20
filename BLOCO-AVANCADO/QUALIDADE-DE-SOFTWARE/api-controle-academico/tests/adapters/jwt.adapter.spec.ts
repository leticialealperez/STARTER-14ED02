import jwt from 'jsonwebtoken';
import { JWTAdapter } from '../../src/adapters';
import { envs } from '../../src/envs';

describe('Teste unitários para o adapter JWTAdapter', () => {
    function createSut() {
        return new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
    }

    test('Deve retornar um token quando chamado o metodo gerarToken enviando um objeto qualquer', () => {
        // 1 - mock
        const mockJWT = jest.fn().mockReturnValue('any_token');
        (jwt.sign as jest.Mock) = mockJWT;

        // 2 = sut
        const sut = createSut();
    
        // 3 - chamar o metodo a ser testado
        const token = sut.gerarToken({
            anyProperty: 'any_value'
        });
        
        // 4 - validação
        expect(token).toBe('any_token');
    });

    test('Deve retornar um objeto qualquer quando chamado o metodo decodificarToken enviando um token válido', () => {
        // 1 - mock
        const mockJWT = jest.fn().mockReturnValue({
            anyProperty: 'any_value'
        });
        (jwt.verify as jest.Mock) = mockJWT;

        // 2 = sut
        const sut = createSut();
    
        // 3 - chamar o metodo a ser testado
        const resultado = sut.decodificarToken('any_token');
        
        // 4 - validação
        // expect(resultado).toStrictEqual({
        //     anyProperty: 'any_value'
        // });
        expect(resultado).toHaveProperty('anyProperty');
        expect(resultado.anyProperty).toBeDefined();
        expect(resultado.anyProperty).toBe('any_value');
    });

    test('Deve retornar undefined quando chamado o metodo decodificarToken enviando um token inválido', () => {
        // 1 - mock
        const mockJWT = jest.fn().mockReturnValue(undefined);
        (jwt.verify as jest.Mock) = mockJWT;

        // 2 = sut
        const sut = createSut();
    
        // 3 - chamar o metodo a ser testado
        const resultado = sut.decodificarToken('any_token_inválido');
        
        // 4 - validação
        expect(resultado).toBeUndefined();
        expect(resultado).toBeFalsy();
    });
})