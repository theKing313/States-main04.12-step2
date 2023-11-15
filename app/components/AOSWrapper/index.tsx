'use client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

import { ReactNode, useEffect } from 'react'

export default function AOSWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      useClassNames: true,
      //   initClassName: 'animated__animate',
      animatedClassName: 'animated',
    })
  }, [])

  return children
}
