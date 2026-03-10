"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [user,setUser] = useState("")
  return (
    <div className="login-layout">
      <input
        placeholder="Username"
      />
      <input
        placeholder="Password"
      />
      <a href="/Home">Login</a>
      <a href="/Register">Register</a>
    </div>
  );
}
