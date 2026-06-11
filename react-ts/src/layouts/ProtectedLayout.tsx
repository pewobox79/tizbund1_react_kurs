import { Outlet } from "react-router"

const ProtectedLayout =()=>{

    return <div style={{border: "1px solid red"}}>
        <h1>protected layout</h1>
        <Outlet/>
    </div>
}

export default ProtectedLayout