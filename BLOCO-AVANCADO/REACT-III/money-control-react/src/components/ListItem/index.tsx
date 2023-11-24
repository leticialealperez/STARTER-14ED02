import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { Avatar, Divider, ListItemAvatar, ListItem as ListItemMUI, ListItemText, Typography } from '@mui/material';

interface ListItemProps {
	value: number;
	type: string;
	description: string;
	createdAt: string;
}

function ListItem(props: ListItemProps) {
	return (
		<>
			<ListItemMUI alignItems='flex-start'>
				<ListItemAvatar>
					<Avatar>
						{props.type === 'INCOME' ? <ArrowUpward color='success' /> : <ArrowDownward color='error' />}
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={props.value}
					secondary={
						<>
							<Typography
								marginTop={2}
								variant='body2'
							>
								{props.description}
							</Typography>
							<Typography
								textAlign='end'
								marginTop={2}
								variant='body2'
							>
								{props.createdAt}
							</Typography>
						</>
					}
				/>
			</ListItemMUI>
			<Divider
				variant='inset'
				component='li'
			/>
		</>
	);
}

export default ListItem;
