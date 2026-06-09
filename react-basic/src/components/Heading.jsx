//Arrow function als Init für Komponente
const Heading = ({title}) => {

    //const { title } = props // destructuring in JS

    return <h1>{title || "fallback"}</h1>

}
export default Heading