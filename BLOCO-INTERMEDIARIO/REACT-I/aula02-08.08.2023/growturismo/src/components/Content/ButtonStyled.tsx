import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  primario?: boolean;
  tamanho: 'sm' | 'md' | 'lg';
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  background-color: ${(props) => (props.primario ? '#122a57' : 'transparent')};
  color: ${(props) => (props.primario ? 'white' : '#122a57')};
  font-weight: 600;
  border-radius: 40px;
  border: 2px solid #122a57;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #4b5f87;

    color: #fff;
    border: 2px solid #4b5f87;
  }

  ${(props) => {
    switch (props.tamanho) {
      case 'sm':
        return css`
          width: 150px;
          padding: 10px;
        `;
      case 'md':
        return css`
          width: 180px;
          padding: 15px;
        `;
      case 'lg':
        return css`
          width: 200px;
          padding: 20px;
        `;
    }
  }}
`;

export default ButtonStyled;
