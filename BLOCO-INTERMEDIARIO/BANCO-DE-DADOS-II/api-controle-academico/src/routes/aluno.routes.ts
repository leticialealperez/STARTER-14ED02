import { Router } from 'express';
import { AlunoController } from '../controllers';
import { Auth, CadastroAluno, Login, VerificarFormatoId } from '../middlewares';

export function alunoRoutes() {
	const router = Router();
	const controller = new AlunoController();
	const cadastrarAluno = new CadastroAluno();
	const verificarFormatoId = new VerificarFormatoId();
	const login = new Login();
	const auth = new Auth();

	router.post('/', [cadastrarAluno.validar], controller.create);
	router.get('/', [auth.validar], controller.listAll);
	router.get('/:id', [auth.validar, verificarFormatoId.validar], controller.listByID);
	router.put('/:id', [auth.validar, verificarFormatoId.validar], controller.update);
	router.delete('/:id', [auth.validar, verificarFormatoId.validar], controller.delete);
	router.post('/login', [login.validar], controller.login);

	return router;
}
