//import '../styles/buttonStyle.css'
import styles from '../styles/buttonStyle.module.css'
import type { ButtonProps, ButtonTypes } from '../types/types'

export default function Button({
    label = "Default",
    children,
    customCSS,
    type = "primary"
}: ButtonProps) {

    console.log("styles", styles)
    function getBtnStyle(value: ButtonTypes) {
        switch (value) {
            case "primary":
                return styles.btnBg
            default: return styles.btnBg
        }
    };

    return <button
        id="2"
        className={styles.btnBg}
        style={customCSS}
    >
        {children || label}
    </button>

}