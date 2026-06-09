import { useState } from "react"

const ShoppingItem = ({ name, quantity }) => {

    console.log("item renders", name)
    const [quant, setQuant] = useState(quantity)

    console.log("quant outside increment", quant, name)
    function increment() {
        // prev ist der aktuelle wert von quant zu dem zeitpunkt an dem die funktion getriggert wird.
        setQuant((prev) => prev + 1)
        console.log("inside increment", quant, name)
    }

    function decrement() {
        if(quant == 0) return
        setQuant(prev => prev - 1)
    }

    const btnStyle = { padding: 5, border: "1px solid black" }

    return <div className="shoppingItem" style={
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }>
        <h4 className="shoppintItemName">{name}</h4>
        <p>Anzahl: {quant}</p>
        <div style={btnStyle} onClick={increment}> + </div>
        <div style={{ padding: 5, border: "1px solid black" }} onClick={decrement}> - </div>
    </div>
}

export default ShoppingItem