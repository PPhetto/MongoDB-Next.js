"use client"
import React, { useState } from "react"
import { Propdelete } from "@/types/Post"
export default function deletepost({id} : Propdelete) {
    async function deletePost() {
        const res = await fetch("/api/posts", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id
            })
        })

        // location.reload()
    }
  return (
    <div>
        <button
            onClick={deletePost}
        >
            Delete
        </button>
    </div>
  )
}
