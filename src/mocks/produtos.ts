import Produto from "@/models/produto";

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Notebook Dell",
    fotoUrl:
      "https://m.media-amazon.com/images/I/51Gq+Fe6RlL._UF894,1000_QL80_.jpg",
    preco: 3.999,
  },

  {
    id: 2,
    nome: "Smartphone Samsung Galaxy",
    fotoUrl:
      "https://http2.mlstatic.com/D_NQ_NP_907051-MLA53448588796_012023-O.webp",
    preco: 4.199,
  },

  {
    id: 3,
    nome: "Mouse Gamer Razer",
    fotoUrl:
      "https://img.terabyteshop.com.br/produto/g/mouse-gamer-razer-cobra-rgb-6-botoes-programaveis-8500-dpi-black-rz0104650100r3u_180092.jpg",
    preco: 255,
  },

  {
    id: 4,
    nome: "Teclado Gamer Razer",
    fotoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJFVu79UoHyKTUuJDy6pgY_FeIqxcZ87jkw&s",
    preco: 330,
  },

];

export default produtos;
