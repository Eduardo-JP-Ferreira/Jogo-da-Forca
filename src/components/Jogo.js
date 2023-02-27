import React from "react";
import { useState } from "react";
import Letras from "./Letras"
import palavras from "../palavras";

export default function Jogo(props){

    
    return(
            <div className="container">
                <div className="imagemForca">
                    <img data-test="game-image" src={props.imagens[props.erros]}></img>
                </div>
                <div className="direita">
                    <div data-test="choose-word" className="botaoEscolherPalavra" onClick={props.escolherPalavra}>
                        <p>Escolher Palavra</p>
                    </div>
                    <div className={(props.resultado === "") ? "palavra" : `palavra ${props.resultado}`}>
                        {props.habilitar === "0" ? 
                        (<p data-test="word" className="invisivel">{props.arrayUnderline}</p>) : 
                        (<p data-test="word">{props.arrayUnderline}</p>)}
                    </div>
                </div>
            </div>
            
    )
}
