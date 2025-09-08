import "./styles.css"

type Props = {
    nome: string;
    preco: number;
    fotoUrl: string;
}

export default function ProductCard(props: Props){
    return (
    <li className="produto">
                <span className="nome">{props.nome}</span>
                <img className = "foto" src={props.fotoUrl} alt={props.nome} style={{width: 256, height: 256}}/>
                <span className="preco">R$ {props.preco}</span>
    </li>

    );
}
