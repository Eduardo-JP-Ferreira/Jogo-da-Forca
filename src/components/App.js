import Jogo from "./Jogo";
import Letras from "./Letras";
import React from "react";
import { useState } from "react";
import palavras from "../palavras";

function App() {
    const imagens = ["assets/forca0.png","assets/forca1.png","assets/forca2.png",
    "assets/forca3.png","assets/forca4.png","assets/forca5.png","assets/forca6.png"]

    const [habilitar, setHabilitar] = useState("0")
    const [erros, setErros] = useState(0)
    const [arrayUnderline, setArrayUnderline] = useState([])
    const [elemento, setElemento] = useState("")
    const [arrayPalavra, setArrayPalavra] = useState([])
    //const arrayPalavra = [""];

    console.log("ComeçoUNder",arrayUnderline)
    function escolherPalavra(){
      const elemento2 = palavras[Math.floor(Math.random() * palavras.length)]
      console.log("palavra",elemento2)
      setElemento(elemento2)
      console.log("palavra2",elemento2)

      const arrayzin = elemento2.split("")

      console.log("arayzin",arrayzin)
      console.log("under",arrayUnderline)
      for(let i=0;i<arrayzin.length;i++){
        arrayUnderline.push("_ ")
        arrayPalavra[i]=arrayzin[i]
      }
      console.log("under2",arrayUnderline)
      console.log("AApalavra",arrayPalavra)

       setHabilitar("1");
    }

    function clique(letra){
      console.log("CLICOU")
      console.log("AApalavra",arrayPalavra)
      console.log("UNder",arrayUnderline)
      if(arrayPalavra.includes(letra)){
        console.log("Pa",letra) 
        let indice = arrayPalavra.indexOf(letra)
        console.log("Pa",indice)
        
        arrayUnderline[indice]=letra
        const novoArray = [...arrayUnderline]
        setArrayUnderline(novoArray)
        console.log("novo",arrayUnderline)
      }
      else{
        setErros(erros +1)  
      }
    } 

    
    // console.log(arrayUnderline)
    return (
      <div className="containerTotal">
        <Jogo 
        escolherPalavra={escolherPalavra}
        imagens={imagens} erros={erros}
        habilitar={habilitar} setHablitar={setHabilitar}
        arrayUnderline={arrayUnderline}/>

        <Letras
        habilitado ={habilitar}
        clique={clique}
        erros={erros}
        setErros={setErros}/>
        </div>
    );
}

export default App;
