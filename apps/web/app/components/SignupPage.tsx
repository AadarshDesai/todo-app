"use client"
import {ChangeEventHandler, useState} from "react";
import { Button } from "./Button";

export function SignupPage(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullname] = useState("");
    
    return <div>
        <div>
            Sign up
        </div>
        <div>
            <LabelledInput onChange={(e) => {
                setFullname(e.target.value)
            }} label={"Full Name"} placeholder="Aadarsh Desai"/>
            <LabelledInput onChange={(e) => {
                setUsername(e.target.value)
            }} label={"Username"} placeholder="aadidesai"/>
            <LabelledInput onChange={(e) => {
                setEmail(e.target.value)
            }} label={"Email"} placeholder="aadidesai@gmail.com"/>
            <LabelledInput onChange={(e) => {
                setPassword(e.target.value)
            }} type={"password"} label={"Password"} placeholder="*********"/>
            <Button fullName={fullName} username={username} email={email} password={password}></Button>
        </div>

    </div>
}

function LabelledInput({label, type, placeholder, onChange}: LabelledInputType){
        return <div>
            <label>{label}</label>
            <input onChange={onChange} type={type || "text"} placeholder={placeholder} required />
        </div>
}

interface LabelledInputType {
    label: string,
    placeholder: string,
    type?: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}