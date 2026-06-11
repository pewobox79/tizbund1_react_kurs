import { NavLink } from "react-router"
import type { NavigationItemProps } from "./Navigation"
import styles from '../../styles/navigationStyle.module.css'

const NavigationItem = ({ label, href }: NavigationItemProps) => {
    return <NavLink
        to={href}
        target="_self"
        title={`link zu ${label}`}
        className={({isActive}) => isActive ? styles.active :""}
    >
        {label}
    </NavLink>
}

export default NavigationItem