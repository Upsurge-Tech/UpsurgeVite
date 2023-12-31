import ValueCard from './ValueCard'

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
    <section className="bg-[black] text-white px-[2rem] py-[100px] overflow-hidden">
      <div className="max-w-[1000px] m-auto ">
        <div className="flex items-center gap-[63px] pb-[100px]">
          <h2 className="text-4xl md:text-5xl ">
            Our <span className="text-[#5cc0e0]">Values</span>{' '}
          </h2>
          <div className="flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-[3px]"></div>
        </div>

        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[95px]
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
