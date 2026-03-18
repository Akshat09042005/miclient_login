import { useEffect, useRef, useState } from 'react'

function isTouchDevice() {
  if (typeof window === 'undefined') return true
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia?.('(pointer: coarse)')?.matches
  )
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  const target = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    if (isTouchDevice()) return

    setEnabled(true)
    const prevCursor = document.body.style.cursor
    document.body.style.cursor = 'none'

    function onMove(e) {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    function tick() {
      const dx = target.current.x - ring.current.x
      const dy = target.current.y - ring.current.y

   
      ring.current.x += dx * 0.12
      ring.current.y += dy * 0.12

      const dotEl = dotRef.current
      const ringEl = ringRef.current

      if (dotEl) {
        dotEl.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`
      }
      if (ringEl) {
        ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(tick)
    }

    rafId.current = requestAnimationFrame(tick)

    return () => {
      setEnabled(false)
      window.removeEventListener('mousemove', onMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
      document.body.style.cursor = prevCursor
    }
  }, [])

  if (!enabled) return null

  return (
    <>

      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-89 size-10 rounded-full border-[3px] border-neutral-700"
      />


      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-99 size-4 rounded-full bg-black shadow-[0_0_0_6px_rgba(0,0,0,0.10)]"
      />
    </>
  )
}

