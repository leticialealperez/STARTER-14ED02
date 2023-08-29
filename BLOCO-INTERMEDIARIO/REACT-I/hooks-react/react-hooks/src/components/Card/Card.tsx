import ContainerButtonsStyled from '../ContainerButtonsStyled';
import CardStyled from './CardStyled';

interface CardProps {
	name: string;
	time: string;
}

function Card(props: CardProps) {
	return (
		<CardStyled>
			<div>
				<strong>{props.name}</strong>
				<small>{props.time}</small>
			</div>
			<ContainerButtonsStyled>
				<button>Editar</button>
				<button>Apagar</button>
			</ContainerButtonsStyled>
		</CardStyled>
	);
}

export default Card;
