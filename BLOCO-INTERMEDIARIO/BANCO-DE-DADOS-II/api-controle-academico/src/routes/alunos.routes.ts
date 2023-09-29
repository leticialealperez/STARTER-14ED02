import { Router } from 'express';
import { AlunosController } from '../controllers';

export function alunosRoutes() {
	const router = Router();
	const controller = new AlunosController();

	router.get('/');
	router.get('/:id');
	router.post('/', controller.cadastrar);
	router.put('/:id');
	router.delete('/:id');

	return router;
}
