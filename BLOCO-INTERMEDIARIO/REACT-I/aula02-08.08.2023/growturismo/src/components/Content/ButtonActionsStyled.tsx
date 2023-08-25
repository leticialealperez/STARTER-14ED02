import styled from 'styled-components';

interface ButtonActionStyledProps {
  mode: 'update' | 'delete';
}

const ButtonActionStyled = styled.button<ButtonActionStyledProps>`
  background-color: ${(props) => (props.mode === 'delete' ? 'red' : 'green')};
  font-size: 1.6rem;
  border: none;
  padding: 8px;
  border-radius: 5px;
  margin: 6px;
  opacity: 0.85;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default ButtonActionStyled;
