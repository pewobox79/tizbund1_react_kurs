import { useEffect, useState } from "react"

const DomFeature = () => {

    const [value, setValue] = useState<boolean>(false)
    useEffect(() => {

        //usecase für injection von dom elementen ist bei CONSENT TOOLS üblich!
        console.log("use Effect runs")
        const div = document.createElement("div")
        div.setAttribute("id", "element")
        div.innerHTML = "<h1>hallo useEffectDiv</h1>"
        document.body.append(div)

        //clean up funktion
        return () => {
            console.log("cleanup runs")
            //lösche das div element
            const elementToDelete = document.getElementById("element")
            if (elementToDelete) {
                elementToDelete.remove()
            }

        }


    }, [value])
    return <div>
        <button onClick={() => setValue(!value)}>Change Value</button>
        <h1>Fetch Feature {value ? "active" : "inactive"}</h1>
    </div>
}
export default DomFeature