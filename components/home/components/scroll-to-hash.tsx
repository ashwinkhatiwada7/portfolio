"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const hash = window.location.hash.replace("#", "")
    if (!hash) return

    const frame = window.requestAnimationFrame(() => {
      const el = document.getElementById(hash)
      el?.scrollIntoView({ behavior: "smooth", block: "start" })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [pathname])

  return null
}
