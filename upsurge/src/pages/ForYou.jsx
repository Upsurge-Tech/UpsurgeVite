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
    <section>
      <h2>WHAT CAN WE DO FOR YOU</h2>
      <p>We develop softwares that helps millions of professionals</p>
    </section>
  )
}
