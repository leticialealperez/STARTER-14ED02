import { styled } from "styled-components";

const ContainerSwitchTheme = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 14px 24px;

  div {
    display: flex;
    align-items: center;

    svg {
      color: ${(props) => props.theme.colors.fontColor};
    }
  }
`;

export default ContainerSwitchTheme;
