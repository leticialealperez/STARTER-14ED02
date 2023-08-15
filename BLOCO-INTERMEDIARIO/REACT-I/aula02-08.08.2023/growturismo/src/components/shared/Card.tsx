import ButtonStyled from '../Content/ButtonStyled';
import CardStyled from './CardStyled';

interface CardProps {
  img: string;
  imgAlt: string;
  text: string;
}

function Card(props: CardProps) {
  return (
    <CardStyled>
      <div>
        <img src={props.img} alt={props.imgAlt} />
        <h2>{props.text}</h2>
        <ButtonStyled tamanho="sm">Saiba Mais</ButtonStyled>
      </div>
    </CardStyled>
  );
}

export default Card;
