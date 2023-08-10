import ContentStyled from '../components/Content/ContentStyled';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';
import imgAeroporto from '/assets/aeroporto.svg';

function QuemSomos() {
  return (
    <FlexContainerStyled modo="content">
      <ContentStyled>
        <img src={imgAeroporto} alt="Banner Aeroporto" />
      </ContentStyled>
      <ContentStyled>
        <TittleStyled tamanho="lg" primario>
          | Quem Somos
        </TittleStyled>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam neque consequuntur minima, Et alias
          laboriosam sit sed voluptatem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam neque consequuntur minima, quis, tenetur
          maxime!
        </p>
      </ContentStyled>
    </FlexContainerStyled>
  );
}

export default QuemSomos;
