import { useState, type ReactNode } from "react"
import { Outlet } from "react-router"
import Navigation from "../components/Navigation/Navigation"
import { UserContext } from "../context/userContext"
import { useLocalStorage } from "../hooks/useLocalStorage"

const MainLayout = ({ children }: { children?: ReactNode }) => {
    // => children ist im Kontext von REACT zu verwenden!!
    // => Outlet ist im Kontext von REACT ROUTER zu verwenden!!

    // KOMMENTARE MACHEN SINN, WENN CHILDREN UND OUTLET ENTHALTEN SIND.
    // normal würde in einem mainlayout das über den router läuft, kein children verarbeitet werden.

    const INIT_USER_VALUE = {username: "", email: "", loggedIn: false}
    const {value} = useLocalStorage("itzb_user", INIT_USER_VALUE) // => prüfen ob user in localStorage vorhanden

    const [user, setUser] = useState(value)

    return <UserContext.Provider value={{user, setUser}}>
        <header>
            <h3>Headerbereich</h3>
            <Navigation/>
        </header>

        <main>
            {children}
            <Outlet />
        </main>

        <footer>
            <h3>footer bereich</h3>
        </footer>
    </UserContext.Provider>
}

export default MainLayout