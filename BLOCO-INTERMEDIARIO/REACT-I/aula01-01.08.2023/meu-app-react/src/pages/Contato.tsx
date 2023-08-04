import { Link } from 'react-router-dom';
import MeuBotao from '../components/MeuBotao';
import MeuNavbar from '../components/MeuNavBarEstilo';
import MeuTitulo from '../components/MeuTitulo';

function Contato() {
	return (
		<>
			<MeuNavbar>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/contato'>Contatos</Link>
					</li>
				</ul>
			</MeuNavbar>
			<MeuTitulo
				textoTitulo='Contatos'
				textoSubtitulo='texto contatos'
			/>
			<MeuBotao
				tituloBotao='Entre em contato'
				primario
			/>
		</>
	);
}

export default Contato;
