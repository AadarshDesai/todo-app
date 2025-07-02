"use server"

import client from "@db";
import { User } from "@repo/common/schema/index"

export async function Signup(Input:User){
    const user = await client.user.create({
        data:{
            username: Input.username,
            email: Input.email,
            fullName: Input.fullName,
            password: Input.password
        }
    })
}