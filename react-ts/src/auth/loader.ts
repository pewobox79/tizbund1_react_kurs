import { redirect } from "react-router";
import { isAuthenticated } from "./auth";

export async function protectedLoader(){

    const isAuth = isAuthenticated()
    if(!isAuth){
        throw redirect("/login")
    }

    return true


}