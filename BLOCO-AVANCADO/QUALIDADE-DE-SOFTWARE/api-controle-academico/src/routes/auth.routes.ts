import { Router } from 'express';
import { AlunoController } from '../controllers';
import { Auth, Login } from '../middlewares';

export function authRoutes() {
	const router = Router();
	const controller = new AlunoController();
	const login = new Login();
	const auth = new Auth();

	router.post('/login', [login.validar], controller.login);
	router.post('/logout', [auth.validar], controller.logout);

	return router;
}
