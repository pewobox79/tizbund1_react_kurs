import type { ReactElement } from "react"

const ButtonView = ({children}: {children: ReactElement | ReactElement[]}) => {

    return <section>
        <div>
            <h1>Mein Button View </h1>
            
            <div style={{border: "1px solid red", padding: 10}} >
                {children}
            </div>

        </div>
    </section>
}

export default ButtonView