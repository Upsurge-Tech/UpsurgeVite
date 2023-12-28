import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Question = () => {
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
        duration: 1,
        ease: "power2.inOut",
      }
    );

    ScrollTrigger.create({
      trigger: faq.current,
      start: "top 80%",
      animation: T1,
    });
  }, []);

  const [active, setActive] = useState(-1);
  const question = [
    {
      number: "01",
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam Id placerat dui habitasse quisque nisl tincidunt facilisi mi id Dictum elit velit.",
    },
    {
      number: "02",
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam Id placerat dui habitasse quisque nisl tincidunt facilisi mi id Dictum elit velit.",
    },
    {
      number: "03",
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam Id placerat dui habitasse quisque nisl tincidunt facilisi mi id Dictum elit velit.",
    },
    {
      number: "04",
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac. Ornare amet ligula ornare lacus aliquam aenean. Eu lacus imperdiet urna amet congue adipiscing. Faucibus magna nisl ullamcorper in facilisis consequat aliquam Id placerat dui habitasse quisque nisl tincidunt facilisi mi id Dictum elit velit.",
    },
  ];

  const activated = (index) => {
    if (active === index) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };
  return (
    <main className="flex flex-col min-w-full h-full bg-black p-5 md:p-10 text-white">
      <div className="flex flex-row items-center gap-10 md:gap-24 pb-5 md:pb-10 px-[10em]">
        <h2 className="text-4xl md:text-5xl">FAQ&#39;s</h2>
        <div
          ref={line}
          className="flex-0 bg-gradient-to-r from-[#6adbfe] to-white h-2 md:h-[3px]  md:flex-1"
        ></div>
      </div>
      <div
        ref={main_faq}
        className="border-2 border-dashed border-[#7edcf9] mx-1 lg:mx-32 mb-5 md:mb-14 p-5 md:p-14 mt-20"
      >
        {question?.map((questions, index) => (
          <div key={index} className="flex flex-col text-white pb-3 md:pb-5">
            <div
              className="flex flex-row p-3 md:p-7 justify-between border-t-2 border-b-2 border-slate-700 border-solid"
              onClick={() => activated(index)}
            >
              <div className="flex flex-row gap-3 md:gap-5 w-full md:w-[60em]">
                <p className="text-md md:text-xl font-semibold">
                  {questions.number}
                </p>
                <div className="flex flex-col gap-2 md:gap-4">
                  <p className="text-md md:text-2xl font-medium">
                    {questions.question}
                  </p>
                  <p
                    className="text-sm md:text-lg pr-2 md:pr-20 font-inter text-slate-300"
                    style={{
                      visibility: active === index ? "visible" : "hidden",
                      height: active === index ? "auto" : "0",
                    }}
                  >
                    {questions.answer}
                  </p>
                </div>
              </div>
              {active === index ? (
                <div className="flex text-3xl w-14 h-8 md:w-24 md:h-14 bg-[#4FA9E2] items-center justify-center rounded-lg">
                  -
                </div>
              ) : (
                <div className="flex text-3xl w-14 h-8 md:w-24 md:h-14 bg-[#152329] items-center justify-center rounded-lg">
                  +
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Question;
