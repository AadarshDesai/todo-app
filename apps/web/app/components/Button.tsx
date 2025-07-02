"use client"

import { Signup } from "../actions/auth/signup"
import { useRouter } from "next/navigation"

export function Button(
    {fullName, username, email, password} : Credentials
){
    const router = useRouter();
    return <div>
        <button onClick={()=> {
            Signup({fullName, username, email, password});
            router.push("/");
        }} type="button">Sign up</button>
    </div>
}

export interface Credentials {
    fullName: string,
    username: string,
    email: string,
    password: string
}