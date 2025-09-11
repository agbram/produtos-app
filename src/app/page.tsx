import Image from "next/image";
import "./page.css";
import ProductCard from "@/components/ProductCard";
import Produto from "@/models/produto";
import produtos from "@/mocks/produtos";
import ProductList from "@/components/ProductList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <ProductList produtos={produtos} />
      </main>
    </>
  );
}
