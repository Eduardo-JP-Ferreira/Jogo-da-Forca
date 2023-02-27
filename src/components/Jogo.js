import React from "react";
import { useState } from "react";
import Letras from "./Letras"
import palavras from "../palavras";

export default function Jogo(props){

    
    return(
            <div className="container">
                <div className="imagemForca">
                    <img src={props.imagens[props.erros]}></img>
                </div>
                <div className="direita">
                    <div className="botaoEscolherPalavra" onClick={props.escolherPalavra}>
                        <p>Escolher Palavra</p>
                    </div>
                    <div className="palavra">
                        {props.habilitar === "0" ? 
                        (<p className="invisivel">{props.arrayUnderline}</p>) : 
                        (<p>{props.arrayUnderline}</p>)}
                    </div>
                </div>
            </div>
            
    )
}
