import { listaUsuarios } from './database/usuarios';

const novousuario = new User(email, senha);
listaUsuarios.push(novousuario);

console.log(listaUsuarios);
