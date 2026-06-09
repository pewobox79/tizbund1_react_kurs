const MainLayout = ({children} ) => {

    return <>
        <header>
            <h2>Header element</h2>
        </header>

        {children}

        <footer>

            <h2>Footer Element</h2>
        </footer>
    </>
}

export default MainLayout