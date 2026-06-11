import { redirect } from "react-router";
import { isAuthenticated } from "./auth";

export async function protectedLoader(){

    if(!isAuthenticated()){
        throw redirect("/login")
    }

    return null


}