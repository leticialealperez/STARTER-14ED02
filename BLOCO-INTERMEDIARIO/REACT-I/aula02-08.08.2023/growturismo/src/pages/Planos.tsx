import CardPlano, { CardPlanoProps } from '../components/shared/CardPlano';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';

const planos: CardPlanoProps[] = [
  {
    nomePlano: 'Plano 1',
    servicosInclusos: ['Suporte 24h', 'Serviços de quarto', 'Guia turístico']
  },
  {
    nomePlano: 'Plano 2',
    servicosInclusos: [
      'Suporte 24h',
      'Serviços de quarto',
      'Guia turístico',
      'Roteiro de trilhas',
      'Serviço personalizado'
    ]
  },
  {
    nomePlano: 'Plano 3',
    servicosInclusos: [
      'Suporte 24h',
      'Serviços de quarto',
      'Guia turístico',
      'Roteiros de trilhas',
      'Serviço personalizado',
      'Área Vip'
    ]
  }
];

function Planos() {
  return (
    <FlexContainerStyled modo="content">
      {planos.map((plano) => (
        <CardPlano nomePlano={plano.nomePlano} servicosInclusos={plano.servicosInclusos} />
      ))}
    </FlexContainerStyled>
  );
}

export default Planos;
