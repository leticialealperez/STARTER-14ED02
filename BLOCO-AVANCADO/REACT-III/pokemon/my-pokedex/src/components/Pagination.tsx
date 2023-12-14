import { Pagination as PaginationMUI } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPokemons } from '../store/modules/pokemons/actions';
import { selectPokemons } from '../store/modules/pokemons/pokemons.slice';

export default function Pagination() {
	const { count } = useAppSelector(selectPokemons);
	const dispatch = useAppDispatch();

	if (!count) return;

	function handleChangePage(page: number) {
		const offset = (page - 1) * 20;
		dispatch(fetchPokemons(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`));
	}

	return (
		<PaginationMUI
			count={Math.round(count / 20)}
			showFirstButton
			showLastButton
			sx={{ display: 'flex', justifyContent: 'center' }}
			onChange={(_, page) => handleChangePage(page)}
		/>
	);
}
