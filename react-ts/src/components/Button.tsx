import '../styles/buttonStyle.css'
import type { ButtonProps } from '../types/types'

export default function Button({
    label = "Default",
    children,
    customCSS
}: ButtonProps) {

    return <button
        id="btnBg"
        className="btnBg"
        style={customCSS}
    >
        {children || label}
    </button>

}