import { Router } from 'express';
import { AvaliacaoController } from '../controllers/avaliacao.controller';
import { Auth, CadastroAvaliacao, VerificarIdAvaliacao } from '../middlewares';

export function avaliacaoRoutes() {
	const router = Router();
	const controller = new AvaliacaoController();
	const auth = new Auth();
	const validarCadastro = new CadastroAvaliacao();
	const verificarId = new VerificarIdAvaliacao();

	router.post('/', [auth.validar, validarCadastro.validar], controller.cadastrar);
	router.get('/', [auth.validar], controller.listar);
	router.get('/:idAvaliacao', [auth.validar, verificarId.validar], controller.listarPorID);
	router.put('/:idAvaliacao', [auth.validar, verificarId.validar], controller.atualizar);
	router.delete('/:idAvaliacao', [auth.validar, verificarId.validar], controller.deletar);

	return router;
}
