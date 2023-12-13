import facebookImg from '../../assets/footer/facebook.svg'
import instagramImg from '../../assets/footer/instagram.svg'
import tweeterImg from '../../assets/footer/tweeter.svg'
import linkedinImg from '../../assets/footer/linkedin.svg'
import githubImg from '../../assets/footer/github.svg'
import pinterestImg from '../../assets/footer/pinterest.svg'
import telegramImg from '../../assets/footer/telegram.svg'
import upsurgeLogo from '../../assets/AlliedgeLogo_PNG 2.svg'

export default function Footer() {
  return (
    <footer>
      <nav>
        <div>
          <h3>Company</h3>
          <a href=''>Home</a>
          <a href=''>Services</a>
          <a href=''>About Us</a>
          <a href=''>Contact Us</a>
        </div>
        <div>
          <h3>Services</h3>
          <p>Web Development</p>
          <p>Mobile Development</p>
          <p>Software Development</p>
          <p>Ecommerce Development</p>
          <p>Graphics Design</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            5Kilo Arada, <br />
            Addis Ababa
          </p>
          <p>+251930365902</p>
          <p>upsurge@upsurge.com</p>
        </div>
      </nav>
    </footer>
  )
}
