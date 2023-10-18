import { Router } from 'express';
import { AvaliacaoController } from '../controllers/avaliacao.controller';
import { Auth, CadastroAvaliacao, ValidarFormatoId, VerificarIdAvaliacao } from '../middlewares';

export function avaliacaoRoutes() {
	const router = Router();
	const controller = new AvaliacaoController();
	const auth = new Auth();
	const validarFormatoId = new ValidarFormatoId();
	const validarCadastro = new CadastroAvaliacao();
	const verificarId = new VerificarIdAvaliacao();

	router.post('/', [auth.validar, validarCadastro.validar], controller.cadastrar);
	router.get('/', [auth.validar], controller.listar);
	router.get('/:id', [auth.validar, validarFormatoId.validar], controller.listarPorID);
	router.put('/:id', [auth.validar, validarFormatoId.validar, verificarId.validar], controller.atualizar);
	router.delete('/:id', [auth.validar, validarFormatoId.validar, verificarId.validar], controller.deletar);

	return router;
}
