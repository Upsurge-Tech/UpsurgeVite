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
  const repitions = 2
  const repeatedPartners = []
  for (let i = 0; i < repitions; i++) {
    repeatedPartners.push(...partners)
  }

  const imageWidth = 270
  const imageGap = 100
  return (
    <section className='bg-black py-[100px] '>
      <div className='flex items-center gap-[63px] pb-[120px] max-w-[1480px] m-auto'>
        <h2 className='text-[64px] text-white'>
          Our <span className='text-[#5cc0e0]'>Partners</span>
        </h2>
        <div className='flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]'></div>
      </div>

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className={`flex justify-around opacity-50`}
        style={{
          width: repeatedPartners.length * (imageWidth + imageGap) + 'px',
        }}
      >
        {repeatedPartners.map(({ name, image }, i) => (
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
