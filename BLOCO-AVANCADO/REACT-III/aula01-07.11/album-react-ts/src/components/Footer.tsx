import { Box, Link, Typography } from '@mui/material';

function Footer() {
	return (
		<Box
			sx={{ p: 6 }}
			component='footer'
		>
			<Typography
				variant='h6'
				align='center'
				gutterBottom
			>
				Footer
			</Typography>
			<Typography
				variant='subtitle1'
				align='center'
				color='text.secondary'
				component='p'
			>
				Something here to give the footer a purpose!
			</Typography>
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
			>
				{'Copyright © '}
				<Link
					color='inherit'
					href='https://mui.com/'
					component='a'
					target='_blank'
				>
					Your Website
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Box>
	);
}

export default Footer;
