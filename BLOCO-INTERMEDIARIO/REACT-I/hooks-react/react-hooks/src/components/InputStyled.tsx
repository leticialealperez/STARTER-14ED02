import styled from "styled-components";

const InputStyled = styled.input`
  width: 60%;
  padding: 24px;
  background: #e6e6e6;
  border-radius: 5px;
  border: none;

  font-size: ${(props) => props.theme.fontSizes.small};

<<<<<<< HEAD
  &:focus {
    outline-color: ${(props) => props.theme.colors.secondary};
  }
=======
	&:focus {
		outline-color: ${(props) => props.theme.colors.secondary};
	}
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b
`;

export default InputStyled;
