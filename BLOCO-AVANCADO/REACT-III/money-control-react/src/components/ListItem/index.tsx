import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
	Avatar,
	Divider,
	IconButton,
	ListItemAvatar,
	ListItem as ListItemMUI,
	ListItemText,
	Stack,
	Typography,
} from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { ParametroAtualizar, atualizarTransacao, deletarTransacao } from '../../store/modules/carteira/actions';

interface ListItemProps {
	id: number;
	value: number;
	type: string;
	description: string;
	createdAt: string;
}

function ListItem(props: ListItemProps) {
	const dispatch = useAppDispatch();

	// função de excluir uma transação
	function handleDelete() {
		// alert(`Clicou no deletar do registro ID ${props.id}`);
		dispatch(deletarTransacao(props.id));
	}

	// função de atualizar uma transação
	function handleUpdate() {
		// alert(`Clicou no atualizar do registro ID ${props.id}`);
		const value = prompt('Informe o novo valor: ');
		const type = prompt('Informe 1 - INCOME ou 2 - OUTCOME');
		const description = prompt('Informe a nova descrição');

		const transacaoAtualizada: ParametroAtualizar = {
			id: props.id,
			type: undefined,
			description: undefined,
			value: undefined,
		};

		if (value && !isNaN(Number(value))) {
			transacaoAtualizada.value = Number(value);
		}

		if ([1, 2].includes(Number(type))) {
			transacaoAtualizada.type = Number(type) == 1 ? 'INCOME' : 'OUTCOME';
		}

		if (description) {
			transacaoAtualizada.description = description;
		}

		// console.log(transacaoAtualizada);
		dispatch(atualizarTransacao(transacaoAtualizada));
	}

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

			<Stack
				direction='row'
				spacing={2}
				justifyContent='end'
			>
				<IconButton
					size='small'
					aria-label='delete'
					color='error'
					onClick={handleDelete}
				>
					<DeleteIcon />
				</IconButton>
				<IconButton
					size='small'
					aria-label='update'
					color='success'
					onClick={handleUpdate}
				>
					<EditIcon />
				</IconButton>
			</Stack>
			<Divider
				variant='inset'
				component='li'
			/>

			{/* CRIAR UM MODAL IGUAL AO DO CADASTRAR PARA ATUALIZAR */}
		</>
	);
}

export default ListItem;
