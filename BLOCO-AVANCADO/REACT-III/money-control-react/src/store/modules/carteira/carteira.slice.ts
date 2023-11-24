import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { atualizarTransacao, cadastrarTransacao, deletarTransacao, listarTransacoes } from './actions';

interface Transacao {
	id: number;
	value: number;
	type: 'INCOME' | 'OUTCOME';
	description: string;
	createdAt: Date;
}

export interface Carteira {
	balance: number;
	transactions: Transacao[];
}

const initialState: Carteira = {
	balance: 0,
	transactions: [],
};

const carteiraSlice = createSlice({
	name: 'carteira',
	initialState,
	// ações sincronas
	reducers: {
		cadastrar: (state, action: PayloadAction<Transacao>) => {
			action.payload.type == 'OUTCOME'
				? (state.balance -= action.payload.value)
				: (state.balance += action.payload.value);

			state.transactions.push(action.payload);
		},
	},

	// integrações - ações assincronas
	extraReducers: (builder) => {
		builder
			// LISTAR
			.addCase(listarTransacoes.pending, () => {
				console.log('BUSCANDO AS TRANSACTIONS...');
			})
			.addCase(listarTransacoes.fulfilled, (state, action) => {
				if (!action.payload) {
					return;
				}

				state.balance = action.payload.balance;
				state.transactions = action.payload.transactions;
			})

			// CADASTRAR
			.addCase(cadastrarTransacao.pending, () => {
				console.log('CADASTRANDO A TRANSAÇÃO');
			})
			.addCase(cadastrarTransacao.fulfilled, (state, action) => {
				if (!action.payload) {
					alert('Não deu bom o cadastro!');
					return;
				}

				state.balance = action.payload.data.balance;
				state.transactions = action.payload.data.transactions;

				alert(action.payload.message);
			})

			// DELETAR
			.addCase(deletarTransacao.pending, () => {
				console.log('deletando transação...');
			})
			.addCase(deletarTransacao.fulfilled, (state, action) => {
				if (!action.payload) {
					return;
				}

				state.balance = action.payload.data.balance;
				state.transactions = action.payload.data.transactions;

				alert(action.payload.message);
			})

			// ATUALIZAR
			.addCase(atualizarTransacao.pending, () => {
				console.log('atualizando transação...');
			})
			.addCase(atualizarTransacao.fulfilled, (state, action) => {
				if (!action.payload) {
					return;
				}

				state.balance = action.payload.data.balance;
				state.transactions = action.payload.data.transactions;

				alert(action.payload.message);
			});
	},
});

export const { cadastrar } = carteiraSlice.actions;
export default carteiraSlice.reducer;
