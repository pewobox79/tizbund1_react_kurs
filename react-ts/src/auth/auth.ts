export function isAuthenticated(){
    // an dieser stelle kann KEIN CUSTOM HOOK verwendet werden. 
    const user = localStorage.getItem("itzb_user")
    const userData = user ? JSON.parse(user) : {loggedIn: false}
    return userData?.loggedIn
}