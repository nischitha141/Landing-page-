'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ScrollToSection() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const sectionId = searchParams.get('section')
    if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [searchParams])

  return null
}
