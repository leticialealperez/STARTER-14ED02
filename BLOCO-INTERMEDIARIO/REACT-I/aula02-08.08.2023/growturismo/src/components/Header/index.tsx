import FlexContainerStyled from "../shared/FlexContainerStyled";
import TittleStyled from "../shared/TittleStyled";
import HeaderStyled from "./HeaderStyled";
import NavigationStyled from "./NavigationStyled";

function Header() {
  return (
    <HeaderStyled>
      <FlexContainerStyled modo="header">
        <TittleStyled tamanho="md">GrowTravel</TittleStyled>
        <NavigationStyled>
          <ul>
            <li>
              <a href="">Quem Somos</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Planos</a>
            </li>
          </ul>
        </NavigationStyled>
      </FlexContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
