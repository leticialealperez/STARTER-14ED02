import FlexContainerStyled from '../shared/FlexContainerStyled';
import FooterStyled from './FooterStyled';

function Footer() {
  return (
    <FooterStyled>
      <FlexContainerStyled modo="footer">
        <p>&copy;2023 Full Stack Growdev</p>
        <p>14ª Edição - Turma 02</p>
      </FlexContainerStyled>
    </FooterStyled>
  );
}

export default Footer;
