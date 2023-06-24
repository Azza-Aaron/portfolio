import {processEnv} from "@next/env";
import bcrypt from "bcrypt";
import {InferType} from "yup";
import {userSchema} from "@/utility/yupSchema";

const saltRounds = 10
// @ts-ignore
const myPlaintextPassword:string = processEnv('PASSWORD')||'password'
const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds)
//store in database
const storeHash = async () => {
    const hash = await bcrypt.hash(myPlaintextPassword, saltRounds)
    // Store hash in your password DB.
}


export const login = async (username:string, password:string) => {
    if(username !== 'admin') return false
    try{
        await userSchema.validate({username, password}, {abortEarly: false})
        return await bcrypt.compare(password, hash)
    } catch (e) {
        return false
    }
}
export const auth = async() => {
    return true
}