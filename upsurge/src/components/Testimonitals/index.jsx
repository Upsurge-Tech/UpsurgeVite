import profileImage from '../../assets/testimonials-and-partners/profile.png'
import TestimonialSlider from './TestimonialSlider'

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
    <section className='bg-black py-[100px] ' id='testimonials'>
      <div className='max-w-[1480px] m-auto '>

        <div className='flex items-center gap-[63px] pb-[100px] px-[1rem]'>
          <h2 className='text-4xl md:text-5xl  text-white'>Testimonials</h2>

          <div className='flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]'></div>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}
