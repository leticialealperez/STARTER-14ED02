import styled from 'styled-components';

const Container = styled.section`
	height: 100px;

	h1 {
		font-size: 48px;
		font-family: sans-serif;
		color: ${(props) => props.theme.colorTitulo};
		margin: 0;
	}

	small {
		display: block;
		color: ${(props) => props.theme.colorFont};
	}
`;

export default Container;
