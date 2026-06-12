import { createContext } from "react";
import type { UserLoginProps } from "../types/types";

export const UserContext = createContext<{user: UserLoginProps; setUser: React.Dispatch<React.SetStateAction<UserLoginProps>>}>({user:{username: "", email:"", loggedIn: false}, setUser: ()=>{}})