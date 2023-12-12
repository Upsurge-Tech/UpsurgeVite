import { createRef, useState, useRef } from 'react'
import profileImage from '../../assets/testimonials-and-partners/profile.png'

export default function Testimonials() {
  //Assume >= 4 testimonialsx
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
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
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
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
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

  const [index, setIndex] = useState(1)

  const parentRef = useRef()
  const refs = testimonials.map(() => createRef())
  const updateIndex = () => {
    if (!parentRef.current) return

    let centerMostIndex = undefined
    let centerMostDistance = Infinity

    const parentRect = parentRef.current.getBoundingClientRect()
    const parentCenter = parentRect.x + parentRect.width / 2

    for (let i = 0; i < refs.length; i++) {
      const childRect = refs[i].current.getBoundingClientRect()
      const childCenter = childRect.x + childRect.width / 2

      const distance = Math.abs(parentCenter - childCenter)
      if (distance < centerMostDistance) {
        centerMostDistance = distance
        centerMostIndex = i
      }
    }
    // Recreate the refs
    setIndex(centerMostIndex)
  }

  return (
    <section className='bg-black py-[100px] px-[1rem]'>
      <div className='max-w-[1480px] m-auto'>
        <div className='flex items-center gap-[63px] pb-[120px]'>
          <h2 className='text-[64px] text-white'>Testimonials</h2>
          <div className='flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]'></div>
        </div>

        <div
          className=' flex overflow-scroll snap-x snap-mandatory gap-5'
          onScroll={updateIndex}
          ref={parentRef}
        >
          {testimonials.map((testimonial, i) => (
            <div
              className='flex-shrink-0 snap-center w-[300px] md:w-[470px] '
              ref={refs[i]}
              key={testimonial.id}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div>
          {testimonials
            .slice(1, testimonials.length - 1)
            .map((testimonial, i) => (
              <button
                className={i + 1 === index ? 'bg-white' : 'bg-[grey]'}
                key={testimonial.id}
              >
                o
              </button>
            ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className='bg-[#18181C] rounded-[20px] text-white p-[40px] text-[18px] flex flex-col gap-[32px] font-Poppins'>
      <p className='md:leading-[38px]'>{testimonial.content}</p>
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
