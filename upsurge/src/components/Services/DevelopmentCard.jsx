import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function DevelopmentCard({ development, gridArea }) {
  const { image, title, content } = development
  const controls = useAnimation()
  const [ref, inView] = useInView({ rootMargin: '-20%'})
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'tween' },
    },
  }
  useEffect(() => {
    if (inView) controls.start('visible')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`
        bg-gradient-to-br from-[#9f9f9f] to-[#7e7e7e]  via-[#232323] 
        p-[2px] rounded-[10px] flex flex-col
        `}
      style={{ gridArea }}
    >
      <div
        className={`
            flex-1  p-[30px] rounded-[9px] 
            flex flex-col justify-center gap-[20px]
            bg-gradient-to-br from-[#404040] to-black
    `}
      >
        <img src={image} className="w-[100px] h-[100px]" />
        <h3 className="text-[40px] leading-[40px] text-white">{title}</h3>
        <p className="font-[600] text-[#948989]">{content}</p>
      </div>
    </motion.div>
  )
}
