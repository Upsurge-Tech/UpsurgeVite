export default function OurValues() {
  const values = [
    {
      color: '#7f7dfd',
      title: 'Innovation',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      color: '#3ad5ff',
      title: 'Growth',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      color: '#e544ed',
      title: 'Ownership',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      color: '#8b7259',
      title: 'Team Work',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      color: '#8c5b5b',
      title: 'Commitment',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      color: '#5f8158',
      title: 'Positivity',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
  ]
  return (
    <section className="bg-[black] text-white px-[2rem] py-[80px]">
      <div className="max-w-[1400px] m-auto ">
        <div className="flex items-center gap-[63px] pb-[164px]">
          <h2 className="text-[64px]">
            Our <span className="text-[#5cc0e0]">Values</span>{' '}
          </h2>
          <div className="flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]"></div>
        </div>

        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[150px]
            max-w-[1070px] m-auto 
        `}
        >
          {values.map(({ color, title, content }) => (
            <ValueCard
              key={title}
              color={color}
              title={title}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueCard({ color, title, content }) {
  return (
    <div className="flex flex-col items-center text-center gap-[13px]">
      <StyleSquare color={color} />
      <h3 className="text-[30px]">{title}</h3>
      <p className="font-[300]">{content}</p>
    </div>
  )
}

function StyleSquare({ color }) {
  return (
    <div className="w-[60px] h-[60px] relative">
      <div
        className="rounded-[10px] w-[50px] h-[50px] absolute"
        style={{ backgroundColor: color }}
      ></div>
      <div className="rounded-[10px] w-[50px] h-[50px] bg-white opacity-60 absolute bottom-0 right-0"></div>
    </div>
  )
}
