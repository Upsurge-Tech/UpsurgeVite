import facebookImg from '../../assets/footer/facebook.svg'
import instagramImg from '../../assets/footer/instagram.svg'
import tweeterImg from '../../assets/footer/tweeter.svg'
import linkedinImg from '../../assets/footer/linkedin.svg'
import githubImg from '../../assets/footer/github.svg'
import pinterestImg from '../../assets/footer/pinterest.svg'
import telegramImg from '../../assets/footer/telegram.svg'
import upsurgeLogo from '../../assets/AlliedgeLogo_PNG 2.svg'
import SocialMedia from './SocialMedia'

export default function Footer() {
  const socialMedia = [
    { name: 'facebook', image: facebookImg, link: '' },
    { name: 'instagram', image: instagramImg, link: '' },
    { name: 'tweeter', image: tweeterImg, link: '' },
    { name: 'linkedin', image: linkedinImg, link: '' },
    { name: 'github', image: githubImg, link: '' },
    { name: 'pinterest', image: pinterestImg, link: '' },
    { name: 'telegram', image: telegramImg, link: '' },
  ]

  return (
    <footer
      className={`
      bg-black text-white px-[2rem] py-[120px]
      flex flex-col gap-[150px]
      `}
    >
      <div className='flex gap-[20px] flex-wrap justify-center'>
        {socialMedia.map((item) => (
          <SocialMedia key={item.name} {...item} />
        ))}
      </div>
      <div className='flex flex-col md:flex-row lg:justify-around  gap-[4rem] justify-between text-[20px]'>
        <img src={upsurgeLogo} alt='' className='max-w-[250px]' />
        <nav className='flex flex-col gap-[15px]'>
          <h3 className='font-[600] text-[32px]'>Company</h3>
          <a href=''>Home</a>
          <a href=''>Services</a>
          <a href=''>About Us</a>
          <a href=''>Contact Us</a>
        </nav>
        <div className='flex flex-col gap-[15px]'>
          <h3 className='font-[600] text-[32px]'>Services</h3>
          <p>Web Development</p>
          <p>Mobile Development</p>
          <p>Software Development</p>
          <p>Ecommerce Development</p>
          <p>Graphics Design</p>
        </div>

        <div className='flex flex-col gap-[15px]'>
          <h3 className='font-[600] text-[32px]'>Contact Us</h3>
          <p>
            5Kilo Arada, <br />
            Addis Ababa
          </p>
          <p>+251930365902</p>
          <p>upsurge@upsurge.com</p>
        </div>
      </div>
      <p className='text-[20px] text-center'>
        © Copyright 2023, Upsurge Tech. All Rights Reserved
      </p>
    </footer>
  )
}
