'use client'

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrisptChat = () => {
    useEffect(() => {
        Crisp.configure("34ea79a3-b39e-4dc5-a259-cff0cba02d1f")
    }, [])

    return null
}
