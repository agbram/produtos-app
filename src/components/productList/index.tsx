import Produto from "@/models/produto";
import ProductCard from "../productCard";
import "./styles.css"

type Props = {
    produtos: Produto[];
}

function mapear(produto: Produto) {
    return (
      <ProductCard
        key={produto.id}
        produto={produto}
      />
    );
  }
function ProductList(props: Props){
    return(
        <ol className="produtos">{props.produtos.map(mapear)}</ol>
    );
}

export default ProductList