import softwareImg from '../assets/for-you/software.svg'
import graphicsImg from '../assets/for-you/graphics.svg'
import ecommerceImg from '../assets/for-you/ecommerce.svg'
import webImg from '../assets/for-you/web.svg'
import mobileImg from '../assets/for-you/mobile.svg'

export default function WhatCanWeDoForYou() {
  const developments = [
    {
      image: webImg,
      title: 'Web Development',
      content: `We specialize in providing top-notch web
development services to help businesses 
establish a strong online presence.`,
    },
    {
      image: mobileImg,
      title: 'Mobile Development',
      content: `We specialize in providing top-notch web
development services to help businesses 
establish a strong online presence.`,
    },
    {
      image: softwareImg,
      title: 'Software Development',
      content: `We specialize in providing top-notch web
development services to help businesses 
establish a strong online presence.`,
    },
    {
      image: ecommerceImg,
      title: 'E-Commerce Dev’t',
      content: `We specialize in providing top-notch web
development services to help businesses 
establish a strong online presence.`,
    },
    {
      image: graphicsImg,
      title: 'Graphics Design',
      content: `We specialize in providing top-notch web
development services to help businesses 
establish a strong online presence.`,
    },
  ]

  return (
    <section className="bg-black">
      <h2>WHAT CAN WE DO FOR YOU</h2>
      <p>We develop softwares that helps millions of professionals</p>
      <DevelopmentCard development={developments[0]} />
    </section>
  )
}

function DevelopmentCard({ development }) {
  const { image, title, content } = development
  return (
    <div
      className={`
        bg-gradient-to-br from-[#cfcfcf] to-[#cfcfcf]  via-[#232323] 
        p-[2px] w-min rounded-[10px]
        `}
    >
      <div
        className={`
            w-[470px] h-[470px] p-[35px] rounded-[9px] 
            flex flex-col justify-center gap-[30px]
            bg-gradient-to-br from-[#404040] to-black
    `}
      >
        <img src={image} className="w-[100px] h-[100px]" />
        <h3 className="text-[40px] text-white">{title}</h3>
        <p className="font-[600] text-[22px] text-[#948989]">{content}</p>
      </div>
    </div>
  )
}
