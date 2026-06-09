import { useState } from "react"
import Heading from "../components/Heading"

const MainLayout = ({ children, title }) => {

    const [value, setValue] = useState(false)

    console.log("layout renders")
    function handleChange() {
        setValue(!value)
    }
    return <>
        <header>
            <h2>Header element{title}</h2>
        </header>
        <Heading title="das ist mein heading im layout" value={value}/>

        <button onClick={handleChange}>change</button>
        {children || <p>kein children vorhanden</p>}

        <footer>

            <h2>Footer Element</h2>
        </footer>
    </>
}

export default MainLayout