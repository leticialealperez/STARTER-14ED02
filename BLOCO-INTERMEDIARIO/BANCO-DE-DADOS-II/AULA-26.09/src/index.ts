import cors from 'cors';
import 'dotenv/config';
import express from 'express';

// CRIAR O SERVIDOR/APP COM EXPRESS
const app = express();

// CONFIGURAÇÕES DO SERVIDOR - middlewares
app.use(express.json()); // converte o JSON de entrada em um objeto JS e o objeto JS de saída em um JSON
app.use(express.urlencoded({ extended: false })); // converte os query params Unicode para os caracteres correspondentes
app.use(cors()); // configuração da politica de CORS - abrir ou fechar as requisições de uma ou mais origens

// DAR O START NO SERVIDOR
app.listen(process.env.PORTA, () => console.log(`Servidor rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ message: 'API 14ED T02' }));
