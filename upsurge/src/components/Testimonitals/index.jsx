import { useEffect } from 'react'
import profileImage from '../../assets/testimonials-and-partners/profile.png'
import useEmblaCarousel from 'embla-carousel-react'
import { useState } from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 0,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: 'Jane Doe',
      description: 'CEO of Inkyy.com',
      profileImage: profileImage,
      rating: 4,
    },
    {
      id: 1,
      content: `They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: 'Jane Doe',
      description: 'CEO of Inkyy.com',
      profileImage: profileImage,
      rating: 3,
    },
    {
      id: 2,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: 'Jane Doe',
      description: 'CEO of Inkyy.com',
      profileImage: profileImage,
      rating: 5,
    },

    {
      id: 3,
      content: `Designers nsign in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: 'Jane Doe',
      description: 'CEO of Inkyy.com',
      profileImage: profileImage,
      rating: 5,
    },

    {
      id: 4,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: 'Jane Doe',
      description: 'CEO of Inkyy.com',
      profileImage: '',
      rating: 5,
    },

    {
      id: 5,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: 'Jane Doe',
      description: 'CEO of Inkyy.com',
      profileImage: '',
      rating: 5,
    },
  ]

  return (
    <section className='bg-black py-[100px] '>
      <div className='max-w-[1480px] m-auto '>
        <div className='flex items-center gap-[63px] pb-[120px] px-[1rem]'>
          <h2 className='text-[64px] text-white'>Testimonials</h2>
          <div className='flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]'></div>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}

function TestimonialSlider({ testimonials }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scroll = (index) => emblaApi && emblaApi.scrollTo(index)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap()
      setIndex(newIndex)

      console.log(newIndex)
    }
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <div>
      <div
        ref={emblaRef}
        className='text-white overflow-hidden cursor-pointer select-none'
      >
        <div className='flex snap-center'>
          {testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}
        </div>
      </div>

      <div className='flex justify-center gap-[15px] pt-[50px] md:pt-[121px]'>
        {testimonials.map((_, i) => (
          <TestimonialDot
            key={i}
            active={i === index}
            onClick={() => scroll(i)}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialDot({ active, onClick }) {
  return (
    <button
      className={`
      w-[16px] h-[16px] rounded-[100%]
      ${active ? 'bg-[#00ffff]' : 'bg-[#18171c]'}
    `}
      onClick={onClick}
    ></button>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div
      className={`
        w-[300px] md:w-[470px] shrink-0 mx-[15px] p-[40px]
      bg-[#18181C] text-white rounded-[20px] text-[18px] font-Poppins
        flex flex-col gap-[32px]`}
    >
      <p className='md:leading-[38px] flex-1'>{testimonial.content}</p>
      <hr className='border-[#404047]' />
      <div className='flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center'>
        <div className='flex gap-[20px]'>
          <img
            src={testimonial.profileImage}
            alt=''
            className='w-[43px] h-[57px] rounded-[52px]'
          />
          <div>
            <p className='font-[600] text-[20px]'>{testimonial.name}</p>
            <p className='text-[#9E9E9E] text-[14px]'>
              {testimonial.description}
            </p>
          </div>
        </div>
        <Stars rating={testimonial.rating} />
      </div>
    </div>
  )
}

function BrightStar() {
  return (
    <svg
      width='19'
      height='22'
      viewBox='0 0 19 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.62119 17.0062L4.11902 21.8479L6.06041 13.7342L0.719238 8.61311L7.42145 8.44027L9.62119 0.433105L11.8228 8.44027L18.525 8.61311L13.182 13.7342L15.1234 21.8479L9.62119 17.0062Z'
        fill='#167796'
      />
    </svg>
  )
}
function DarkStar() {
  return (
    <div className='opacity-30'>
      <BrightStar />
    </div>
  )
}

function Stars({ rating }) {
  return (
    <div className='flex gap-[5px]'>
      {[1, 2, 3, 4, 5].map((num) =>
        num <= rating ? <BrightStar key={num} /> : <DarkStar key={num} />
      )}
    </div>
  )
}
