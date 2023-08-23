import styled from 'styled-components';

const ContatoItemStyled = styled.li`
  font-size: 1.4rem;
  list-style: none;
  margin-bottom: 8px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 280px;
  }
`;

export default ContatoItemStyled;
