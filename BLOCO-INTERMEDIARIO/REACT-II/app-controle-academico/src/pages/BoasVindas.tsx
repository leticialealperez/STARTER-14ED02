import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logout, selectorAluno } from '../store/modules/aluno/aluno.slice';

export function BoasVindas() {
    const { dadosAluno } = useAppSelector(selectorAluno);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const perfil = useMemo(() => {
        switch(dadosAluno.tipo) {
        case 'F':
            return 'FORMADO';
        case 'M':
            return 'MATRICULADO';
        case 'T':
            return 'TECH HELPER';
    }
    }, [dadosAluno.tipo]);

    useEffect(() => {
        if(!dadosAluno.id) {
            navigate('/');
        }
    }, [dadosAluno.id, navigate])

    if(!dadosAluno.nomeCompleto) return null;
    
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {perfil}
                    </Typography>
                    <Button color="inherit" onClick={() => {
                        dispatch(logout())
                    }}>Sair</Button>
                </Toolbar>
            </AppBar>


            <Container sx={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 2}}>
                <Typography variant='h2' component='h1'>
                    Bem-vindo, {dadosAluno.nomeCompleto}!
                </Typography>

                <Typography variant='body2'>
                    Acesse as avaliações cadastradas agora clicando no botão abaixo
                </Typography>


                <Button variant='contained' onClick={() => console.log('ir para home')} sx={{ marginTop: 4}}>
                    Acessar avaliações
                </Button>
            </Container>
        </>
    )
}