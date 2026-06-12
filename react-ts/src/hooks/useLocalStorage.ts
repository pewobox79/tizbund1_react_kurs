
import { useState } from "react"
export function useLocalStorage(key: string, initValue: unknown = "test") {

    // Wert in Localstorage
    const [value, setValue] = useState(() => {
        //inital wird bei aufruf von useLocalStorage das Item in local geprüft
        const storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : initValue
    })

    //update localstorage oder speichern in localstorage
    const setLocalStorage = (newValue: unknown) => {
        setValue(newValue) // => update ui state
        localStorage.setItem(key, JSON.stringify(newValue)) //=> setzt wert in localstorage
    }

    const removeLocalStorage = () => {
        setValue(initValue)
        localStorage.removeItem(key)
    }


    //zugriff auf die Referenzen als Objekt
    return { value, setLocalStorage, removeLocalStorage }
}