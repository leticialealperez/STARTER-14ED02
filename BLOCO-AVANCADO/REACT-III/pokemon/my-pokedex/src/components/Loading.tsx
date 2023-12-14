import { Backdrop, CircularProgress } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectPokemons } from '../store/modules/pokemons/pokemons.slice';

export function Loading() {
	const { isLoading } = useAppSelector(selectPokemons);
	return (
		<Backdrop
			sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
			open={isLoading}
		>
			<CircularProgress color='inherit' />
		</Backdrop>
	);
}
