import { Router } from 'express';
import { AvaliacaoController } from '../controllers/avaliacao.controller';
import { Autenticao, Auth, CadastroAvaliacao, ValidarFormatoId } from '../middlewares';

export function avaliacaoRoutes() {
	const router = Router();
	const controller = new AvaliacaoController();
	const auth = new Auth();
	const validarFormatoId = new ValidarFormatoId();
	const validarCadastro = new CadastroAvaliacao();

	router.post('/', [auth.validar, Autenticao.cadastrar, validarCadastro.validar, Autenticao.verificarPermissaoCadastrar], controller.cadastrar);
	router.get('/', [auth.validar, Autenticao.verificarPermissaoListar], controller.listar);
	router.get('/:id', [auth.validar, validarFormatoId.validar, Autenticao.verificarPermissaoListar], controller.listarPorID);
	router.put('/:id', [auth.validar, Autenticao.atualizarOuDeletar ,validarFormatoId.validar], controller.atualizar);
	router.delete('/:id', [auth.validar, Autenticao.atualizarOuDeletar ,validarFormatoId.validar], controller.deletar);

	return router;
}
