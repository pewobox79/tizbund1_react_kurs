import { useEffect, useState } from "react"

const FetchFeature = () => {

    const [value, setValue] = useState<boolean>(false)
    const [users, setUsers] = useState<{name: string, email: string}[]>([])

    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/users/'

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(body => setUsers(body))
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                console.log("finally")
            })

    }, [])

    console.log("users", users)

    return <div>
        <button onClick={() => setValue(!value)}>Change Value</button>
        <h1>Fetch Feature {value ? "active" : "inactive"}</h1>
        {users.map((user) => {
            return <div style={{ padding: 4, border: "1px solid black", borderRadius: 10, width: "50%", margin: "3px auto 3px auto" }}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        })}
    </div>
}
export default FetchFeature