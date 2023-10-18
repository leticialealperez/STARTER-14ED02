import { Router } from 'express';
import { AlunoController } from '../controllers';
import { Auth, CadastroAluno, Login, ValidarFormatoId, VerificarIdAluno } from '../middlewares';

export function alunoRoutes() {
	const router = Router();
	const controller = new AlunoController();
	const cadastrarAluno = new CadastroAluno();
	const validarFormatoId = new ValidarFormatoId();
	const verificarIdAluno = new VerificarIdAluno();
	const login = new Login();
	const auth = new Auth();

	router.post('/', [cadastrarAluno.validar], controller.cadastrar);
	router.get('/', [auth.validar], controller.listar);
	router.get('/:id', [auth.validar, validarFormatoId.validar], controller.listPorID);
	router.put('/:id', [auth.validar, validarFormatoId.validar, verificarIdAluno.validar], controller.atualizar);
	router.delete('/:id', [auth.validar, validarFormatoId.validar, verificarIdAluno.validar], controller.deletar);
	router.post('/login', [login.validar], controller.login);
	router.post('/logout', [auth.validar], controller.logout);

	return router;
}
