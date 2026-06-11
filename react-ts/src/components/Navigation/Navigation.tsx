import { navData } from "../../static/navData"
import NavigationItem from "./NavigationItem"
export type NavigationItemProps = {
    label: string
    href: string
}
const Navigation = () => {

    const NavItemList = navData.map((item: NavigationItemProps) => {
        return <NavigationItem key={`navitemkey_${item.href}`} {...item}/>
    })

    const navStyling = { display: "flex", width: "70%", margin: "auto", justifyContent: "space-evenly" }

    return <nav style={navStyling}>
        {NavItemList}
    </nav>
}

export default Navigation