import styled from 'styled-components';

const ContentStyled = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  min-height: 200px;

  h1 {
    margin-bottom: 10px;
  }

  p {
    font-size: 2rem;
  }

  img {
    width: 90%;
  }
`;

export default ContentStyled;
