import type { CSSProperties, ReactElement } from "react"
import '../styles/buttonStyle.css'


export type ButtonProps = {
    label?: string | number //=> ? ist optionaler Type
    children?: ReactElement | ReactElement[] // => nur elemente erlaubt
    customCSS?: CSSProperties
}

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