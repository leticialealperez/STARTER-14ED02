import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { alunosRoutes } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/alunos', alunosRoutes());

app.listen(process.env.PORTA, () => console.log(`Servidor ta rodando na porta ${process.env.PORTA}`));
app.get('/', (_, res) => res.status(200).json({ ok: true }));
