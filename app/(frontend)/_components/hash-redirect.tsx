"use client"

import { useEffect } from "react"

type HashRedirectProps = {
  hash: string
}

export function HashRedirect({ hash }: HashRedirectProps) {
  useEffect(() => {
    window.location.replace(`/#${hash}`)
  }, [hash])

  return (
    <p className="p-8 text-center text-sm text-muted-foreground">
      Taking you there…
    </p>
  )
}
