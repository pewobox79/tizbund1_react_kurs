import type { UserProps } from "../types/types"

const UserView = (props: UserProps) => {
    console.log(props)

    if (Object.entries(props).length === 0) return <h1>no user</h1>

    const { name, email } = props
    return <div>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
    </div>
}
export default UserView