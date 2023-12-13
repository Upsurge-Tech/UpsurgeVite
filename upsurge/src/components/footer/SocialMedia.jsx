export default function SocialMedia({ image, link, name }) {
  return (
    <a href={link}>
      <button
        className={`
          w-[100px] h-[100px] bg-[#222228] rounded-[30px]
          flex items-center justify-center
        `}
      >
        <img src={image} alt={name} />
      </button>
    </a>
  )
}
