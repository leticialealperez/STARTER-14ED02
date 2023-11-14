import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// const [estadoLocal, setEstadoLocal] = useState(false)

/// id
/// title
/// conteudo
/// favorite
/// image (url)

export interface Foto {
  id: number;
  titulo: string;
  conteudo: string;
  imagem: string;
  favorito: boolean;
}

type Album = Foto[];

const initialState: Album = [];

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    // Objeto contendo nossas açoes para manipular o estado

    // estado atual , acao = {payload: (valor), type: (tipo)}
    add: (state, action: PayloadAction<Foto>) => {
      state = [...state, action.payload];

      return state;
    },

    remover: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state];

      const index = temp.findIndex((foto) => foto.id === action.payload.id);

      if (index !== -1) {
        temp.splice(index, 1);
      }

      state = [...temp];
      return state;
    },

    toggleFavorito: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state];

      const index = temp.findIndex((foto) => foto.id === action.payload.id);

      if (index !== -1) {
        // true = false
        // false = true
        temp[index].favorito = !temp[index].favorito;
      }

      state = [...temp];
    },

    removerAll() {
      return initialState;
    },
  },
});

// exportamos as acoes para utilizar nos compenentes
export const { add, remover, toggleFavorito, removerAll } = albumSlice.actions;
// exportamos nosso reducer slice para prover para a app (store)
export default albumSlice.reducer;
