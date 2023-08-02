import MeuBotao from '../components/MeuBotao';
import MeuTitulo from '../components/MeuTitulo';

function Home() {
	return (
		<>
			<MeuTitulo
				textoTitulo='Home'
				textoSubtitulo='página home'
			/>
			<MeuBotao tituloBotao='Clique aqui!' />
		</>
	);
}

export default Home;
