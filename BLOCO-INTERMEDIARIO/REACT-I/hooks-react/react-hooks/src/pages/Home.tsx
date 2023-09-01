import axios from 'axios';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
	// [0] => estado => 'Teste'
	// [1] => função que altera o valor do estado => setState('Nova string')

	// ?? => só valida null ou undefined
	// || => valida null, undefined, "", 0, false
	// [] => true
	// {} => true
	const dados = localStorage.getItem('students');
	const [students, setStudents] = useState<Presence[]>(JSON.parse(dados ?? '[]'));

	const [user, setUser] = useState<UserGithub>({
		name: '',
		avatarUrl: '',
	});

	const [listaFiltrada, setListaFiltrada] = useState<Presence[]>([]);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		// sempre vai executar um efeito colateral
		// 1 - Callback no useEffect sem dependencias quer dizer que vai executar sempre que home for RENDERIZADA OU RE-RENDERIZADA - didMount ou didUnmount ou didUpdate

		console.log('Componente ou RENDERIZOU OU RE-RENDERIZOU');
	});

	useEffect(() => {
		// sempre vai executar um efeito colateral
		// 2 - Callback no useEffect com dependencias array vazio quer dizer que vai executar somente quando home for RENDERIZADA (uma única vez) - didMount => quando monta
		// 4 - CLEAR, a ultima coisa que vai executar dentro do useEffect - didUnmount - quando desmonta ou termina o effect

		async function buscaUsuario() {
			const respostaAPI = await axios.get('https://api.github.com/users/leticialealperez');
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
		// 3 - Callback no useEffect com dependencia preenchida quer dizer que vai executar ao render e na atualização da variavel que esta na dependencia - didUpdate

		console.log('RODOU AQUI');
		localStorage.setItem('students', JSON.stringify(students));

		let nome = '';
		if (students.length) {
			nome = students[0].name;
		}

		async function buscaUsuario() {
			const respostaAPI = await axios.get(`https://api.github.com/users/${nome}`);

			if (respostaAPI.data.id) {
				setUser({
					name: respostaAPI.data.name,
					avatarUrl: respostaAPI.data.avatar_url,
				});
			}
		}

		buscaUsuario();
	}, [students]);

	const count = useMemo(() => {
		console.log('Executou o MEMO');
		const total = listaFiltrada.reduce((result, aluno) => result + aluno.name.length, 0);

		return total;
	}, [listaFiltrada]);

	const addPresence = useCallback(() => {
		if (!inputRef.current?.value) {
			inputRef.current?.focus();
			return;
		}

		setStudents([
			{
				name: inputRef.current?.value ?? '',
				time: new Date().toLocaleDateString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
			},
			...students, // []
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
	}, [listaFiltrada, students]);

	const updatePresence = useCallback(
		(indice: number) => {
			const nome = prompt('Nome: ');
			if (!nome) return;

			// COMO ATUALIZAR O NOME DO REGISTRO QUE POSSUI ESSE INDICE?
			const aux = [...students]; // []
			aux[indice].name = nome;
			setStudents(aux);
		},
		[students]
	);

	const deletePresence = useCallback(
		(indice: number) => {
			if (confirm('Tem certeza que quer excluir?')) {
				const aux = [...students];
				aux.splice(indice, 1);

				setStudents(aux);
			}
		},
		[students]
	);

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
			{students.map((student, index) => (
				<Card
					key={index}
					indice={index}
					name={student.name}
					time={student.time}
					funcaoAtualizar={updatePresence}
					funcaoDeletar={deletePresence}
				/>
			))}
		</ContainerStyled>
	);
}

export default Home;
