"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginPage(){
    const [user,setUser]=React.useState({
        email:"",
        password:"",
    })

    const onLogin=async()=>{

    }
    return(
        <div>
            <h1 className="text-center">Login</h1>
            <label htmlFor="username">Email</label>
            <input type="text" name="" id="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="email"/>

            <label htmlFor="username">Password</label>
            <input type="text" name="" id="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="password"/>

            <button onClick={onLogin}>Login</button>
        </div>
    )
}