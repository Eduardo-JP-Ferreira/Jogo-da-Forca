import Jogo from "./Jogo";
import { useState } from "react";
export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let a;
    // const [dado, setDado] = useState("0")
    const p = (a) => {
        const nv = props.array
        if(nv.includes(a)){
            alert("Tem")
            // setDado("1")
            // {<Jogo value= {dado}/>}
            
        }
        else{
            alert("Não tem")
            // setDado("0")
            // {<Jogo value= {dado}/>}
            
        }
        
    }
    return(
        <div className="containerLetras">
            {alfabeto.map((item)=>
                
                <div className="letras">
                    {props.habilitado === "0" ? (
                        <button type="button" value={item} onClick={() => p(item) } disabled><span>{item}</span></button>
                    ) : (
                    <button type="button" onClick={() => p(item)} >{item}</button>)}
                </div>
            )}
        </div>
    )
}