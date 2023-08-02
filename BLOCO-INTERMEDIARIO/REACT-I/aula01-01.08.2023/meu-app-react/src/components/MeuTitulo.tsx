interface MeuTituloParametro {
	textoTitulo: string;
	textoSubtitulo: string;
}

function MeuTitulo(prop: MeuTituloParametro) {
	return (
		<>
			<h1>{prop.textoTitulo}</h1>
			<small>{prop.textoSubtitulo}</small>
		</>
	);
}

export default MeuTitulo;
