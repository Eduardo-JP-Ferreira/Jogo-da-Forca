import { useState } from "react";
import Letras from "./Letras"
import palavras from "../palavras";

export default function Jogo(props){

    const imagens = ["assets/forca0.png","assets/forca1.png","assets/forca2.png",
    "assets/forca3.png","assets/forca4.png","assets/forca5.png","assets/forca6.png"]

    const [habilitar, setHabilitar] = useState("0")
    const [erros, setErros] = useState(0)
    function escolherPalavra(){
        setHabilitar("1");
    }
    const elemento = palavras[Math.floor(Math.random() * palavras.length)]
    const arrayPalavra = elemento.split("")
    console.log(arrayPalavra)
    const arrayUnderline=[]
    for(let i=0;i<arrayPalavra.length;i++){
        arrayUnderline.push("_ ")
    }
    console.log(arrayUnderline)

    console.log("value",props.value)

    return(
        <div className="containerTotal">
            <div className="container">
                <div className="imagemForca">
                    <img src={imagens[erros]}></img>
                </div>
                <div className="direita">
                    <div className="botaoEscolherPalavra" onClick={escolherPalavra}>
                        <p>Escolher Palavra</p>
                    </div>
                    <div className="palavra">
                        {habilitar === "0" ? 
                        (<p className="invisivel">{arrayUnderline}</p>) : 
                        (<p>{arrayUnderline}</p>)}
                    </div>
                </div>
            </div>
            <Letras habilitado ={habilitar} array = {arrayPalavra}/>
        </div>
    )
}
