"use client"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
export default function AuthCheck() {

    const router = useRouter()

    useEffect(() => {
        const userId = localStorage.getItem("userId")

        console.log("auth : ", userId)

        if(!userId) {
            router.push("/")
        }
    }, [])

  return (
    null
  )
}
