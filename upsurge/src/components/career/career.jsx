import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globe from "../../assets/globe.mp4";

gsap.registerPlugin(ScrollTrigger);

const Career = () => {
  const video_load = useRef(null);
  const career_section = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      video_load.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    tl.fromTo(
      career_section.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    ScrollTrigger.create({
      trigger: career_section.current,
      start: "top 80%",
      animation: tl,
    });
  }, []);
  return (
    <main className="bg-[#050D1F] w-screen h-screen">
      <div className="text-white flex flex-row w-full h-full ">
        <div ref={video_load} className="flex    ">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src={globe} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          ref={career_section}
          className=" pt-40 flex flex-col gap-20  w-[735.98px]  "
        >
          <div className="text-6xl">
            Looking for <span className="text-[#34B4DC]">internships?</span>
          </div>
          <div className="">
            <div className="pl-14 pr-24 pb-14">
              At Upsurge, we believe in a holistic approach to technology
              solutions. We seamlessly blend the end-to-end convenience of
              integrated services with the best of breed excellence of
              specialized tools.
            </div>
            <a href="#contact">
              <button
                type="button"
                className="focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-3 text-center  ml-4 md:ml-28 bg-gradient-to-r from-[#0038FCB2] to-[#69DBFF68] text-white "
              >
                click here
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Career;
