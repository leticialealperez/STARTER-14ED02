import styled from 'styled-components';

const HeaderStyled = styled.header`
	margin: 84px 0 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	div {
		margin-bottom: 24px;
		display: flex;
		align-items: center;
		align-self: flex-end;

		img {
			width: 60px;
			height: 60px;
			border-radius: 30px;
			margin-left: 7px;
		}
	}
`;

export default HeaderStyled;
