import Button from "../components/Button"
import MainLayout from "../layouts/MainLayout"
import ButtonView from "../views/ButtonView"

const Homepage = () => {

    return <MainLayout>
        <h1>Homepage</h1>

        <ButtonView>
            <Button/>
            <Button />
            <Button />
        </ButtonView>
    </MainLayout>
}

export default Homepage