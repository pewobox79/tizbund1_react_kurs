import type { ReactNode } from "react"
import { Outlet } from "react-router"
import Navigation from "../components/Navigation/Navigation"

const MainLayout = ({ children }: { children?: ReactNode }) => {
    // => children ist im Kontext von REACT zu verwenden!!
    // => Outlet ist im Kontext von REACT ROUTER zu verwenden!!

    // KOMMENTARE MACHEN SINN, WENN CHILDREN UND OUTLET ENTHALTEN SIND.
    // normal würde in einem mainlayout das über den router läuft, kein children verarbeitet werden.
    return <>
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
    </>
}

export default MainLayout