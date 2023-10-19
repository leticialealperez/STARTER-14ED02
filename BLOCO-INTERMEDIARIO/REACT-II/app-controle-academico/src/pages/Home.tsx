import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AtualizarAvaliacao,
  atualizarAvaliacao,
  cadastrarAvaliacao,
  deletarAvaliacao,
  listarTodasAvaliacoes,
} from "../services/avaliacao.service";

interface Avaliaco {
  id: string;
  idAluno: string;
  nota: number;
  modulo: string;
}

function Home() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token") ?? "false");

  const [listaAvaliacoes, setListaAvaliacoes] = useState<Avaliaco[]>([]);

  // CONTROLA SE TEM O TOKEN NO LOCAL STORAGE OU NAO
  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  // BUSCA TODAS AS AVALIACOES DO USUARIO LOGADO
  async function buscarAvaliacoes() {
    const resposta = await listarTodasAvaliacoes(token);

    setListaAvaliacoes(resposta.dados);

    console.log("Chamou a função buscar todas avaliações");
  }

  useEffect(() => {
    buscarAvaliacoes();
  }, []);

  // CADASTRAR UMA NOVA AVALIAÇÃO
  async function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const dados = {
      nota: evento.currentTarget.nota.value,
      modulo: evento.currentTarget["modulo"].value,
    };

    const resposta = await cadastrarAvaliacao(token, dados);

    if (!resposta.ok) {
      alert(resposta.mensagem);
      return;
    }

    alert(resposta.mensagem);

    evento.currentTarget.modulo.value = "";
    evento.currentTarget.nota.value = null;
  }

  // EDITAR
  async function editar(id: string) {
    const modulo = prompt(`Digite o novo módulo: `);
    const nota = prompt(`Digite a nova nota: `);

    const notaConvertido = Number(nota);

    const dados: AtualizarAvaliacao = {
      idAvaliacao: id,
      modulo: modulo ? modulo : undefined,
      nota: notaConvertido ? notaConvertido : undefined,
    };

    if (!modulo && !notaConvertido) {
      return;
    }

    const resposta = await atualizarAvaliacao(token, dados);

    alert(resposta.mensagem);
    buscarAvaliacoes();
  }

  // DELETAR
  async function deletar(id: string) {
    const confirmado = confirm(
      `Você deseja realmente excluir a avaliação de ID: ${id}? `
    );

    if (!confirmado) {
      return;
    }

    const resposta = await deletarAvaliacao(token, id);
    alert(resposta.mensagem);

    // BUSCA A LISTA ATUALIZADA LA DO BACKEND
    buscarAvaliacoes();
  }

  return (
    <Box>
      <Grid item xs={12}>
        <Typography variant="h4" color="initial">
          Formulário de Avaliações
        </Typography>
      </Grid>

      <form id="form-cadastro-avaliacao" onSubmit={handleSubmit}>
        <Grid container spacing={1} sx={{ mb: 4 }}>
          <Grid item xs={3}>
            <TextField
              id="modulo"
              label="Modulo"
              variant="outlined"
              fullWidth
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              id="nota"
              label="Nota"
              variant="outlined"
              type="number"
              fullWidth
              sx={{ mt: 1 }}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ mt: 1, py: 2 }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>

      <Grid container spacing={1}>
        {listaAvaliacoes.map((avaliacao) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={avaliacao.id}>
            <Card sx={{ background: "#eaeaea" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {avaliacao.modulo}
                </Typography>

                <Typography variant="body2">{avaliacao.nota}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  color="info"
                  onClick={() => editar(avaliacao.id)}
                >
                  Editar
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => deletar(avaliacao.id)}
                >
                  Apagar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
