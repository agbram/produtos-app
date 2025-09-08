import Image from "next/image";
import "./page.css";
import ProductCard from "@/components/productCard";
import Produto from "@/models/produto";
import produtos from "@/mocks/produtos";


export default function Home() {
    
  function mapear(produtos: Produto) {
    return (
      <ProductCard
        key={produtos.id}
        nome={produtos.nome}
        fotoUrl={produtos.fotoUrl}
        preco={produtos.preco}
      />
    );
  }

  return (
    <>
      <header>
        <h1 id="title">Lista de Produtos</h1>
      </header>

      <main>
        <ol className="produtos">{produtos.map(mapear)}</ol>
      </main>
    </>
  );
}
