import { BcryptAdapter, JWTAdapter } from '../adapters';
import repository from '../database/prisma.connection';
import { LoginDTO, ResponseDTO } from '../dtos';
import { envs } from '../envs';

export class AuthService {
	public async login(dados: LoginDTO): Promise<ResponseDTO> {

		const alunoEncontrado = await repository.aluno.findUnique({
			where: {
				email: dados.email,
			},
		});

		if (!alunoEncontrado) {
			return {
				code: 401,
				ok: false,
				mensagem: 'Credenciais inválidas. E-mail não cadastrado.',
			};
		}

		const bcrypt = new BcryptAdapter(Number(envs.BCRYPT_SALT));
		const corresponde = await bcrypt.compararHash(dados.senha, alunoEncontrado.password);

		if (!corresponde) {
			return {
				code: 401,
				ok: false,
				mensagem: 'Credenciais inválidas.',
			};
		}

        const dadosAluno = {
            id: alunoEncontrado.id,
            nomeCompleto: alunoEncontrado.nomeCompleto,
            email: alunoEncontrado.email,
            tipo: alunoEncontrado.tipo
        }
		const jwt = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);
		const token = jwt.gerarToken(dadosAluno);

		return {
			code: 200,
			ok: true,
			mensagem: 'Login efetuado',
			dados: { token, dadosAluno },
		};
	}
}
