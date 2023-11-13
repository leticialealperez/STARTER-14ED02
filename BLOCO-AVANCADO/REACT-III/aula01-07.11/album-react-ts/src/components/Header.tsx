import { CameraAltRounded } from '@mui/icons-material';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { EstadoGlobal } from '../store';
import { useAppSelector } from '../store/hooks';

function Header() {
	const contador = useAppSelector((estado: EstadoGlobal) => estado.counter).value;

	return (
		<AppBar position='fixed'>
			<Toolbar>
				<CameraAltRounded sx={{ mr: 2 }} />

				<Typography
					variant='h6'
					component='div'
					sx={{ flexGrow: 1 }}
				>
					Album Layout - {contador}
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
