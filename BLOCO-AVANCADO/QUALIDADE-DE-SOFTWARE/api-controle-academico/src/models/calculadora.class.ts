export class Calculadora {

    public somar(num1: number, num2: number): number {
        
        return num1 + num2;
    }

    public subtrair(num1: number, num2: number): number {
        return num1 - num2;
    }

    public multiplicar(num1: number, num2: number): number {
         return num1 * num2;
    }

    public dividir(num1: number, num2: number): number {
        if(num2 === 0) {
            throw new Error('Não é possível dividir por zero');
        }

        return num1 / num2;
    }
}
