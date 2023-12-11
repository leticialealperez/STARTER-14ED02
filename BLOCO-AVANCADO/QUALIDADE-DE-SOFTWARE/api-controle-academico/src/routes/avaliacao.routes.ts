import { Router } from 'express';
import { AvaliacaoController } from '../controllers/avaliacao.controller';
import { Auth, Autorizacao, CadastroAvaliacao, ValidarFormatoId } from '../middlewares';

export function avaliacaoRoutes() {
	const router = Router();
	const controller = new AvaliacaoController();
	const auth = new Auth();
	const validarFormatoId = new ValidarFormatoId();
	const validarCadastro = new CadastroAvaliacao();

	router.post('/', [auth.validar, Autorizacao.cadastrar, validarCadastro.validar, Autorizacao.verificarPermissaoCadastrar], controller.cadastrar);
	router.get('/', [auth.validar, Autorizacao.listagemDeAvaliacoes], controller.listar);
	router.get('/:id', [auth.validar, validarFormatoId.validar], controller.listarPorID);
	router.put('/:id', [auth.validar, Autorizacao.atualizarOuDeletar ,validarFormatoId.validar], controller.atualizar);
	router.delete('/:id', [auth.validar, Autorizacao.atualizarOuDeletar ,validarFormatoId.validar], controller.deletar);

	return router;
}
