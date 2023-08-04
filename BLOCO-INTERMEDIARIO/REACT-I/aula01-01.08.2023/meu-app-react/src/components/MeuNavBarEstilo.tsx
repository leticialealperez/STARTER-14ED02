import styled from 'styled-components';

const MeuNavbar = styled.nav`
	height: 15vh;
	background-color: ${(props) => props.theme.btnColor};

	ul {
		height: 100%;
		display: flex;
		/* justify-content: space-around; */
		align-items: center;

		li {
			list-style: none;
			margin: 20px;

			a {
				text-decoration: none;
				color: crimson;
			}

			a:hover {
				color: #ffff;
			}
		}
	}
`;
export default MeuNavbar;
