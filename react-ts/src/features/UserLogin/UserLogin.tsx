import type { UserLoginProps } from "../../types/types"
import type { ChangeEvent, MouseEvent } from "react"
import { useState, useRef } from "react"
import { useLocalStorage } from "../../hooks/useLocalStorage"
const INIT_FORM_VALUES = {
    username: "",
    email: "",
    loggedIn: false
} as UserLoginProps

const UserLogin = () => {

    const itzbUser = useLocalStorage("itzb_user")

    const refTestInput = useRef(null)
    
    const [formData, setFormData] = useState<UserLoginProps>(INIT_FORM_VALUES)
    function formIsFilled(formDataValues: UserLoginProps) {
        if (!formDataValues.username || !formDataValues.email) return true
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    function handleLogin(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        console.log("refTest", refTestInput)
        const updateUserData = { ...formData, loggedIn: true }
        alert(`user data to submit ${JSON.stringify(updateUserData)} `)
        itzbUser.setLocalStorage(updateUserData)
        setFormData(INIT_FORM_VALUES) // => clean for
    }
console.log("formdata", formData)
    return <div>
        <h2>User login</h2>
        <form style={{ width: "50%", margin: "auto" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor={"username"}>Username</label>
                <input id={"username"} type="text" name="username" value={formData?.username} placeholder="Username" onChange={handleChange} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email">Email</label>
                <input id={"email"} type="text" name="email" value={formData?.email} placeholder="Email"
                    onChange={handleChange} /></div>

                    <input name="refTest" type="text" placeholder="reftest" ref={refTestInput}/>
            {!formIsFilled(formData) && <button onClick={handleLogin}>Login</button>}
        </form>
    </div>
}

export default UserLogin