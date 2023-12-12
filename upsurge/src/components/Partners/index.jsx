import partner1Img from '../../assets/testimonials-and-partners/partner-1.svg'
import partner2Img from '../../assets/testimonials-and-partners/partner-2.svg'
import partner3Img from '../../assets/testimonials-and-partners/partner-3.svg'
import partner4Img from '../../assets/testimonials-and-partners/partner-4.svg'
import partner5Img from '../../assets/testimonials-and-partners/partner-5.svg'
import { motion } from 'framer-motion'
import { useState } from 'react'
import style from './style.module.css'

export default function Partners() {
  const partners = [
    {
      name: 'partner1',
      image: partner1Img,
    },
    {
      name: 'partner2',
      image: partner2Img,
    },
    {
      name: 'partner3',
      image: partner3Img,
    },
    {
      name: 'partner4',
      image: partner4Img,
    },
    {
      name: 'partner5',
      image: partner5Img,
    },
  ]

  const imageWidth = 270
  const imageGap = 100
  return (
    <section className='bg-black overflow-hidden'>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className={`flex justify-around`}
        style={{
          width: 2 * partners.length * (imageWidth + imageGap) + 'px',
        }}
      >
        {[...partners, ...partners].map(({ name, image }, i) => (
          <img
            src={image}
            alt={name}
            className=' inline-block'
            key={i}
            style={{ width: imageWidth + 'px' }}
          />
        ))}
      </motion.div>
    </section>
  )
}
