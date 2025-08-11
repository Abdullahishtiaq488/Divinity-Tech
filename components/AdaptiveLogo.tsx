"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

interface AdaptiveLogoProps {
  className?: string
  width?: number
  height?: number
}

export default function AdaptiveLogo({ className = "", width = 180, height = 105 }: AdaptiveLogoProps) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check initial theme
    const checkTheme = () => {
      if (typeof window !== "undefined") {
        setIsDark(document.documentElement.classList.contains("dark"))
      }
    }

    checkTheme()

    // Watch for theme changes using MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "class") {
          checkTheme()
        }
      })
    })

    if (typeof window !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }

    return () => observer.disconnect()
  }, [])

  if (!mounted) {
    // Return a placeholder during SSR to avoid hydration mismatch
    return <div className={`bg-gray-200 animate-pulse rounded ${className}`} style={{ width, height }} />
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={isDark ? "/devnity-logo-dark.png" : "/devnity-logo.png"}
        alt="Devnity Tech - Innovative Technology Solutions"
        width={width}
        height={height}
        className="object-contain transition-opacity duration-300"
        priority
      />
    </div>
  )
}
