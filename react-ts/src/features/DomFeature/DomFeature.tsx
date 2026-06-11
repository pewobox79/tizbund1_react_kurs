import { useEffect, useState } from "react"

const DomFeature = () => {

    const [value, setValue] = useState<boolean>(false)
    useEffect(() => {
        //usecase für injection von dom elementen ist bei CONSENT TOOLS üblich!
        // componentDidMout
        console.log("use Effect runs")
        const div = document.createElement("div")
        div.setAttribute("id", "element")
        div.innerHTML = "<h1>hallo useEffectDiv</h1>"
        document.body.append(div)

        //cleanup funktion
        return () => {
            //componentDidUnmount
            console.log("cleanup runs")
            //lösche das div element
            const elementToDelete = document.getElementById("element")
            if (elementToDelete) {
                elementToDelete.remove()
            }

        }


        //=> wenn dependency array werte hat, dann ist der tigger für componentDidUpdate zuständig
    }, [value])
    return <div>
        <button onClick={() => setValue(!value)}>Change Value</button>
        <h1>Fetch Feature {value ? "active" : "inactive"}</h1>
    </div>
}
export default DomFeature