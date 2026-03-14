"use client"
import { Rank } from "@/types/Rank"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Rankpage() {

    const [user,setUser] = useState<Rank[]>([])
    const route = useRouter()

    async function Bhome() {
        route.push("/Home")
    }

    useEffect(() => {

        async function callapi(){

        const res = await fetch("/api/rank")
        const data = await res.json()

        setUser(data)
        }

        callapi()
    },[])

  return (
    <div className="layout-rankpage">
        <button className="button-back"
            onClick={() => {
                Bhome()
            }}
        >
            Back
        </button>
        <div className="box-list">
            {user.map((user, index) => (
                <ul key={index}>
                    <li>
                        <p>{index + 1}</p>
                        <p>{user.username}</p>
                        <p>{user.postCount}</p>
                    </li>
                </ul>
            ))}
        </div>
    </div>
  )
}
