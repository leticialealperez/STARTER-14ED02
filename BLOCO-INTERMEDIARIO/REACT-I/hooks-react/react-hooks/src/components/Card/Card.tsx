import ContainerButtonsStyled from '../ContainerButtonsStyled';
import CardStyled from './CardStyled';

interface CardProps {
	name: string;
	time: string;
	funcaoAtualizar: (indice: number) => void;
	funcaoDeletar: (indice: number) => void;
	indice: number;
}

function Card(props: CardProps) {
	function editar() {
		props.funcaoAtualizar(props.indice);
	}

	function deletar() {
		props.funcaoDeletar(props.indice);
	}

	return (
		<CardStyled>
			<div>
				<strong>{props.name}</strong>
				<small>{props.time}</small>
			</div>
			<ContainerButtonsStyled>
				<button onClick={editar}>Editar</button>
				<button onClick={deletar}>Apagar</button>
			</ContainerButtonsStyled>
		</CardStyled>
	);
}

export default Card;
