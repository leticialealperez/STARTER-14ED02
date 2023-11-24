import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar';
import FloatButton from '../components/FloatButton';
import ListTransactions from '../components/ListTransactions';
import Modal from '../components/Modal';
import { useAppDispatch } from '../store/hooks';
import { listarTransacoes } from '../store/modules/carteira/actions';

function Home() {
	const [open, setOpen] = useState(false);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(listarTransacoes());
	}, [dispatch]);

	function handleModal() {
		setOpen(!open);
	}

	return (
		<>
			<AppBar />
			<ListTransactions />
			<FloatButton handleClick={handleModal} />
			<Modal
				open={open}
				handleClose={handleModal}
			/>
		</>
	);
}

export default Home;
