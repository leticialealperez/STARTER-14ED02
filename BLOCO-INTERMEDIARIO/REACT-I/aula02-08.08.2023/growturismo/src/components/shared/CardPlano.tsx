import ButtonStyled from '../Content/ButtonStyled';
import CardStyled from './CardStyled';
import TittleStyled from './TittleStyled';

export interface CardPlanoProps {
  nomePlano: string;
  servicosInclusos: Array<string>;
}

function CardPlano(props: CardPlanoProps) {
  return (
    <CardStyled border>
      <div>
        <TittleStyled tamanho="sm" primario>
          {props.nomePlano}
        </TittleStyled>
        <hr />
        <ul>
          {props.servicosInclusos.map((servico) => (
            <li>{servico}</li>
          ))}
        </ul>

        <ButtonStyled primario tamanho="md">
          Saiba Mais!
        </ButtonStyled>
      </div>
    </CardStyled>
  );
}

export default CardPlano;
