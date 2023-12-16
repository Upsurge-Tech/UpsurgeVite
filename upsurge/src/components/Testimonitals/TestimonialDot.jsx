export default function TestimonialDot({ active, onClick }) {
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
