import { useState } from 'react';
import ButtonStyled from '../components/ButtonStyled';
import Card from '../components/Card/Card';
import ContainerStyled from '../components/ContainerStyled';
import HeaderStyled from '../components/HeaderStyled';
import InputStyled from '../components/InputStyled';
import TitleStyled from '../components/TitleStyled';

interface Presence {
	name: string;
	time: string;
}

const presencesMock: Presence[] = [
	{
		name: 'Leticia',
		time: new Date().toLocaleDateString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	},
	{
		name: 'João',
		time: new Date().toLocaleDateString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	},
	{
		name: 'Maria',
		time: new Date().toLocaleDateString('pt-BR', {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		}),
	},
];

function Home() {
	const [students, setStudents] = useState<Presence[]>(presencesMock);

	function addPresence() {
		alert('Adicionar!');
	}

	function updatePresence() {
		alert('Atualizar!');
	}

	function deletePresence() {
		alert('Deletar!');
	}

	function calculatePresence() {
		alert('Totalizar!');
	}

	return (
		<ContainerStyled>
			<HeaderStyled>
				<div>
					<strong>Leticia</strong>
					<img
						src='https://github.com/leticialealperez.png'
						alt='Foto de Perfil'
					/>
				</div>
				<TitleStyled>Lista de Presenças</TitleStyled>
			</HeaderStyled>

			<strong>Total Presentes com inicial A: 10</strong>
			<InputStyled
				type='text'
				placeholder='Digite um nome...'
			/>
			<ButtonStyled onClick={addPresence}>Adicionar</ButtonStyled>

			{/* CHAMADA PARA OS CARDS COM BASE NA LISTA DE DADOS */}
			{students.map((student) => (
				<Card
					name={student.name}
					time={student.time}
				/>
			))}
		</ContainerStyled>
	);
}

export default Home;
