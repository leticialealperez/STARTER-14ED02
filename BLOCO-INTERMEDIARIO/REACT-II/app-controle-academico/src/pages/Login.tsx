import { Box, Button, Paper, TextField, Typography } from "@mui/material";

import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logar } from '../store/modules/aluno/actions';
import { selectorAluno } from '../store/modules/aluno/aluno.slice';

function Login() {
  const { loading, dadosAluno } = useAppSelector(selectorAluno);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if(dadosAluno.id) {
      (document.getElementById('email') as HTMLInputElement).value = "";
      (document.getElementById('password') as HTMLInputElement).value = "";

      navigate('/welcome')
    }
  }, [dadosAluno, navigate])

  async function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const dados = {
      email: evento.currentTarget.email.value,
      senha: evento.currentTarget.password.value,
    };

    // const resposta = await login(dados);
    dispatch(logar(dados));

    
  }

  return (
    <Box
      component="main"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundImage: 'url(https://images3.alphacoders.com/132/thumb-1920-1328226.png)', backgroundSize: 'cover'}}
    >
      <Box component={Paper} padding={4} borderRadius={3} sx={{ backgroundColor: '#ffffffac', backdropFilter: 'blur(5px)'}}>
        <Typography component="h1" variant="h3" align="center" color='secondary' paddingBottom={2}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            color='secondary'
            id="email"
            type="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <TextField
            color='secondary'
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <Button
            color='secondary'
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginY: "6px" }}
            size="large"
          >
            {loading ? 'Carregando...' : 'Entrar'}
          </Button>
        </form>

        <Typography align="center">
          Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Login;
