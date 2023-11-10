import { FavoriteBorderRounded, FavoriteRounded, RemoveRedEyeRounded } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { dados } from '../data';
import { decrementar, incrementar, incrementarPorNumero } from '../store/modules/counter/counter.slice';

function Main() {
	// disparar ações de modificação da store
	const dispatch = useDispatch();

	return (
		<Box
			component='main'
			sx={{ pt: 10 }}
		>
			<Box
				component='section'
				sx={{ pt: 8, pb: 6 }}
			>
				<Container maxWidth='sm'>
					<Typography
						component='h1'
						variant='h2'
						textAlign='center'
						noWrap
						marginBottom={2}
					>
						Album layout
					</Typography>

					<Typography
						variant='h5'
						textAlign='center'
						color='GrayText'
						paragraph
						marginBottom={3}
					>
						Something short and leading about the collection below—its contents, the creator, etc. Make it
						short and sweet, but not too short so folks don't simply skip over it entirely.
					</Typography>

					<Stack
						spacing={2}
						direction='row'
						justifyContent='center'
						paddingTop={4}
					>
						<Button
							variant='contained'
							size='large'
							onClick={() => dispatch(incrementar())}
						>
							INCREMENTAR
						</Button>
						<Button
							variant='outlined'
							size='large'
							onClick={() => dispatch(decrementar())}
						>
							DECREMENTAR
						</Button>
						<Button
							color='secondary'
							variant='outlined'
							size='large'
							onClick={() => dispatch(incrementarPorNumero(10))}
						>
							INCREMENTAR + 10
						</Button>
					</Stack>
				</Container>
			</Box>

			<Container
				maxWidth='md'
				sx={{ paddingY: 8 }}
			>
				<Grid
					container
					spacing={4}
				>
					{dados.map((item) => {
						return (
							<Grid
								key={item.id}
								item
								xs={12}
								sm={6}
								md={4}
							>
								<Card
									sx={{ width: '100%' }}
									elevation={10}
								>
									<CardMedia
										sx={{ pt: '56.25%' }}
										image={item.image}
										title='Imagem Wallpaper Card'
									/>

									<CardContent>
										<Typography
											gutterBottom
											variant='h5'
											component='h6'
										>
											{item.title}
										</Typography>
										<Typography
											variant='body2'
											color='GrayText'
										>
											{item.content}
										</Typography>
									</CardContent>

									<CardActions>
										<IconButton aria-label='Learn More'>
											<RemoveRedEyeRounded color='primary' />
										</IconButton>
										<IconButton aria-label='Favorite'>
											{item.favorite ? (
												<FavoriteRounded color='error' />
											) : (
												<FavoriteBorderRounded color='error' />
											)}
										</IconButton>
									</CardActions>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
}

export default Main;
