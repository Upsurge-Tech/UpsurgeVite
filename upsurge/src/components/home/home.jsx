import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import upsurge_logo from '../../assets/AlliedgeLogo_PNG 2.svg'
// import globe from "../../assets/globe.mp4";
import './home.css'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
  const hero_txt = useRef(null)
  const logo = useRef(null)
  const nav_item = useRef(null)

  useEffect(() => {
    const T1 = gsap.timeline()
    T1.fromTo(
      logo.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.inOut',
      }
    )
    T1.fromTo(
      nav_item.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.inOut',
      }
    )
    T1.fromTo(
      hero_txt.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power2.inOut',
      }
    )
    ScrollTrigger.create({
      trigger: hero_txt.current,
      start: 'top 80%',
      animation: T1,
    })
  }, [])

  const links = [
    { name: 'Home', to: '#home' },
    { name: 'Services', to: '#services' },
    { name: 'Career', to: '#' },
    { name: 'Testimonials', to: '#' },
    { name: 'Team', to: '#' },
    { name: 'Contact Us', to: '#' },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  const handleActive = (name) => {
    setActive(name)
    console.log(name)
  }

  return (
    <section
      id="home"
      className="min-w-screen min-h-screen relative overflow-hidden bg-[#050D1F]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full bg-[url('assets/heroMain.svg')] bg-cover bg-center animate-spin-slow"></div>
      </div>
      <div className="absolute text-white font-inter">
        <nav className="w-full z-20 top-0 left-0 pt-5 text-secondary-text ">
          <div className="max-w-screen-xl flex flex-wrap md:items-center md:justify-between justify-around mx-auto p-5 ml-4 md:ml-28 mr-8 md:mr-16">
            <a ref={logo} href="#home" className="flex items-center">
              <img
                src={upsurge_logo}
                width={51}
                height={61}
                alt="Upsurge logo"
              />
            </a>

            <div className="flex md:hidden">
              <button
                type="button"
                onClick={toggleNavbar}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-md border border-primary rounded-lg bg-black focus:outline-none focus:ring-1 focus:ring-[#0c9793]"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen ? 'block' : 'hidden'
              }`}
              id="navbar-sticky"
            >
              <ul
                ref={nav_item}
                className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 lg:space-x-16 md:mt-0 md:border-0 h-full"
              >
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      onClick={() => handleActive(link.name)}
                      href={`${link.to}`}
                      className={`${
                        active === link.name
                          ? 'text-[#0c9793] font-semibold'
                          : 'py-2'
                      } relative block text-md pl-3 pr-4 transition duration-75 md:hover:bg-transparent md:hover:text-[#0c9793] md:p-0`}
                      aria-current="page"
                    >
                      {link.name}
                      {active === link.name && (
                        <span className=" absolute md:top-10 lg:top-12 left-0 w-full h-0 md:h-1 font-bold transition duration-150"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>

              <a href="#contact">
                <button
                  type="button"
                  className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center border border-primary ml-4 md:ml-8 bg-gradient-to-r from-[#0c9793] to-[#296571] text-white"
                >
                  Blog
                </button>
              </a>
            </div>
          </div>
        </nav>

        <div
          ref={hero_txt}
          className="flex flex-col pt-28 items-center justify-center h-96 pl-6 pr-6 md:pl-48 md:pr-48 space-y-10 "
        >
          <div className="text-[#C6C6C6] font-inter text-4xl md:text-8xl text-center ">
            Reach The
            <br /> Uncharted Horizon
          </div>
          <div className="text-white text-center md:m-24 ">
            Customer satisfaction is at the heart of everything we do. We are
            committed to providing exceptional IT services that exceed your
            expectations and help you achieve your business goals.
          </div>
          <div>
            <a href="#contact">
              <button
                type="button"
                className="focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-md px-8 py-3 text-center border border-primary ml-4 md:ml-8 bg-gradient-to-r from-[#1FC2E5B2] to-[#58D7FFAD] text-white"
              >
                Let&#39;s connect
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// <div className="absolute inset-0 z-0 overflow-hidden">
//         <video className="w-full h-full object-fit  " autoPlay loop muted>
//           <source src={globe} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

export default Home
