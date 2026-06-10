import { useEffect, useState } from "react"

const FetchFeature = () => {

    const [value, setValue] = useState<boolean>(false)
    const [users, setUsers] = useState([])

    useEffect(() => {

        const url = 'https://jsonplaceholder.typicode.com/users/'

        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(body => setUsers(body))
            .catch(err =>{
                console.log(err)
            })
            .finally(()=>{
                console.log("finally")
            })

    }, [])

    console.log("users", users)

    return <div>
        <button onClick={() => setValue(!value)}>Change Value</button>
        <h1>Fetch Feature {value ? "active" : "inactive"}</h1>
        {/** Rendern der einzelnen user */}
    </div>
}
export default FetchFeature