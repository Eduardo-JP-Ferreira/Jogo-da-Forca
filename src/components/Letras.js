import Jogo from "./Jogo";
import React from "react";
import { useState } from "react";

export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return(
        <div className="containerLetras">
            {alfabeto.map((item)=>
                
                <div className={(props.letrasClicadas.includes(item) || props.habilitado === "0") ? "desabilitado letras" : "letras"}>
                    <button data-test="letter" key={item} type="button"
                    disabled={(props.letrasClicadas.includes(item) || props.habilitado === "0") ? true:false}
                    onClick={() => props.clique(item)} >{item}</button>
                </div>
            )}
        </div>
    )
}