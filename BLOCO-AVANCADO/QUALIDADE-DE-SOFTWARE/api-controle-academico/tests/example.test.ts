import { Calculadora } from '../src/models/calculadora.class';

describe("Testes para o módulo Calculadora", () => {
    function createSut() {
        return new Calculadora();
    }

    test('deve retornar 2 quando somado 1 e 1.', () => {
        // 1 - SUT
        const sut = createSut();

        // 2 - chamada para o metodo do SUT que estará sendo testado
        const resultadoSoma = sut.somar(1, 1);

        // 3 - validação do resultado
        expect(resultadoSoma).toBe(2);
    });

    test('deve retornar 2 quando subtraido 3 de 5.', () => {
        const sut = createSut();

        const resultadoSubtracao = sut.subtrair(5, 3);

        expect(resultadoSubtracao).toBe(2);
    });

    test('deve retornar 4 quando multiplicado 2 e 2', () => {
        const sut = createSut();
        const resultadoMultiplicacao = sut.multiplicar(2, 2);

        expect(resultadoMultiplicacao).toBe(4);
    });

    test('deve gerar um erro quando dividido qualquer valor por 0', () => {
        const sut = createSut();
    
        expect(() => sut.dividir(20, 0)).toThrow(Error);
        expect(() => sut.dividir(10, 0)).toThrow('Não é possível dividir por zero');
    });

    test('deve retornar 2 quando dividido 10 por 5', () => {
        const sut = createSut();
        const resultadoDivisao = sut.dividir(10, 5);

        expect(resultadoDivisao).toBe(2);
    });
})