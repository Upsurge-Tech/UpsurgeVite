import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import contact_net from "../../assets/contact_net.png";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const faq = useRef(null);
  const line = useRef(null);
  const main_faq = useRef(null);

  useEffect(() => {
    const T1 = gsap.timeline();
    T1.fromTo(
      faq.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    T1.fromTo(
      line.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );
    T1.fromTo(
      main_faq.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    ScrollTrigger.create({
      trigger: faq.current,
      start: "top 80%",
      animation: T1,
    });
  }, []);
  return (
    <main
      id="contact"
      className="flex flex-col min-w-full h-full bg-black text-white"
    >
      <div className="flex flex-row items-center gap-10 md:gap-10 pb-5 md:pb-5 pl-5 md:pl-20">
        <h2 className="text-4xl md:text-5xl">
          Contact <span className="text-[#34B4DC]"> Us</span>
        </h2>
        <div className="flex-0 bg-gradient-to-r from-[#6adbfe] to-white h-2 md:h-[3px] md:flex-1 mr-10"></div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 md:gap-20 pb-5 md:pb-10 pl-5 md:pl-20">
        <div className="w-full lg:w-[40%] bg-gradient-to-r from-[#333333] to-[#171717] p-8">
          <form>
            <h2 className="text-2xl md:text-3xl text-center font-semibold">
              Reach Out
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-100 font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-[#333333] border-2 border-[#171717] rounded-lg py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-100 font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-[#333333] border-2 border-[#171717] rounded-lg py-2 px-4"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-100 font-bold mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="w-full bg-[#333333] border-2 border-[#171717] rounded-lg py-2 px-4"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="hidden md:block w-full md:w-[60%] mt-5 md:mt-0">
          <img
            src={contact_net}
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
};

export default Contact;
