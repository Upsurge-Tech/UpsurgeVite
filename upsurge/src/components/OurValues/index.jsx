export default function OurValues() {
  const values = [
    {
      image: '',
      title: 'Innovation',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      image: '',
      title: 'Growth',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      image: '',
      title: 'Ownership',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      image: '',
      title: 'Team Work',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      image: '',
      title: 'Commitment',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
    {
      image: '',
      title: 'Positivity',
      content: `Building an enterprise doesn't need to be a nightmare or cost 
            you thousands. Felix is purpose built.`,
    },
  ]
  return (
    <section className="bg-[black]">
      <h2>Our Values</h2>
      <div>
        <StyleSquare color={'#807dfd'} />
      </div>
      {/* <StyleSquare color={'#39d4ff'} />
      <StyleSquare color={'#e644ee'} />

      <StyleSquare color={'#8c7359'} />
      <StyleSquare color={'#8c5a5a'} />
      <StyleSquare color={'#608359'} /> */}
    </section>
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
