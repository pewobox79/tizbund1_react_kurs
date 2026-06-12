import { useRef, type ReactNode } from "react"

const Modal = ({ children }: { children?: ReactNode }) => {

    const dialogRef = useRef<HTMLDialogElement>(null)
    console.log("referenc dialog")
    return <>
        <button onClick={() => dialogRef.current?.showModal()}>Open</button>
        <dialog ref={dialogRef}>
            <h1>Modal</h1>
            {children}

            <button onClick={() => dialogRef.current?.close()}>close</button>
        </dialog>
    </>
}

export default Modal