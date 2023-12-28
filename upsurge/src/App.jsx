import Footer from "./components/footer/index.jsx";
import Home from "./components/home/index.jsx";
import Services from "./components/Services";
import OurValues from "./components/OurValues";
import Whyus from "./components/whyus/index.jsx";
import Testimonials from "./components/Testimonitals/index.jsx";
import Partners from "./components/Partners/index.jsx";
import Career from "./components/career/index.jsx";
import Question from "./components/FAQ/index.jsx";
import Contact from "./components/contact/contact.jsx";

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
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
