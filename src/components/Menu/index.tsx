import styles from "./styles.module.css"

export default function Menu(){
    return(
        <nav className={styles.menu}>
          <a href="/">Home</a>
          <a href="/contato">Contato</a>
          <a href="#">Perfil</a>
        </nav>
    );
}