import styled from 'styled-components';

const HeaderStyled = styled.header`
  background-color: #522496;
  height: 120px;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    width: 100%;
    max-width: 350px;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    ul {
      list-style: none;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      li > a {
        color: #cccc;
        font-weight: normal;
        transition: 0.2s;
        font-size: 1.6rem;
        text-decoration: none;
      }

      li > a:hover {
        font-weight: 700;
        color: #fff;
      }
    }
  }
`;

export default HeaderStyled;
