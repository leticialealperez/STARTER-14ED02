import Card from '../components/shared/Card';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import imgHospedagem from '/assets/hotel.svg';
import imgRoteiro from '/assets/roteiro.svg';
import imgPacotes from '/assets/viagens.svg';

interface ServicosType {
  imgUrl: string;
  imgAlt: string;
  label: string;
}

const servicos: ServicosType[] = [
  {
    imgUrl: imgHospedagem,
    imgAlt: 'Serviços de hospedagens',
    label: 'Hospedagem'
  },
  {
    imgUrl: imgRoteiro,
    imgAlt: 'Roteiros personalizados',
    label: 'Roteiros'
  },
  {
    imgUrl: imgPacotes,
    imgAlt: 'Pacotes de viagens',
    label: 'Pacotes'
  },
];

function Servicos() {
  return (
    <FlexContainerStyled modo="content">
      {servicos.map((item) => (
        <Card img={item.imgUrl} imgAlt={item.imgAlt} text={item.label} />
      ))}
    </FlexContainerStyled>
  );
}

export default Servicos;
