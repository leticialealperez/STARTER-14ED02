interface MeuParagrafoParams {
	texto?: string;
}

function MeuParagrafo(prop: MeuParagrafoParams) {
	return (
		<p>
			{prop.texto ||
				'Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.'}
		</p>
	);
}

export default MeuParagrafo;
