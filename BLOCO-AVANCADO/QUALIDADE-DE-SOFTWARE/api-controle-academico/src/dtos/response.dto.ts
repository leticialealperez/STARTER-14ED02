
/**
 * 
 * Wrapper para o body de uma requisição http
 * 
 * @typeParam T - Tipo de dado retornado na propriedade "dados" do body junto das demais propriedades no padrão REST
 * 
 */

export interface ResponseDTO<T> {
	code: number;
	ok: boolean;
	mensagem: string;
	dados: T;
}


