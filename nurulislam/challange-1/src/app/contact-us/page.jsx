"use client";

import ButtonCustom from "@/components/common/ButtonCustom";
import useTheme from "@/hooks/useTheme";

function ContactUs() {
  const { light, setLight } = useTheme();
  return (
    <div className={`${!light && "bg-[#000000]"}`}>
      <section className={`container mx-auto px-4`}>
        <h3
          className={`text-7xl font-bold text-center pt-8 mb-4 ${
            !light && "text-white"
          }`}
        >
          Contact Us
        </h3>
        <p
          className={`text-center text-2xl my-10 ${
            !light ? "text-[#737373]" : "text-[#a3a3a3]"
          }`}
        >
          Drop us a line to start your project or simply just say "Hello!".
        </p>

        <div className={`block md:flex mb-10`}>
          <div className={`w-[40%]`}>
            <h5 className={`text-2xl font-bold ${!light && "text-white"}`}>
              WE'RE READY!
            </h5>
            <h3 className={`text-5xl mb-10 ${!light && "text-white"}`}>
              Let's Connect
            </h3>
            <p className={`text-2xl font-bold ${!light && "text-white"}`}>
              Head-quarters
            </p>
            <ul className={`${!light ? "text-[#737373]" : "text-[#a3a3a3]"}`}>
              <li>Indonesia, Jakarta</li>
              <li>Phone: (+62) 82260362579</li>
              <li>Email: mfahlevi740@gmail.com</li>
            </ul>
          </div>
          <form className={`w-[100%] md:w-[60%] mt-4 md:mt-0`}>
            <div className="flex justify-between">
              <input
                type="text"
                className={`w-[49%] border bg-[#E5E5E5] h-10`}
              />
              <input type="text" className="w-[49%] border bg-[#E5E5E5] h-10" />
            </div>

            <textarea
              name=""
              id=""
              className="w-[100%] border bg-[#E5E5E5] h-40 my-4"
            ></textarea>
            <ButtonCustom
              title="Send The Message"
              className={`border-0  ${
                !light && "bg-[#969393] text-black font-bold"
              } !w-[100%]`}
            />
          </form>
        </div>

        <div
          className={`flex flex-col md:flex-row justify-between items-center pb-20`}
        >
          <div
            className={`flex justify-center items-center ${
              !light && "bg-[#ffffff] text-black"
            } bg-[#000000] rounded-3xl w-[100%] md:w-[49%] h-[350px] text-center text-white`}
          >
            <p>
              {" "}
              Your business <br /> Location
            </p>
          </div>
          <div
            className={`rounded-3xl w-[100%]  md:w-[49%] overflow-hidden mt-8`}
          >
            <img src="/contact.png" alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
