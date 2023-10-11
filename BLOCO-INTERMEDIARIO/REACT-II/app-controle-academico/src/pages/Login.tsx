import { Box, Button, TextField, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

function Login() {
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
					Login
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
						Entrar
					</Button>
				</form>

				<Typography align='center'>
					Não possui conta? <Link to='/cadastro'>Cadastre-se</Link>
				</Typography>
			</Box>
		</Box>
	);
}

export default Login;
