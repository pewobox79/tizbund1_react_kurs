import { Outlet } from "react-router"
import { useLocalStorage } from "../hooks/useLocalStorage"

const ProtectedLayout =()=>{

    const {value} = useLocalStorage("itzb_user")

    return <div style={{border: "1px solid red"}}>
        <h1>protected layout {value.username}</h1>
        <Outlet/>
    </div>
}

export default ProtectedLayout