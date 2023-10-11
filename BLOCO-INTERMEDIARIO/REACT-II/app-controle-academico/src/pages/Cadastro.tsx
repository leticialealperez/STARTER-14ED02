import { Box, Button, TextField, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

function Cadastro() {
	return (
		<Box
			component='main'
			height='100vh'
			display='flex'
			alignItems='center'
			justifyContent='center'
		>
			<Box component='section'>
				<Typography
					component='h1'
					variant='h3'
					align='center'
				>
					Cadastre-se
				</Typography>

				<form>
					<TextField
						id='email'
						type='email'
						label='E-mail'
						variant='outlined'
						fullWidth
						margin='dense'
					/>

					<TextField
						id='password'
						type='password'
						label='Password'
						variant='outlined'
						fullWidth
						margin='dense'
					/>

					<Button
						type='submit'
						variant='contained'
						color='primary'
						fullWidth
						sx={{ marginY: '6px' }}
						size='large'
					>
						Criar Conta
					</Button>
				</form>

				<Typography align='center'>
					Já possui conta? <Link to='/'>Acesse</Link>
				</Typography>
			</Box>
		</Box>
	);
}

export default Cadastro;
