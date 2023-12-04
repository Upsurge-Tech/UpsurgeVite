import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import StyleSquare from './StyleSquare'

export default function ValueCard({ color, title, content }) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const variants = {
    down: { y: '200px' },
    placed: { y: 0, transition: { type: 'tween', duration: 1 } },
  }

  useEffect(() => {
    if (inView) controls.start('placed')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="down"
      animate={controls}
      className="flex flex-col items-center text-center gap-[13px]"
    >
      <StyleSquare color={color} />
      <h3 className="text-[30px]">{title}</h3>
      <p className="font-[300]">{content}</p>
    </motion.div>
  )
}
