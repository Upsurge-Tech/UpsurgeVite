export default function Stars({ rating }) {
  return (
    <div className='flex gap-[5px]'>
      {[1, 2, 3, 4, 5].map((num) =>
        num <= rating ? <BrightStar key={num} /> : <DarkStar key={num} />
      )}
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
