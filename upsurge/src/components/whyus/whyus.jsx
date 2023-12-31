import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Whyus = () => {
  const whyus = useRef(null);
  const line = useRef(null);
  const flex_items = useRef(null);

  useEffect(() => {
    const T1 = gsap.timeline();

    T1.fromTo(
      line.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    T1.fromTo(
      flex_items.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power2.inOut",
      }
    );

    ScrollTrigger.create({
      trigger: whyus.current,
      start: "top 80%",
      animation: T1,
    });
  }, []);

  return (
    <main className="bg-black min-w-screen min-h-screen">
      <div className="text-white flex flex-col lg:flex-row items-center md:items-center justify-center gap-8 md:gap-20 p-16 md:p-32">
        <div className="text-4xl md:text-5xl w-96 pl-10 sm:p-2 ">
          Why <span className="text-[#00CDC1]">Us</span>?
        </div>

        <div
          ref={line}
          className="hidden md:block lg:h-[450px] lg:w-0 lg:border-r-2 border-b-2 w-[300px]"
          style={{
            borderImage: "linear-gradient(to bottom, #69DBFF, white)",
            borderImageSlice: 1,
          }}
        ></div>

        <div
          ref={flex_items}
          className="flex flex-col md:flex-row gap-5 md:gap-10"
        >
          <div className="flex flex-col ">
            <div className="flex flex-col w-full lg:w-80 h-60  p-4 lg:p-10 transform transition-all duration-700 ease-in-out transform-origin-center hover:rotate-6 hover:scale-105">
              <p className="text-3xl md:text-4xl text-[#69DBFF] pb-4 md:pb-10 font-semibold">
                Expertise
              </p>
              <p>
                Our team of experienced experts has the knowledge and expertise
                to deliver innovative IT solutions that meet your unique needs.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-80 h-60 p-4 lg:p-10 transform transition-all duration-700 ease-in-out transform-origin-center hover:rotate-6 hover:scale-105">
              <p className="text-3xl md:text-4xl text-[#69DBFF] pb-4 md:pb-10 font-semibold">
                Solutions
              </p>
              <p>
                We take a personalized approach to every project, working
                closely with you to understand your business and create specific
                solutions.
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="flex flex-col w-full lg:w-80 h-60 p-4 lg:p-10 transform transition-all duration-700 ease-in-out transform-origin-center hover:rotate-6 hover:scale-105">
              <p className="text-3xl md:text-4xl text-[#69DBFF] pb-4 md:pb-10 font-semibold">
                Tech
              </p>
              <p>
                We stay up to date with the latest trends and technologies in
                the IT industry, so you can get the most advanced solutions
                available.
              </p>
            </div>
            <div className="flex flex-col w-full lg:w-80 h-60 p-4 lg:p-10 transform transition-all duration-700 ease-in-out transform-origin-center hover:rotate-6 hover:scale-105">
              <p className="text-3xl md:text-4xl text-[#69DBFF] pb-4 md:pb-10 font-semibold">
                Results
              </p>
              <p>
                Our track record speaks for itself; we have helped businesses of
                all sizes and industries achieve their goals with our IT
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Whyus;
