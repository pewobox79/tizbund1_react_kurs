import type { UserLoginProps } from "../../types/types"
import type { ChangeEvent, MouseEvent } from "react"
import { useState } from "react"
const INIT_FORM_VALUES = {
    username: "",
    email: "",
    loggedIn: false
} as UserLoginProps

const UserLogin = () => {


    const [formData, setFormData] = useState<UserLoginProps>(INIT_FORM_VALUES)

    function formIsFilled(formDataValues:UserLoginProps){
        if (!formDataValues.username || !formDataValues.email) return true
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }
    function handleLogin(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const updateUserData = {...formData, loggedIn: true}
        alert(`user data to submit ${JSON.stringify(updateUserData)} `)
        setFormData(INIT_FORM_VALUES)
    }

    return <div>
        <h2>User login</h2>
        <form>
            <input type="text" name="username" value={formData?.username} placeholder="Username" onChange={handleChange} />
            <input type="text" name="email" value={formData?.email} placeholder="Email" onChange={handleChange} />
            {!formIsFilled(formData) && <button onClick={handleLogin}>Login</button>}
        </form>
    </div>
}

export default UserLogin