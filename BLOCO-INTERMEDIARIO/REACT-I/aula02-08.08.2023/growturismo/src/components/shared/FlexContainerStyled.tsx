import styled, { css } from 'styled-components';

interface FlexContainerStyledProps {
  modo: 'header' | 'content' | 'footer';
}

const FlexContainerStyled = styled.div<FlexContainerStyledProps>`
  display: flex;
  max-width: 992px;
  min-width: 320px;
  margin: auto;

  ${(props) => {
    switch (props.modo) {
      case 'header':
        return css`
          width: 992px;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;

          @media (max-width: 1024px) {
            padding: 0 24px;
          }
        `;
      case 'content':
        return css`
          height: calc(100vh - 190px);
          align-items: center;
          justify-content: space-around;
        `;
      case 'footer':
        return css`
          justify-content: space-between;
          color: #fff;
          width: 992px;

          p {
            font-size: 1.4rem;
          }
        `;
      default:
    }
  }}
`;

export default FlexContainerStyled;
