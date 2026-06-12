import Button from "../components/Button"
import FetchFeature from "../features/FetchFeature/FetchFeature"
import { useLocalStorage } from "../hooks/useLocalStorage"
import ButtonView from "../views/ButtonView"

const Homepage = () => {

    const itzbUser = useLocalStorage("itzb_user")
    return <div>
        <h1>Homepage {itzbUser.value.username}</h1>
        <button onClick={itzbUser.removeLocalStorage}>logout user</button>
        <FetchFeature/>
        <ButtonView>
            <Button />
            <Button />
            <Button />
        </ButtonView>
    </div>
}

export default Homepage