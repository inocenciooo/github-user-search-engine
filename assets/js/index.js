import { getUser } from "./services/user.js";
import { user } from "./objects/user.js"


console.log(await getUser("inocenciooo"))
console.log(user)

async function setUserInfo(inputValue) {
    const getUserResponse = await getUser(inputValue)
    
}