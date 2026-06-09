const MainLayout = ({children, title}) => {

    return <>
        <header>
            <h2>Header element{title}</h2>
        </header>

        {children || <p>kein children vorhanden</p>}

        <footer>

            <h2>Footer Element</h2>
        </footer>
    </>
}

export default MainLayout