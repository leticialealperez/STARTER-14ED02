import { JWTAdapter } from '../../../src/adapters';
import { envs } from '../../../src/envs';

export function tokenGenerator() {
    const adapter = new JWTAdapter(envs.JWT_SECRET_KEY, envs.JWT_EXPIRE_IN);

    const token = adapter.gerarToken({
        id: 'any_id',
        nomeCompleto: 'any_nome',
        email: 'any_email',
        tipo: 'any_tipo'
    });

    return token
}