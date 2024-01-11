declare namespace Express {
    interface Request {
        usuario: {
            id: string;
            nomeCompleto: string;
            email: string;
            tipo: 'M' | 'T' | 'F';
        }
    }
}