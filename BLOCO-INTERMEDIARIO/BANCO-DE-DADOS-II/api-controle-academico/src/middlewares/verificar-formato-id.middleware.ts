import { NextFunction, Request, Response } from 'express';
export class VerificarFormatoId {
	public validar(req: Request, res: Response, next: NextFunction) {
		// TO-DO - lógica de validação do ID recebido no route params
		// um ID deve conter 36 bytes/caracteres
		// OBS: lembrar de chamar o middleware na rota que precisa dessa validação 👀
	}
}
