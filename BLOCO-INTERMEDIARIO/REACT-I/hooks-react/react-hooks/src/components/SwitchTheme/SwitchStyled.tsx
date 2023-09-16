import { Switch } from "@mui/material";
import { styled } from "styled-components";

const SwitchStyled = styled(Switch)`
  color: ${(props) => props.theme.colors.fontColor};
  span {
    color: ${(props) => props.theme.colors.fontColor};
  }
`;

export default SwitchStyled;
