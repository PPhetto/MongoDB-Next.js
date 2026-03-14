"use client"
import { useRouter } from "next/navigation"
export default function Logout() {
    const router = useRouter()
    async function logoutt() {
        localStorage.removeItem("userId")
        router.push("/")
    }
    async function Rankpage() {
        router.push("/Rank")
    }
  return (
    <div className="logout-layout">
        <button
            onClick={Rankpage}
        >
            Rank
        </button>
        <button
            onClick={logoutt}
        >
            Logout
        </button>
    </div>
  )
}
