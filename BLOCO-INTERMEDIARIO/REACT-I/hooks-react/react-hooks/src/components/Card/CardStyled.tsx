import styled from 'styled-components';

const CardStyled = styled.div`
	height: 100px;
	width: 60%;
	background-color: ${(props) => props.theme.colors['dark'].primary};
	border-radius: 10px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px;

	div {
		color: ${(props) => props.theme.colors['dark'].fontColor};

		small {
			color: inherit;
			display: block;
		}

		strong {
			color: inherit;
			font-size: ${(props) => props.theme.fontSizes.small};
		}
	}
`;

export default CardStyled;
