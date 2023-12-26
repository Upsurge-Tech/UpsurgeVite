import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import TestimonialCard from './TestimonialCard'
import TestimonialDot from './TestimonialDot'

export default function TestimonialSlider({ testimonials }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const scroll = (index) => emblaApi && emblaApi.scrollTo(index)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const newIndex = emblaApi.selectedScrollSnap()
      setIndex(newIndex)
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
