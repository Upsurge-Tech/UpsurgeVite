import partner1Img from "../../assets/testimonials-and-partners/partner-1.svg";
import partner2Img from "../../assets/testimonials-and-partners/partner-2.svg";
import partner3Img from "../../assets/testimonials-and-partners/partner-3.svg";
import partner4Img from "../../assets/testimonials-and-partners/partner-4.svg";
import partner5Img from "../../assets/testimonials-and-partners/partner-5.svg";
import { motion } from "framer-motion";

export default function Partners() {
  const partners = [
    {
      name: "partner1",
      image: partner1Img,
    },
    {
      name: "partner2",
      image: partner2Img,
    },
    {
      name: "partner3",
      image: partner3Img,
    },
    {
      name: "partner4",
      image: partner4Img,
    },
    {
      name: "partner5",
      image: partner5Img,
    },
  ];

  //could've repeated twice, but may not fill the screen on big screens
  const repeatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-black px-[1rem] py-[100px]">
      <div className="max-w-[1000px] m-auto ">
        <div className="flex flex-col md:flex-row items-center gap-[60px] pb-[100px]">
          <h2 className="text-4xl md:text-5xl text-white ">Partners</h2>
          <div className=" w-0 sm:w-[45em]  bg-gradient-to-r from-[#6adbfe] to-white h-[2px]  "></div>
        </div>
      </div>

      {/* flex to make it actually translateX by -50%. Translates much less othewise, I don't understand why.  */}
      <div className="overflow-hidden flex mx-0 sm:mx-[3em] pb-[100px]">
        <motion.div
          className="flex opacity-60"
          animate={{ x: ["0%", "-40%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {repeatedPartners.map(({ name, image }, i) => (
            <img
              src={image}
              alt={name}
              className="mx-[50px] w-[180px] lg:w-[250px]"
              /* maxWidth:100% (default in tailwind) breaks translateX(-50%)
                by making it translate much less. I don't understand why! */
              style={{ maxWidth: "none" }}
              key={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
