import { useContext, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { UserContext } from "../../context/userContext"

const FetchFeature = () => {

    const userContext = useContext(UserContext)


    const [value, setValue] = useState<boolean>(false)
    const url = 'https://jsonplaceholder.typicode.com/users/'
    
    const {data} = useFetch(url)
    console.log("data", data)

    if(!data) return
    return <div>
        <button onClick={() => setValue(!value)}>Change Value</button>
        <h1>Fetch Feature {value ? "active" : "inactive"}</h1>
        <h2>{userContext.user.username}</h2>
        {data.map((user) => {
            return <div style={{ padding: 4, border: "1px solid black", borderRadius: 10, width: "50%", margin: "3px auto 3px auto" }}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        })}
    </div>
}
export default FetchFeature