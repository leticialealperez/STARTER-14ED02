import { useEffect } from 'react';
import { Footer, Header, Main } from '../components';
import { Loading } from '../components/Loading';
import { useAppDispatch } from '../store/hooks';
import { fetchPokemons } from '../store/modules/pokemons/actions';

export function Home() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchPokemons('https://pokeapi.co/api/v2/pokemon'));
	}, [dispatch]);

	return (
		<>
			<Header />
			<Main />
			<Footer />
			<Loading />
		</>
	);
}
