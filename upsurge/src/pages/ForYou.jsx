import softwareImg from '../assets/for-you/software.svg'
import graphicsImg from '../assets/for-you/graphics.svg'
import ecommerceImg from '../assets/for-you/ecommerce.svg'
import webImg from '../assets/for-you/web.svg'
import mobileImg from '../assets/for-you/mobile.svg'
import style from './for-you.module.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { useState, useEffect } from 'react'

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

  const [isFull, setIsFull] = useState(true)
  return (
    <section className="bg-black py-[162px] px-[1rem] ">
      <div className="text-center pb-[100px] md:pb-[278px]">
        <h2 className="text-[40px] text-white">WHAT CAN WE DO FOR YOU</h2>
        <p className="text-[32px] text-[#948989]">
          We develop softwares that helps millions of professionals
        </p>
      </div>
      <button className="bg-white" onClick={() => setIsFull(!isFull)}>
        HERE
      </button>

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

function DevelopmentCard({ development, gridArea }) {
  const { image, title, content } = development
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.5 })
  const variants = {
    init: { opacity: 0, scale: 0 },
    final: { opacity: 1, scale: 1 },
  }
  useEffect(() => {
    if (inView) controls.start('final')
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="init"
      animate={controls}
      className={`
        bg-gradient-to-br from-[#9f9f9f] to-[#7e7e7e]  via-[#232323] 
        p-[2px] rounded-[10px] flex flex-col
        `}
      style={{ gridArea }}
    >
      <div
        className={`
            flex-1  p-[35px] rounded-[9px] 
            flex flex-col justify-center gap-[30px]
            bg-gradient-to-br from-[#404040] to-black
    `}
      >
        <img src={image} className="w-[100px] h-[100px]" />
        <h3 className="text-[40px] text-white">{title}</h3>
        <p className="font-[600] text-[22px] text-[#948989]">{content}</p>
      </div>
    </motion.div>
  )
}

function Bridge({ isLeft, gridArea }) {
  const [isFull, setIsFull] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (!inView) return
    setIsFull(true)
    console.log('in view')
  }, [inView])

  const strokeDasharray = '9000px'
  const transition = 'stroke-dashoffset 10s'
  const noLength = {
    strokeDasharray,
    transition,
    strokeDashoffset: strokeDasharray,
  }

  const fullLength = {
    strokeDasharray,
    transition,
    strokeDashoffset: '0px',
  }

  const bottomLeft = (
    <svg
      className="absolute left-[25%] bottom-[50%] "
      width="602"
      height="602"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99998 0V580C1.99998 591.046 10.9543 600 20 600H602"
        stroke="url(#paint0_linear_12_140)"
        strokeWidth="3"
        style={isFull ? fullLength : noLength}
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_140"
          x1="3"
          y1="0"
          x2="302"
          y2="600"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#092031" />
          <stop offset="0.691574" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )

  const bottomRight = (
    <svg
      className="absolute right-[25%] bottom-[50%]"
      width="602"
      height="602"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M600 0V580C600 591.046 591.046 600 580 600H0"
        stroke="url(#paint0_linear_12_142)"
        strokeWidth="3"
        style={isFull ? fullLength : noLength}
      />
      <defs>
        <linearGradient
          id="paint0_linear_12_142"
          x1="500"
          y1="-110"
          x2="100"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#092031" />
          <stop offset="0.691574" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )

  return (
    <div
      ref={ref}
      className={`relative min-h-[300px] overflow-hidden hidden sm:block`}
      style={{ gridArea }}
    >
      {isLeft ? bottomLeft : bottomRight}
    </div>
  )
}
