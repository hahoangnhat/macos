'use client'

import {
  MotionValue,
  animate,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'

const SCALE = 2.25 // max scale factor of an icon
const DISTANCE = 110 // pixels before mouse affects an icon
const NUDGE = 40 // pixels icons are moved away from mouse
const SPRING = {
  mass: 0.1,
  stiffness: 170,
  damping: 12,
}
const APPS = ['Safari', 'Mail', 'Messages', 'Photos', 'Notes', 'Calendar', 'Reminders', 'Music']

export default function Dock() {
  const mouseLeft = useMotionValue(-Infinity)
  const mouseRight = useMotionValue(-Infinity)
  const left = useTransform(mouseLeft, [0, 40], [0, -40])
  const right = useTransform(mouseRight, [0, 40], [0, -40])
  const leftSpring = useSpring(left, SPRING)
  const rightSpring = useSpring(right, SPRING)

  return (
    <motion.div
      onMouseMove={(e) => {
        const { left, right } = e.currentTarget.getBoundingClientRect()
        const offsetLeft = e.clientX - left
        const offsetRight = right - e.clientX
        mouseLeft.set(offsetLeft)
        mouseRight.set(offsetRight)
      }}
      onMouseLeave={() => {
        mouseLeft.set(-Infinity)
        mouseRight.set(-Infinity)
      }}
      className="relative hidden h-16 items-end gap-3 px-2 pb-3 sm:flex"
    >
      <motion.div
        className="absolute inset-y-0 z-10 rounded-2xl border border-gray-600 bg-gray-700"
        style={{ left: leftSpring, right: rightSpring }}
      />

      {Array.from(Array(APPS.length).keys()).map((i) => (
        <AppIcon key={i} mouseLeft={mouseLeft} />
      ))}
    </motion.div>
  )
}

function AppIcon({ mouseLeft }: { mouseLeft: MotionValue }) {
  const ref = useRef<HTMLButtonElement>(null)

  const distance = useTransform(() => {
    const bounds = ref.current
      ? { x: ref.current.offsetLeft, width: ref.current.offsetWidth }
      : { x: 0, width: 0 }

    return mouseLeft.get() - bounds.x - bounds.width / 2
  })

  const scale = useTransform(distance, [-DISTANCE, 0, DISTANCE], [1, SCALE, 1])
  const x = useTransform(() => {
    const d = distance.get()
    if (d === -Infinity) {
      return 0
    } else if (d < -DISTANCE || d > DISTANCE) {
      return Math.sign(d) * -1 * NUDGE
    } else {
      return (-d / DISTANCE) * NUDGE * scale.get()
    }
  })

  const scaleSpring = useSpring(scale, SPRING)
  const xSpring = useSpring(x, SPRING)
  const y = useMotionValue(0)

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, scale: scaleSpring, y }}
      onClick={() => {
        animate(y, [0, -40, 0], {
          repeat: 2,
          ease: [
            [0, 0, 0.2, 1],
            [0.8, 0, 1, 1],
          ],
          duration: 0.7,
        })
      }}
      className="z-20 block aspect-square w-10 origin-bottom rounded-full bg-white shadow"
    />
  )
}
