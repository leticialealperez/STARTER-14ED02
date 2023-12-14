import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export function Pokemon() {
	const { id } = useParams();

	useEffect(() => {
		console.log(id);
	}, [id]);
	return (
		<>
			<h1>Detalhamento do Pokemon {id}</h1>
		</>
	);
}
