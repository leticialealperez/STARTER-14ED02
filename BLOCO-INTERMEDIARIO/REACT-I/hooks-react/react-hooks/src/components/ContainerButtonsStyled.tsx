import styled from 'styled-components';

const ContainerButtonsStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 50%;
	color: ${(props) => props.theme.colors['dark'].fontColor};

	button {
		width: 100px;
		padding: 8px;
		border-radius: 5px;
		border: none;
		cursor: pointer;
		margin: 5px;
		font-weight: 500;
	}
`;

export default ContainerButtonsStyled;
