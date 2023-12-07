import { Box, Button, Paper, TextField, Typography } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

function Login() {
  const navigate = useNavigate();

  async function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const dados = {
      email: evento.currentTarget.email.value,
      senha: evento.currentTarget.password.value,
    };

    const resposta = await login(dados);

    // Valida o erro
    if (resposta.ok === false) {
      alert(resposta.mensagem);
      return;
    }

    alert(resposta.mensagem);
    localStorage.setItem("token", JSON.stringify(resposta.dados.token));

    navigate("/home");

    evento.currentTarget.email.value = "";
    evento.currentTarget.password.value = "";
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
        <Typography component="h1" variant="h3" align="center">
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            type="email"
            label="E-mail"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            fullWidth
            margin="dense"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginY: "6px" }}
            size="large"
          >
            Entrar
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
