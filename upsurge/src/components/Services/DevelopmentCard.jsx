import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function DevelopmentCard({ development, gridArea }) {
  const { image, title, content } = development
  const controls = useAnimation()
  const [ref, inView] = useInView({ rootMargin: '-20%' })
  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
    },
    boop: {
      scale: 1.05,
    },
  }

  useEffect(() => {
    controls.set('hidden')
  }, [controls])

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='visible'
      animate={controls}
      whileHover='boop'
      className={`
        bg-gradient-to-br from-[#9f9f9f] to-[#7e7e7e]  via-[#232323] 
        p-[2px] rounded-[10px] flex flex-col z-10
        `}
      style={{ gridArea }}
    >
      <div
        className={`
            flex-1  p-[25px] rounded-[9px] 
            flex flex-col justify-center gap-[10px]
            bg-gradient-to-br from-[#404040] to-black
    `}
      >
        <img src={image} className='w-[80px] h-[80px]' />
        <h3 className='text-[1.5rem] leading-[40px] text-white'>{title}</h3>
        <p className='font-[600] text-[#948989]'>{content}</p>
      </div>
    </motion.div>
  )
}
