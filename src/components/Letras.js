export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let a;
    function p(){
        alert("Letra")
    }
    return(
        <div className="containerLetras">
            {alfabeto.map((item)=>
    
                <div className="letras" onClick={p}>
                    <p>{item}</p>
                </div>
            )}
        </div>
    )
}