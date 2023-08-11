import FlexContainerStyled from '../shared/FlexContainerStyled';
import LinkStyled from '../shared/LinkStyled';
import TittleStyled from '../shared/TittleStyled';
import HeaderStyled from './HeaderStyled';
import Navbar from './Navbar';

function Header() {
  return (
    <HeaderStyled>
      <FlexContainerStyled modo="header">
        <TittleStyled tamanho="md">
          <LinkStyled to={'/'}>GrowTravel</LinkStyled>
        </TittleStyled>
        <Navbar />
      </FlexContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
