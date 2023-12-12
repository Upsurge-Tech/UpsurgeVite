import { createRef, useState, useRef } from 'react'

export default function Testimonials() {
  //Assume >= 4 testimonialsx
  const [contents, setContents] = useState([
    '-',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    '--',
  ])
  const [index, setIndex] = useState(1)

  const parentRef = useRef()
  const refs = contents.map(() => createRef())
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
    <div>
      <div
        className='bg-[red] flex overflow-scroll snap-x snap-mandatory gap-5'
        onScroll={updateIndex}
        ref={parentRef}
      >
        {contents.map((content, i) => (
          <div
            className='flex-shrink-0 snap-center w-[500px] h-[200px] bg-[green]'
            ref={refs[i]}
            key={content}
          >
            <TestimonialCard content={content} />
          </div>
        ))}
      </div>

      <div>
        {contents.slice(1, contents.length - 1).map((content, i) => (
          <button className={i + 1 === index ? 'bg-black' : ''} key={content}>
            o
          </button>
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ content }) {
  return (
    //add a scroll end event listener to update the index
    <p>{content}</p>
  )
}
