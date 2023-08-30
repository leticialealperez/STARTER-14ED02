import axios from 'axios';
import { useEffect, useMemo, useRef, useState } from 'react';
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

interface UserGithub {
	name: string;
	avatarUrl: string;
}

function Home() {
	const [students, setStudents] = useState<Presence[]>([]);
	const [user, setUser] = useState<UserGithub>({
		name: 'Leticia',
		avatarUrl: 'https://github.com/leticialealperez.png',
	});
	// const [count, setCount] = useState(0);
	const [listaFiltrada, setListaFiltrada] = useState<Presence[]>([]);
	// const input = document.querySelector('.input');
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		// sempre vai executar um efeito colateral
		// 1 - Callback no useEffect sem dependencias quer dizer que vai executar sempre que home for RENDERIZADA OU RE-RENDERIZADA - didMount ou didUnmount ou didUpdate

		console.log('Componente ou RENDERIZOU OU RE-RENDERIZOU');
	});

	useEffect(() => {
		// sempre vai executar um efeito colateral
		// 2 - Callback no useEffect com dependencias array vazio quer dizer que vai executar somente quando home for RENDERIZADA (uma única vez) - didMount
		// 3 - Callback no useEffect com dependencia preenchida quer dizer que vai executar ao render e na atualização da variavel que esta na dependencia - didUpdate
		// 4 - CLEAR, a ultima coisa que vai executar dentro do useEffect - didUnmount

		async function buscaUsuario() {
			const respostaAPI = await axios.get('https://api.github.com/users/wallacefcosta');
			setUser({
				name: respostaAPI.data.name,
				avatarUrl: respostaAPI.data.avatar_url,
			});
		}

		buscaUsuario();

		return () => {
			document.title = 'Limpou!';

			setTimeout(() => {
				document.title = 'Lista de Presenças';
			}, 3000);
		};
	}, []);

	useEffect(() => {
		console.log('RODOU AQUI');
	}, [students]);

	const count = useMemo(() => {
		console.log('Executou o MEMO');
		const total = listaFiltrada.reduce((result, aluno) => result + aluno.name.length, 0);

		return total;
	}, [listaFiltrada]);

	function addPresence() {
		// ❌ não vai rolar
		// const aux = students; // equivalente referencia e valor => 0x123 [...]
		// aux.push({});
		// students.push({ name: 'Leticia', time: '29/08/2023' });

		// ✅ vai rolar
		// adiciona um novo item no estado students
		// const aux2 = [...students]; // copia só os DADOS
		// aux2.push({ name: 'Leticia', time: '29/08/2023' });

		setStudents([
			...students,
			{
				name: inputRef.current?.value ?? '',
				time: new Date().toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
			},
		]);

		if (inputRef.current?.value.startsWith('A')) {
			setListaFiltrada([
				...listaFiltrada,
				{
					name: inputRef.current?.value ?? '',
					time: new Date().toLocaleDateString('pt-BR', {
						hour: '2-digit',
						minute: '2-digit',
						second: '2-digit',
					}),
				},
			]);
		}

		inputRef.current!.value = '';
	}

	// function updatePresence() {
	// 	alert('Atualizar!');
	// }

	// function deletePresence() {
	// 	alert('Deletar!');
	// }

	return (
		<ContainerStyled>
			<HeaderStyled>
				<div>
					<strong>{user.name}</strong>
					<img
						src={user.avatarUrl}
						alt='Foto de Perfil'
					/>
				</div>
				<TitleStyled>Lista de Presenças</TitleStyled>
			</HeaderStyled>

			<strong>Total Caracteres de alunos com A: {count}</strong>

			<InputStyled
				ref={inputRef}
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
