import Produto from "@/models/produto";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css"

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
        <ol className={styles.produtos}>{props.produtos.map(mapear)}</ol>
    );
}

export default ProductList