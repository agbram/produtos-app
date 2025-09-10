import styles from "./styles.module.css"
 import Logo from "@/components/Logo"
 import Menu from "@/components/Menu"
 
 
export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <h1 className={styles.cabecalho}>Loja de Produtos</h1>
            <Menu />
        </header>
    )
}