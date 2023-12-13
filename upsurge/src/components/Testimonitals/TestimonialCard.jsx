import Stars from "./Stars"

export default function TestimonialCard({ testimonial }) {
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
