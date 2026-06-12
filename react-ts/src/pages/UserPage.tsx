import { useParams } from "react-router"
import { useState, useEffect, useContext } from "react"
import UserView from "../views/UserView"
import type { UserProps } from "../types/types"
import { UserContext } from "../context/userContext"

const UserPage = () => {

    const userContextData = useContext(UserContext)
    console.log("userContextdata", userContextData)
    const { id } = useParams<{id:string}>() // => zugriff auf url parameter

    const [selectedUser, setSelectedUser] = useState<UserProps>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url).then(res => res.json()).then(userData => {
            console.log("user data", userData)
            setSelectedUser(userData)
            setIsLoading(false)
        })

    }, [id])


    if (isLoading || !selectedUser) return <h1>...loading data</h1>


    return <><UserView {...selectedUser} /></>
}

export default UserPage