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
    <main className="flex flex-col min-w-full h-full bg-black p-5 md:p-10 text-white">
      <div className="flex flex-row items-center gap-10 md:gap-10 pb-5 md:pb-10 p-20">
        <h2 className="text-4xl md:text-5xl">Contact Us</h2>
        <div
          ref={line}
          className="flex-0 bg-gradient-to-r from-[#6adbfe] to-white h-2 md:h-[3px]  md:flex-1"
        ></div>
      </div>
      <div className="w-1/2 bg-gray-100 p-8">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-white border border-gray-300 rounded py-2 px-4"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white border border-gray-300 rounded py-2 px-4"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              className="w-full bg-white border border-gray-300 rounded py-2 px-4"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-1/2">
        <img
          src={contact_net}
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
};

export default Contact;
