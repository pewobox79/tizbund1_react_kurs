import type { CSSProperties, ReactElement } from "react"

export type ButtonTypes = "primary" | "secondary" | "text"
export type ButtonProps = {
    label?: string | number //=> ? ist optionaler Type
    children?: ReactElement | ReactElement[] // => nur elemente erlaubt
    customCSS?: CSSProperties
    type?: ButtonTypes
}

export type Address ={
    street: string
    zipCode: string | number
}
export interface UserProps {
    name: string,
    email: string
    address: Address
}