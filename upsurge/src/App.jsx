import Home from './components/home/home.jsx'
import Services from './components/Services'
import OurValues from './components/OurValues'
import Whyus from './components/whyus/whyus.jsx'
import Testimonials from './components/Testimonitals/index.jsx'
import Partners from './components/Partners/index.jsx'
import Career from "./components/career/career.jsx";
import Question from "./components/FAQ/faq.jsx";

function App() {
  return (
    <main>
      <Home />
      <Services />
      <OurValues />
      <Whyus />
      <Career />
      <Testimonials />
      <Partners />
      <Question />

    </main>
  )
}

export default App
