export interface Aluno {
    token: string;
    dadosAluno: {
        id: string;
        nomeCompleto: string;
        email: string;
        tipo: 'M' | 'T' | 'F';
    }
}