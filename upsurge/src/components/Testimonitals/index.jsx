import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import profileImage from "../../assets/testimonials-and-partners/profile.png";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
  const line = useRef(null);
  const main = useRef(null);

  useEffect(() => {
    const T1 = gsap.timeline();

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
      main.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }
    );

    ScrollTrigger.create({
      trigger: line.current,
      start: "top 80%",
      animation: T1,
    });
  }, []);
  const testimonials = [
    {
      id: 0,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: "Jane Doe",
      description: "CEO of Inkyy.com",
      profileImage: profileImage,
      rating: 4,
    },
    {
      id: 1,
      content: `They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: "Jane Doe",
      description: "CEO of Inkyy.com",
      profileImage: profileImage,
      rating: 3,
    },
    {
      id: 2,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: "Jane Doe",
      description: "CEO of Inkyy.com",
      profileImage: profileImage,
      rating: 5,
    },

    {
      id: 3,
      content: `Designers nsign in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: "Jane Doe",
      description: "CEO of Inkyy.com",
      profileImage: profileImage,
      rating: 5,
    },

    {
      id: 4,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: "Jane Doe",
      description: "CEO of Inkyy.com",
      profileImage: profileImage,
      rating: 2,
    },

    {
      id: 5,
      content: `Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.`,
      name: "Jane Doe",
      description: "CEO of Inkyy.com",
      profileImage: profileImage,
      rating: 5,
    },
  ];

  return (
    <section
      className="bg-black px-0 sm:px-[2rem] py-[100px] overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-[1480px] m-auto ">
        <div className="flex flex-col md:flex-row items-center gap-[63px] pb-[100px] px-[10rem] ">
          <h2 className="text-4xl md:text-5xl text-white ">Testimonials</h2>
          <div
            ref={line}
            className=" w-0 sm:w-[40em]  bg-gradient-to-r from-[#6adbfe] to-white h-[2px]  "
          ></div>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
}
