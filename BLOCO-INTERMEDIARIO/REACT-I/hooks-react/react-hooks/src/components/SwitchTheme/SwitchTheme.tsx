import { LightMode, Nightlight } from "@mui/icons-material";
import { useMeuContext } from "../../config/GlobalContext";
import ContainerSwitchTheme from "./ContainerSwitchThemeStyled";
import SwitchStyled from "./SwitchStyled";

function SwitchTheme() {
  const { toggleTheme } = useMeuContext();

  return (
    <ContainerSwitchTheme>
      <div>
        <LightMode />
        <SwitchStyled onClick={toggleTheme} />
        <Nightlight />
      </div>
    </ContainerSwitchTheme>
  );
}

export default SwitchTheme;
