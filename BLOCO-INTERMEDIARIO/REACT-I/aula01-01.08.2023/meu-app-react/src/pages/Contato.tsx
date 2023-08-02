import MeuBotao from '../components/MeuBotao';
import MeuTitulo from '../components/MeuTitulo';

function Contato() {
	return (
		<>
			<MeuTitulo
				textoTitulo='Contatos'
				textoSubtitulo='texto contatos'
			/>
			<MeuBotao tituloBotao='Entre em contato' />
		</>
	);
}

export default Contato;
