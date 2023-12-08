import { combineReducers } from '@reduxjs/toolkit';
import { alunoReducer } from './aluno/aluno.slice';

export const rootReducer = combineReducers({
    aluno: alunoReducer,
    // avaliacoes
    // alunos
})