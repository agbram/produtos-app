import Produto from "@/models/produto";
import styles from "./styles.module.css"

type Props = {
  produto: Produto;
}

export default function ProductCard(props: Props){
    return (
    <li className={styles.produto}>
                <span className={styles.nome}>{props.produto.nome}</span>
                <img className ={styles.foto} src={props.produto.fotoUrl} alt={props.produto.nome} style={{width: 256, height: 256}}/>
                <span className={styles.preco}>R$ {props.produto.preco}</span>
    </li>

    );
}
