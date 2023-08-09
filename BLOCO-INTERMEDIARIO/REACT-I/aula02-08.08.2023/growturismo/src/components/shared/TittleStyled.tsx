import styled, { css } from 'styled-components';

interface TittleStyledProps {
	tamanho: 'sm' | 'md' | 'lg';
	primario?: boolean;
}

const TittleStyled = styled.h1<TittleStyledProps>`
	color: ${(props) => (props.primario ? '#122a57' : '#fff')};

	${(props) => {
		switch (props.tamanho) {
			case 'sm':
				return css`
					font-size: 2.4rem;
				`;
			case 'md':
				return css`
					font-size: 3.2rem;
				`;
			case 'lg':
				return css`
					font-size: 4.8rem;
				`;
		}
	}}
`;

export default TittleStyled;
