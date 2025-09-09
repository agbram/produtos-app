import Produto from "@/models/produto";
import "./styles.css"

type Props = {
  produto: Produto;
}

export default function ProductCard(props: Props){
    return (
    <li className="produto">
                <span className="nome">{props.produto.nome}</span>
                <img className = "foto" src={props.produto.fotoUrl} alt={props.produto.nome} style={{width: 256, height: 256}}/>
                <span className="preco">R$ {props.produto.preco}</span>
    </li>

    );
}
