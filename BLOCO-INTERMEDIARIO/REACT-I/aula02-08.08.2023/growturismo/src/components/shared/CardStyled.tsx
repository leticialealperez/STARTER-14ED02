import styled from 'styled-components';

interface CardStyledProps {
  border?: boolean;
}

const CardStyled = styled.div<CardStyledProps>`
  width: 240px;
  height: 320px;

  padding: 24px;
  border: ${(props) => (props.border ? '3px solid #122a57' : 'none')};

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 12px;

    ul {
      margin: 4px 0;
    }

    li {
      font-size: 1.5rem;
      list-style-type: square;
      list-style-position: inside;
    }

    hr {
      border: none;
      width: 100%;
      height: 3px;
      background-color: #122a57;
    }

    img {
      width: 100%;
    }

    h2 {
      color: #122a57;
      font-size: 1.8rem;
    }
  }
`;
export default CardStyled;
