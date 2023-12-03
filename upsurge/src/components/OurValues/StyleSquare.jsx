export default function StyleSquare({ color }) {
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
