import { Item } from './classes/Item';
import { Pedido } from './classes/Pedido';

// concretizando algo que foi criado um modelo
const pedido = new Pedido();
const camiseta = new Item(100, 'Camiseta', 'Camiseta preta da Vans');
const tenis = new Item(600, 'Tenis', 'Tenis da Nike');
pedido.adicionarItem(camiseta);
pedido.adicionarItem(tenis);

tenis.mostrarDados();
pedido.mostrarDados(); // output = 700
