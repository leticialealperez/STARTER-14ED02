import { Router } from 'express';
import { AuthController } from '../controllers';
import { Login } from '../middlewares';

export function authRoutes() {
	const router = Router();
	const controller = new AuthController();
	const login = new Login();

	router.post('/login', [login.validar], controller.login);

	return router;
}
