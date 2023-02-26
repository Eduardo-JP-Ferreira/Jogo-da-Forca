
export default function Jogo(){

    const imagens = ["assets/forca0.png","assets/forca1.png","assets/forca2.png",
    "assets/forca3.png","assets/forca4.png","assets/forca5.png","assets/forca6.png"]

    function escolherPalavra(){
        alert("ole")
    }

    return(
        <div className="container">
            <div className="imagemForca">
                <img src={imagens[0]}></img>
            </div>
            <div className="direita">
                <div className="botaoEscolherPalavra" onClick={escolherPalavra}>
                    <p>Escolher Palavra</p>
                </div>
                <div className="palavra">
                    <p>PALAVRA</p>
                </div>
            </div>
        </div>
    )
}