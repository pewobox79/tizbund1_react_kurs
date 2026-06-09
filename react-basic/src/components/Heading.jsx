import { memo } from "react"
//Arrow function als Init für Komponente
const Heading = ({ title, value }) => {
    console.log("heading renders", value)
    //const { title } = props // destructuring in JS

    return <h1>{title || "fallback"}</h1>

}
export default memo(Heading)