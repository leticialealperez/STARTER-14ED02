import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { logar } from './actions';
import { Aluno } from './types';


// nome
// estado inicial
// reducers ou extraReducers - ações de gerenciamento
const alunoInicial: Aluno = {
    token: '',
    dadosAluno: {
        id: '',
        email: '',
        nomeCompleto: '',
        tipo: 'M'
    }
}

const alunoSlice = createSlice({
    name: 'aluno',
    initialState: {...alunoInicial, loading: false, mensagem: '' } ,
    reducers: {
        logout: () => {
            localStorage.removeItem('token')
            return {...alunoInicial, loading: false, mensagem: ''}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logar.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(logar.fulfilled, (state, action) => {
            state.loading = false;
            

            if(!action.payload) {
                return
            }

            state.mensagem = action.payload.mensagem;
            if(action.payload.dados) {
                state.token = action.payload.dados.token;
                localStorage.setItem("token", JSON.stringify(action.payload.dados.token));
                state.dadosAluno.id = action.payload.dados.dadosAluno.id;
                state.dadosAluno.nomeCompleto = action.payload.dados.dadosAluno.nomeCompleto;
                state.dadosAluno.email = action.payload.dados.dadosAluno.email;
                state.dadosAluno.tipo = action.payload.dados.dadosAluno.tipo;
            }

            alert(action.payload.mensagem);
        })
    }
})

export const { logout } = alunoSlice.actions;
export const alunoReducer = alunoSlice.reducer;
export const selectorAluno = (state: RootState) => state.aluno;

