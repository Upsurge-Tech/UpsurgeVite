import softwareImg from '../../assets/what-can-we-do-for-you/software.svg'
import graphicsImg from '../../assets/what-can-we-do-for-you/graphics.svg'
import ecommerceImg from '../../assets/what-can-we-do-for-you/ecommerce.svg'
import webImg from '../../assets/what-can-we-do-for-you/web.svg'
import mobileImg from '../../assets/what-can-we-do-for-you/mobile.svg'

import style from './style.module.css'
import DevelopmentCard from './DevelopmentCard'
import Bridge from './Bridge'


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
    <section className="bg-black py-[162px] px-[1rem] ">
      <div className="text-center pb-[100px] md:pb-[278px]">
        <h2 className="text-[40px] text-white">WHAT CAN WE DO FOR YOU</h2>
        <p className="text-[32px] text-[#948989]">
          We develop softwares that helps millions of professionals
        </p>
      </div>

      <div className={`${style['grid']} max-w-[1240px] m-auto`}>
        <DevelopmentCard development={developments[0]} gridArea={'A'} />

        <Bridge isLeft={true} gridArea={'a'} />
        <DevelopmentCard development={developments[1]} gridArea={'B'} />

        <DevelopmentCard development={developments[2]} gridArea={'C'} />
        <Bridge isLeft={false} gridArea={'b'} />

        <Bridge isLeft={true} gridArea={'c'} />
        <DevelopmentCard development={developments[3]} gridArea={'D'} />

        <DevelopmentCard development={developments[4]} gridArea={'E'} />
        <Bridge isLeft={false} gridArea={'d'} />
      </div>
    </section>
  )
}
