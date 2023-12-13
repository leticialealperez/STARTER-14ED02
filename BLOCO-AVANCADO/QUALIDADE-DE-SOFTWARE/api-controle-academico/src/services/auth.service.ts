import { BcryptAdapter, JWTAdapter } from '../adapters';
import repository from '../database/prisma.connection';
import { LoginDTO, ResponseDTO } from '../dtos';
import { envs } from '../envs';

interface LoginResponse { 
	token: string; 
	dadosAluno: { 
		id: string; 
		email: string; 
	}
}

export class AuthService {
	/**
	 * Método que conecta a base de dados e verifica se as credenciais informadas equivalem a algum usuário cadastrado. Caso o usuário exista na base, retorna o token de autorização junto do ID e email do usuário encontrado.
	 *
	 * @param dados - E-mail e senha informados na requisição
	 * @returns ResponseDTO que contém a estrutura padrão de resposta da requisição conforme o padrão REST
	 *
	 * @author Leticia Leal <mentor13@growdev.academy>
	 */
	public async login(dados: LoginDTO): Promise<ResponseDTO<LoginResponse | undefined>> {

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
				dados: undefined
			};
		}

		const bcrypt = new BcryptAdapter(Number(envs.BCRYPT_SALT));
		const corresponde = await bcrypt.compararHash(dados.senha, alunoEncontrado.password);

		if (!corresponde) {
			return {
				code: 401,
				ok: false,
				mensagem: 'Credenciais inválidas.',
				dados: undefined
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
