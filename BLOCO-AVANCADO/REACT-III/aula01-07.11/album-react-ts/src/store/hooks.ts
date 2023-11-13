import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';

import type { EstadoGlobal, TipoDoDispatch } from '.';

// HOOKS COM INFERENCIA DE TIPOS
export const useAppDispatch: () => TipoDoDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<EstadoGlobal> = useSelector;
