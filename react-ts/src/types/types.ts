import type { CSSProperties, ReactElement } from "react"


export type ButtonProps = {
    label?: string | number //=> ? ist optionaler Type
    children?: ReactElement | ReactElement[] // => nur elemente erlaubt
    customCSS?: CSSProperties
}