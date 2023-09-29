import { Router } from 'express';
import { AlunoController } from '../controllers';

export function alunoRoutes() {
	const router = Router();
	const controller = new AlunoController();

	router.get('/', controller.listAll);
	router.get('/:id', controller.listByID);
	router.post('/', controller.create);
	router.put('/:id', controller.update);
	router.delete('/:id', controller.delete);

	return router;
}
