import {
  Box,
  Button,
  Modal as ModalMUI,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { Foto, add } from "../store/modules/album/album.slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

interface ModalProps {
  open: boolean;
  handleClose: () => void;
}

function Modal({ open, handleClose }: ModalProps) {
  // Dispara as açoes
  const dispatch = useAppDispatch();

  function handleSubmit(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const novaFoto: Foto = {
      id: new Date().getMilliseconds(),
      titulo: evento.currentTarget.titulo.value,
      conteudo: evento.currentTarget.conteudo.value,
      imagem: evento.currentTarget.imagem.value,
      favorito: false,
    };

    dispatch(add(novaFoto));

    evento.currentTarget.titulo.value = "";
    evento.currentTarget.conteudo.value = "";
    evento.currentTarget.imagem.value = "";

    handleClose();
  }

  return (
    <ModalMUI
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={handleSubmit}>
        <Typography id="modal-modal-title" variant="h4">
          Nova Foto
        </Typography>

        <TextField id="titulo" label="Titulo" variant="outlined" fullWidth />
        <TextField
          id="conteudo"
          label="Conteudo"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="imagem"
          label="Imagem Link"
          variant="outlined"
          fullWidth
        />

        <Button variant="contained" type="submit">
          Adicionar
        </Button>

        <Button variant="text" color="error" onClick={handleClose}>
          Cancelar
        </Button>
      </Box>
    </ModalMUI>
  );
}

export default Modal;
