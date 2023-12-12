import { useState } from "react";

const Question = () => {
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
      <div className="flex flex-row items-center gap-5 md:gap-10 pb-5 md:pb-10">
        <h2 className="text-4xl md:text-5xl">FAQ&#39;s</h2>
        <div className="flex-1 bg-gradient-to-r from-[#6adbfe] to-white h-2 md:h-[3px]"></div>
      </div>
      <div className="border-2 border-dashed border-[#9747FF] mx-2 md:mx-32 mb-5 md:mb-14 p-5 md:p-14">
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
                  <p className="text-lg md:text-2xl font-medium">
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
                <div className="flex text-3xl w-24 h-14 bg-[#4FA9E2] items-center justify-center rounded-lg">
                  -
                  {/* <img src={minus} alt="minus-sign" height={30} width={30} /> */}
                </div>
              ) : (
                <div className="flex text-3xl w-24 h-14 bg-[#152329] items-center justify-center rounded-lg">
                  +
                  {/* <img src={plus} alt="plus-sign" height={30} width={30} /> */}
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
