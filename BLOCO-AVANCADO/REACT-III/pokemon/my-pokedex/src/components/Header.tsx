import { CameraAltRounded } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { selectPokemons } from '../store/modules/pokemons/pokemons.slice';

export function Header() {
	const contador = useAppSelector(selectPokemons).count;

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<CameraAltRounded sx={{ mr: 2 }} />

				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1 }}
				>
					Total Pokemons - {contador}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
