import { Router } from 'express';
import { AlunoController } from '../controllers';
import { Auth, CadastroAluno, ValidarFormatoId, VerificarIdAluno } from '../middlewares';

export function alunoRoutes() {
	const router = Router();
	const controller = new AlunoController();
	const cadastrarAluno = new CadastroAluno();
	const validarFormatoId = new ValidarFormatoId();
	const verificarIdAluno = new VerificarIdAluno();
	const auth = new Auth();

	router.post('/', [cadastrarAluno.validar], controller.cadastrar);
	router.get('/', [auth.validar], controller.listar);
	router.get('/:id', [auth.validar, validarFormatoId.validar], controller.listPorID);
	router.put('/:id', [auth.validar, validarFormatoId.validar, verificarIdAluno.validar], controller.atualizar);
	router.delete('/:id', [auth.validar, validarFormatoId.validar, verificarIdAluno.validar], controller.deletar);

	return router;
}
