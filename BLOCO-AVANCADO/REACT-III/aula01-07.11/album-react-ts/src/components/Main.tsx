import {
  Add,
  Delete,
  FavoriteBorderRounded,
  FavoriteRounded,
  RemoveRedEyeRounded,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fab,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  remover,
  removerAll,
  toggleFavorito,
} from "../store/modules/album/album.slice";
import {
  decrementar,
  incrementar,
  incrementarPorNumero,
} from "../store/modules/counter/counter.slice";
import Modal from "./Modal";

function Main() {
  // disparar ações de modificação da store
  const dispatch = useAppDispatch();
  const albumRedux = useAppSelector((state) => state.album);
  const [openModal, setOpenModal] = useState(false);

  function deleteAll() {
    dispatch(removerAll());
  }

  function handleFavorite(id: number) {
    dispatch(toggleFavorito({ id }));
  }

  function handleRemover(id: number) {
    dispatch(remover({ id }));
  }

  return (
    <Box component="main" sx={{ pt: 10 }}>
      <Box component="section" sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            textAlign="center"
            noWrap
            marginBottom={2}
          >
            Album layout
          </Typography>

          <Typography
            variant="h5"
            textAlign="center"
            color="GrayText"
            paragraph
            marginBottom={3}
          >
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </Typography>

          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            paddingTop={4}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => dispatch(incrementar())}
            >
              INCREMENTAR
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => dispatch(decrementar())}
            >
              DECREMENTAR
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              onClick={() => dispatch(incrementarPorNumero(10))}
            >
              INCREMENTAR + 10
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ paddingY: 8 }}>
        <Grid container spacing={4}>
          {albumRedux &&
            albumRedux.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={6} md={4}>
                  <Card sx={{ width: "100%" }} elevation={10}>
                    <CardMedia
                      sx={{ pt: "56.25%" }}
                      image={item.imagem}
                      title="Imagem Wallpaper Card"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h6">
                        {item.titulo}
                      </Typography>
                      <Typography variant="body2" color="GrayText">
                        {item.conteudo}
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <IconButton aria-label="Learn More">
                        <RemoveRedEyeRounded color="primary" />
                      </IconButton>
                      <IconButton
                        aria-label="Favorite"
                        onClick={() => handleFavorite(item.id)}
                      >
                        {item.favorito ? (
                          <FavoriteRounded color="error" />
                        ) : (
                          <FavoriteBorderRounded color="error" />
                        )}
                      </IconButton>

                      <IconButton
                        aria-label="Delete"
                        onClick={() => handleRemover(item.id)}
                      >
                        <Delete color="warning" />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>

      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        gap={2}
        right={10}
        bottom={10}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => setOpenModal(true)}
        >
          <Add />
        </Fab>
        <Fab color="error" aria-label="add" onClick={deleteAll}>
          <Delete />
        </Fab>
      </Box>

      <Modal open={openModal} handleClose={() => setOpenModal(false)} />
    </Box>
  );
}

export default Main;
