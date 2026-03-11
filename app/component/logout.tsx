"use client"
import { useRouter } from "next/navigation"
export default function Logout() {
    const router = useRouter()
    async function logoutt() {
        localStorage.removeItem("userId")
        router.push("/")
    }
  return (
    <div className="logout-layout">
        <button
            onClick={logoutt}
        >
            Logout
        </button>
    </div>
  )
}
