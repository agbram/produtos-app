import { TextField } from "@/components/TextField";
import "./page.module.css"

export default function Contato(){
    return(
        <>
        <h1>Contato</h1>

        <form action="">
            <TextField 
            label = "Nome" 
            type ="text"
            />

            <TextField 
            label = "Email" 
            type ="email"
            />

            <TextField 
            label = "Assunto" 
            type ="text"
            />

            <TextField 
            label = "Mensagem" 
            type ="text"
            multiline
            />

            <button>Enviar</button>
        </form>
        
        </>
    );
}