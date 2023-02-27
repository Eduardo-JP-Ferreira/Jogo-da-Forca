import Jogo from "./Jogo";
import Letras from "./Letras";
import React from "react";
import { useState } from "react";
import palavras from "../palavras";

function App() {
  const imagens = ["assets/forca0.png", "assets/forca1.png", "assets/forca2.png",
    "assets/forca3.png", "assets/forca4.png", "assets/forca5.png", "assets/forca6.png"]

  const [habilitarLetras, setHabilitarLetras] = useState("0")
  const [habilitar, setHabilitar] = useState("0")
  const [erros, setErros] = useState(0)
  const [arrayUnderline, setArrayUnderline] = useState([])
  const [elemento, setElemento] = useState("")
  const [arrayPalavra, setArrayPalavra] = useState([])
  const [letrasClicadas, setLetrasClicadas] = useState([])
  const [qntLetras, setQntLetras] = useState(0)
  const [valorCor, setValorCor] = useState(0)
  //const arrayPalavra = [""];

  console.log("ComeçoUNder", arrayUnderline)
  function escolherPalavra() {
    const elemento2 = palavras[Math.floor(Math.random() * palavras.length)]
    console.log("palavra", elemento2)
    setElemento(elemento2)
    console.log("palavra2", elemento2)

    const arrayzin = elemento2.split("")

    console.log("arayzin", arrayzin)
    console.log("under", arrayUnderline)
    for (let i = 0; i < arrayzin.length; i++) {
      arrayUnderline.push("_ ")
      arrayPalavra[i] = arrayzin[i]
    }
    console.log("under2", arrayUnderline)
    console.log("AApalavra", arrayPalavra)

    setHabilitar("1");
    setHabilitarLetras("1")
  }

  function clique(letra) {
    let contadorLetras = qntLetras
    console.log("CLICOU")
    console.log("AApalavra", arrayPalavra)
    console.log("UNder", arrayUnderline)

    letrasClicadas.push(letra)
    console.log("LETRA CL", letrasClicadas)
    const pegaIndice = []

    if (arrayPalavra.includes(letra)) {
      console.log("Letra", letra)
      let indice = arrayPalavra.indexOf(letra)
      console.log("Indice", indice)

      while (indice !== -1) {
        pegaIndice.push(indice)
        indice = arrayPalavra.indexOf(letra, indice + 1)
        //pega todas as letras repetidas e coloca no array
      }
      console.log("IndiceAP", pegaIndice)

      for (let i = 0; i < pegaIndice.length; i++) {
        arrayUnderline[pegaIndice[i]] = letra
        const novoArray = [...arrayUnderline]
        setArrayUnderline(novoArray)
        contadorLetras = contadorLetras + 1
        console.log("LETRAS QNT", contadorLetras)
      }
      setQntLetras(contadorLetras)
      if(contadorLetras == arrayPalavra.length){
        setHabilitarLetras("0");
        alert("Venceu!")
      }
      console.log("novo", arrayUnderline)
    }
    else if (erros < 5) {
      setErros(erros + 1)
    }
    else {
      setErros(erros + 1)
      setHabilitarLetras("0");
      alert("PERDEU")
    }
  }


  // console.log(arrayUnderline)
  return (
    <div className="containerTotal">
      <Jogo
        escolherPalavra={escolherPalavra}
        imagens={imagens} erros={erros}
        habilitar={habilitar} setHablitar={setHabilitar}
        arrayUnderline={arrayUnderline} />

      <Letras
        habilitado={habilitarLetras}
        clique={clique}
        erros={erros}
        setErros={setErros}
        valorCor ={valorCor}
        letrasClicadas={letrasClicadas} />
    </div>
  );
}

export default App;
