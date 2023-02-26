

export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let a;

    function p(){
        alert("Letra")
    }
    return(
        <div className="containerLetras">
            {alfabeto.map((item)=>
    
                <div className="letras">
                    {props.habilitado === "0" ? (
                        <button type="button" onClick={p} disabled>{item}</button>
                    ) : (
                    <button type="button" onClick={p} >{item}</button>)}
                </div>
            )}
        </div>
    )
}