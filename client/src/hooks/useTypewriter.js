import { useState, useEffect } from 'react'

function useTypewriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      i++
      setDisplayed(text.slice(0, i))
      if (i === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return displayed
}

export default useTypewriter