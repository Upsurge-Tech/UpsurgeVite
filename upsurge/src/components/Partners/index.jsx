import partner1Img from '../../assets/testimonials-and-partners/partner-1.svg'
import partner2Img from '../../assets/testimonials-and-partners/partner-2.svg'
import partner3Img from '../../assets/testimonials-and-partners/partner-3.svg'
import partner4Img from '../../assets/testimonials-and-partners/partner-4.svg'
import partner5Img from '../../assets/testimonials-and-partners/partner-5.svg'
import { motion } from 'framer-motion'

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

  const repeatedPartners = [...partners, ...partners, ...partners]

  return (
    <section className='bg-black py-[100px]'>
      <div className='flex items-center gap-[63px] pb-[120px] max-w-[1480px] m-auto px-[1rem]'>
        <h2 className='text-[64px] text-white'>
          Our <span className='text-[#5cc0e0]'>Partners</span>
        </h2>
        <div className='flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]'></div>
      </div>

      {/* flex to make it actaully translateX by -50%. Translates much less othewise, I don't understand why.  */}
      <div className='overflow-hidden flex'>
        <motion.div
          className='flex opacity-60'
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          {repeatedPartners.map(({ name, image }, i) => (
            <img
              src={image}
              alt={name}
              className='mx-[50px] w-[180px] lg:w-[320px]'
              /* maxWidth:100% (default in tailwind) breaks translateX(-50%)
                by making it translate much less. I don't understand why! */
              style={{ maxWidth: 'none' }}
              key={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
