"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [user,setUser] = useState("")
  const [passw,setPassw] = useState("")
  const router = useRouter()

  async function loginn() {
    if (!user || !passw) {
      alert("PLEASE")
      return
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: user,
        password: passw
      })
    })

    const data = await res.json()
    console.log(data)


    if(!res.ok) {
      alert("Username & Password incorrect")
      return
    }

    localStorage.setItem("userId", data.userId)
    
    alert("Login success")
    router.push("/Home")
  }

  return (
    <div className="login-layout">
      <input
        value={user}
        placeholder="Username"
        onChange={(u) => {
          setUser(u.target.value)
        }}
      />
      <input
        value={passw}
        placeholder="Password"
        onChange={(p) => {
          setPassw(p.target.value)
        }}
      />
      <button
        onClick={() => {
          loginn()
        }}
      >
        Login
      </button>
      <a href="/Register">Register</a>
    </div>
  );
}
