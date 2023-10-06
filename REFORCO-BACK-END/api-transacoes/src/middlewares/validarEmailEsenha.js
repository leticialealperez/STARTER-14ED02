export function validarEmailESenha(req, res, next) {
    const { email, senha } = req.body

    if (!email) {
        return res.status(400).json('E-mail é obrigatório!')
    }

    if (!senha) {
        return res.status(400).json('Senha é obrigatória!')
    }

    if (!email.includes('@') || !email.includes('.com')) {
        return res.status(400).json('E-mail inválido!')
    }

    if (senha.length < 6) {
        return res.status(400).json('A senha deve conter no mínimo 6 caracteres!')
    }

    next();

}