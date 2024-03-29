import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { alunoRoutes } from './routes';
import { avaliacaoRoutes } from './routes/avaliacao.routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/alunos', alunoRoutes());
app.use('/avaliacoes', avaliacaoRoutes());

app.listen(process.env.PORTA, () => console.log(`Servidor ta rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ ok: true }));
