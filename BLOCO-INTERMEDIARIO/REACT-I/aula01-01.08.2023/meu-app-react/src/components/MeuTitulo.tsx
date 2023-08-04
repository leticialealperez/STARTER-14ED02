import Container from './Container';

interface MeuTituloParametro {
	textoTitulo: string;
	textoSubtitulo: string;
}

function MeuTitulo(prop: MeuTituloParametro) {
	return (
		<>
			<Container>
				<h1>{prop.textoTitulo}</h1>
				<small>{prop.textoSubtitulo}</small>
			</Container>
		</>
	);
}

export default MeuTitulo;
