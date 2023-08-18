import styled, { css } from 'styled-components';

interface FeedbackStyledProps {
  color: 'success' | 'error' | 'info' | 'warning' | '';
  mostrar?: boolean;
}

const FeedbackStyled = styled.div<FeedbackStyledProps>`
  padding: 16px;
  color: #ffff;
  border-radius: 5px;
  visibility: ${(props) => (props.mostrar ? 'visible' : 'hidden')};

  p {
    font-size: 1.2rem;
  }

  ${(props) => {
    switch (props.color) {
      case 'success':
        return css`
          background-color: green;
        `;
      case 'error':
        return css`
          background-color: red;
        `;
      case 'info':
        return css`
          background-color: #0073ff;
        `;
      case 'warning':
        return css`
          background-color: #ff9900;
        `;
      default:
    }
  }}
`;

export default FeedbackStyled;
