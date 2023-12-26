import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function Bridge({ isLeft, gridArea }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ rootMargin: '-20%'})

  useEffect(() => {
    if (inView) controls.start('fullLength')
  }, [inView, controls])

  const variants = {
    noLength: { pathLength: 0 }, //roughly the size of svg
    fullLength: { pathLength: 1, transition: { duration: 1 } },
  }

  const bottomLeft = (
    <svg
      className="absolute left-[25%] bottom-[50%] "
      width="602"
      height="602"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variants}
        initial="noLength"
        animate={controls}
        d="M1.99998 0V580C1.99998 591.046 10.9543 600 20 600H602"
        stroke="url(#paint0_linear_12_140)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_140"
          x1="3"
          y1="0"
          x2="302"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#092031" />
          <stop offset="0.691574" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )

  const bottomRight = (
    <svg
      className="absolute right-[25%] bottom-[50%]"
      width="602"
      height="602"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variants}
        initial="noLength"
        animate={controls}
        d="M600 0V580C600 591.046 591.046 600 580 600H0"
        stroke="url(#paint0_linear_12_142)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_142"
          x1="500"
          y1="-110"
          x2="100"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#092031" />
          <stop offset="0.691574" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <div
      ref={ref}
      className={`
        relative  overflow-hidden hidden
        sm:block min-h-[150px]
      `}
      style={{ gridArea }}
    >
      {isLeft ? bottomLeft : bottomRight}
    </div>
  )
}
