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
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectPokemons } from '../store/modules/pokemons/pokemons.slice';
import Pagination from './Pagination';

export function Main() {
	// const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { pokemons, count } = useAppSelector(selectPokemons);

	function toggleFavorite(id: number) {
		console.log(id);
	}

	function goToDetail(id: number) {
		navigate(`/detalhe/${id}`);
	}

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
						Pokemon API
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

					<Typography
						variant='h5'
						textAlign='center'
						color='GrayText'
						paragraph
						marginBottom={3}
					>
						Atualmente existem {count} pokemons disponíveis.
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
							onClick={() => navigate('/pokedex')}
						>
							Acessar Pokedéx
						</Button>
					</Stack>
				</Container>
			</Box>

			<Container
				maxWidth='xl'
				sx={{ paddingY: 8, display: 'flex', justifyContent: 'center' }}
			>
				<Grid
					container
					spacing={6}
				>
					{pokemons.map((item) => {
						return (
							<Grid
								key={item.id}
								item
								xs={12}
								md={6}
								lg={4}
								xl={3}
							>
								<Card
									sx={{ paddingX: 2 }}
									elevation={10}
								>
									<CardMedia
										title='Imagem Wallpaper Card'
										sx={{ display: 'flex', justifyContent: 'center' }}
									>
										<Box
											component='figure'
											sx={{
												textAlign: 'center',
												borderRadius: '100%',
												backgroundColor: '#f3b50929',
												marginTop: {
													xs: '20px',
													lg: '40px',
												},
												marginBottom: {
													xs: '20px',
													lg: '30px',
												},
												width: {
													xs: '190px',
													lg: '190px',
												},
												height: {
													xs: '190px',
													lg: '190px',
												},
											}}
										>
											<Box
												component='img'
												src={item.imageURL}
												alt={item.name}
												sx={{
													width: {
														xs: '190px',
													},
												}}
											/>
										</Box>
									</CardMedia>

									<CardContent sx={{ textAlign: 'center' }}>
										<Typography
											gutterBottom
											variant='h5'
											component='h6'
										>
											#{item.id} - {item.name.toLocaleUpperCase()}
										</Typography>
										<Typography
											variant='body2'
											color='GrayText'
										>
											Size: {item.size}
										</Typography>
									</CardContent>

									<CardActions sx={{ justifyContent: 'center' }}>
										<IconButton aria-label='Learn More'>
											<RemoveRedEyeRounded
												color='primary'
												onClick={() => goToDetail(item.id)}
											/>
										</IconButton>
										<IconButton
											aria-label='Favorite'
											onClick={() => toggleFavorite(item.id)}
										>
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

			<Pagination />
		</Box>
	);
}
