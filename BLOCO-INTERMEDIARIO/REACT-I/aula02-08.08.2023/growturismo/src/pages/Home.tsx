import imgHome from '/assets/home.svg';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';
import ContentStyled from '../components/Content/ContentStyled';
import ButtonStyled from '../components/Content/ButtonStyled';

function Home() {
  return (
    <FlexContainerStyled modo="content">
      <ContentStyled>
        <TittleStyled tamanho="lg" primario>
          GrowTravel
        </TittleStyled>
        <p>O melhor serviço para você!</p>
        <ButtonStyled>Saiba mais!</ButtonStyled>
      </ContentStyled>
      <ContentStyled>
        <img src={imgHome} alt="banner de apresentação" />
      </ContentStyled>
    </FlexContainerStyled>
  );
}

export default Home;
