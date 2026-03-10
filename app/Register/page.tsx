"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Register() {

    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")
    const router = useRouter()

    async function regiss() {
        if(!user || !pass) {
            alert("Please")
            return
        }
        
        const res = await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({
                username: user,
                password: pass
            })
        })

        if(res.ok) {
            setUser("")
            setPass("")

            alert("Register success")

            router.push("/")
        }

    }


  return (
    <div>
        <h1>Register</h1>
        <input
            value={user}
            placeholder="Username"
            onChange={(u) => {
                setUser(u.target.value)
            }}
        />
        <input
            value={pass}
            placeholder="password"
            onChange={(p) => {
                setPass(p.target.value)
            }}
        />
        <button
            onClick={regiss}
        >
            Register
        </button>
    </div>
  )
}
