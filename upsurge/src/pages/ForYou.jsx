import softwareImg from '../assets/for-you/software.svg'
import graphicsImg from '../assets/for-you/graphics.svg'
import ecommerceImg from '../assets/for-you/ecommerce.svg'
import webImg from '../assets/for-you/web.svg'
import mobileImg from '../assets/for-you/mobile.svg'
import './for-you.css'

import { useState } from 'react'

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

  const [isFull, setIsFull] = useState(false)
  return (
    <section className="bg-black">
      <h2>WHAT CAN WE DO FOR YOU</h2>
      <p>We develop softwares that helps millions of professionals</p>
      <DevelopmentCard development={developments[0]} />
      <button className="bg-white" onClick={() => setIsFull(!isFull)}>
        HERE
      </button>
      <Bridge1 isFull={isFull} />
      <Bridge2 isFull={isFull} />
      <Bridge3 isFull={isFull} />
      <Bridge4 isFull={isFull} />
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

const strokeDasharray = '1000px'
const noLength = {
  strokeDasharray,
  transition: 'stroke-dashoffset 1s',
  strokeDashoffset: '1000px',
}

const fullLength = {
  strokeDasharray,
  transition: 'stroke-dashoffset 1s',
  strokeDashoffset: '0px',
}

function Bridge1({ isFull }) {
  return (
    <svg
    //   className="w-125px h-[50px]"
      width="501"
      height="155"
      viewBox="0 0 501 155"
      fill="none"
    //   preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 2H479C490.046 2 499 10.9543 499 22V155"
        stroke="url(#paint0_linear_10_2076)"
        strokeWidth="3"
        style={isFull ? fullLength : noLength}
      />
      <defs>
        <linearGradient
          id="paint0_linear_10_2076"
          x1="249.5"
          y1="2"
          x2="249.5"
          y2="155"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#052E4B" />
          <stop offset="0.494792" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Bridge2({ isFull }) {
  return (
    <svg
      width="479"
      height="160"
      viewBox="0 0 479 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M477 0V138C477 149.046 468.046 158 457 158H0"
        stroke="url(#paint0_linear_10_2075)"
        strokeWidth="3"
        style={isFull ? fullLength : noLength}
      />
      <defs>
        <linearGradient
          id="paint0_linear_10_2075"
          x1="416.951"
          y1="158"
          x2="238.5"
          y2="158"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.494792" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Bridge3({ isFull }) {
  return (
    <svg
      width="466"
      height="170"
      viewBox="0 0 466 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00001 0V148C2.00001 159.046 10.9543 168 22 168H466"
        stroke="url(#paint0_linear_66_109)"
        strokeWidth="3"
        style={isFull ? fullLength : noLength}
      />
      <defs>
        <linearGradient
          id="paint0_linear_66_109"
          x1="234"
          y1="0"
          x2="234"
          y2="168"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#092031" />
          <stop offset="0.691574" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Bridge4({ isFull }) {
  return (
    <svg
      width="500"
      height="173"
      viewBox="0 0 500 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M498 0V151C498 162.046 489.046 171 478 171H0"
        stroke="url(#paint0_linear_10_2073)"
        strokeWidth="3"
        style={isFull ? fullLength : noLength}
      />
      <defs>
        <linearGradient
          id="paint0_linear_10_2073"
          x1="249"
          y1="0"
          x2="249"
          y2="171"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#092031" />
          <stop offset="0.691574" stopColor="#69DBFF" />
          <stop offset="1" stopColor="#01FF39" />
        </linearGradient>
      </defs>
    </svg>
  )
}
