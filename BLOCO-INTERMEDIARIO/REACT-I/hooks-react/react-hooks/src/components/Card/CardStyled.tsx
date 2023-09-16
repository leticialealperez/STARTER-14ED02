import styled from "styled-components";

const CardStyled = styled.div`
<<<<<<< HEAD
  height: 100px;
  width: 60%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;

  div {
    color: ${(props) => props.theme.colors.fontColor};
=======
	height: 100px;
	width: 60%;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 10px;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px;

	div {
		color: ${(props) => props.theme.colors.fontColor};
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b

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
