import { useEffect, useState } from "react"

export const useObserver = (id: string, delay = 0) => {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => {
          setAnimated(true)
        }, delay)

        obs.disconnect()
      }
    })

    const el = document.getElementById(id)

    if (el) obs.observe(el)

    return () => obs.disconnect()
  }, [id, delay])

  return animated
}