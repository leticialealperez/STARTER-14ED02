import { NextFunction, Request, Response } from 'express';


class Autorizacao {
    private dado = '11'

    public cadastrar(req: Request, res: Response, next: NextFunction) {
        const { tipo } = req.usuario;

        if(tipo == 'F') {
            return res.status(401).json({
                code: 401,
                ok: false,
                mensagem: 'Você não possui autorização para cadastrar uma avaliação.'
            })
        }

        return next();

    }

    public atualizarOuDeletar(req: Request, res: Response, next: NextFunction) {
        const { tipo } = req.usuario;

        if(tipo !== 'T') {
            return res.status(401).json({
                code: 401,
                ok: false,
                mensagem: 'Você não possui autorização para cadastrar uma avaliação.'
            })
        }

        return next();
    }

    public verificarPermissaoCadastrar(req: Request, res: Response, next: NextFunction) {
        const { idAluno } = req.body;
        const { tipo, id } = req.usuario;

        if(tipo == 'M' && idAluno !== id) {
            return res.status(403).json({
                code: 403,
                ok: false,
                mensagem: 'Você não está autorizado a cadastrar uma avaliação para outro aluno'
            })
        }

        next();
    }

    public verificarPermissaoListar(req: Request, res: Response, next: NextFunction) {
        const { tipo, id } = req.usuario;

        if(['M', 'F'].includes(tipo) ) {
            req.query = {
                aluno: id
            }
        }

        next();
    }

}

export default new Autorizacao();

