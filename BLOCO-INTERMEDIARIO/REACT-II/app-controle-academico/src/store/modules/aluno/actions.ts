/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import apiService, { ResponseAPI } from '../../../services/api.service';
import { Aluno } from './types';

interface Login {
    email: string;
    senha: string;
}


export const logar = createAsyncThunk('aluno/logar', async(dados: Login) => {
    try {
        const response = await apiService.post('/auth/login', dados);
        const body = response.data as ResponseAPI<Aluno>;

        return body;
    } catch (error: any) {
        // a requisição foi de status != 200 ...
        if(isAxiosError(error)) {
            return error.response?.data as ResponseAPI<undefined>;
        }

        console.log(error)
    }
})


// cadastrar
