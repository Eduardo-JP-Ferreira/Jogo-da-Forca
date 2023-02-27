import Jogo from "./Jogo";
import React from "react";
import { useState } from "react";

export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    return(
        <div className="containerLetras">
            {alfabeto.map((item)=>
                
                <div className="letras">
                    {props.habilitado === "0" ? (
                        <button key={item} type="button" value={item} onClick={() => props.clique(item) } disabled><span>{item}</span></button>
                    ) : (
                    <button key={item} type="button" onClick={() => props.clique(item)} >{item}</button>)}
                </div>
            )}
        </div>
    )
}