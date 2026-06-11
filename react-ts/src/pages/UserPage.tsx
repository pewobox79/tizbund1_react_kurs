import { useParams } from "react-router"

const UserPage =()=>{

    const params = useParams() // =>zugriff auf url parameter
    console.log("params in users/:id", params)

    //AUFGABE: 
    // userId über den parameter auslesen
    // useEffect installieren und die abfrage an json.placeholder machen
    // useSTate nutzen um den ausgewählten return user zu speichern
    // rendern der userdaten im komponent return
    // Fallback: bitte info ausgeben, wenn kein user vorhanden ist. 0 oder 11 oder höher!
    return <h1>user page</h1>
}

export default UserPage