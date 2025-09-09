import Image from "next/image";
import "./page.css";
import ProductCard from "@/components/productCard";
import Produto from "@/models/produto";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/productList";


export default function Home() {
  return (
    <>
      <header>
        <h1 id="title">Lista de Produtos</h1>
      </header>

      <main>
       <ProductList produtos={produtos} />
      </main>
    </>
  );
}
