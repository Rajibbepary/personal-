"use client";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { asserts } from "@/public/assets/assets";
export default function Header() {

    return (
     <div id="home" className="w-full px-[2%] py-10 scroll-mt-25">
            <div className="flex w-full flex-col lg:flex-row items-center max-sm:flex-col-reverse gap-20 my-10">
                <div className="flex-1">
                    <h3 className="font-Ovo mt-10 text-[20px] font-bold leading-7 text-[lab(64.272_57.1788_90.3583)]">HI, I'M RAJIB</h3>
                    <h1 className="lg:text-[70px] text-[50px] font-[900] leading-[90px] text-black dark:text-white">Frontend</h1>
                       <h1 className="lg:text-[70px] text-[50px] font-[900] lg:leading-[90px] text-[lab(64.272_57.1788_90.3583)]">
                    <ReactTyped
                    strings={[
                         "Developer",
                        "React Expert",
                        "Next.js Expert",
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    />
                </h1>
                    <p className="text-[18px] max-sm:mt-3 text-[400] text-[lab(35.5623 -1.74978 -15.4316)] dark:text-[
                    lab(84.7652 -1.94535 -7.93337)] max-w-2xl font-Ovo">I transform complex concepts into seamless digital experiences — building fast, scalable, and interactive web applications with React and Next.js.</p>
                           
                     <div className="flex  mt-4 flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <a
                        className="bg-orange-500 text-white px-10 py-2 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all hover:-translate-y-1 active:scale-95"
                    >
                        Hire Me Now
                    </a>

<a
  href="/rajib.pdf"
  download="rajib.pdf"
  className="flex items-center justify-between relative overflow-hidden font-bold text-orange-500 rounded-xl active:scale-95 transition text-sm py-3 w-46 pr-7  border-2 border-orange-500 cursor-pointer"
>

  <div className="h-full flex items-center justify-center px-3">
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                className="text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
              >
                    <path
                      d="m7.438 13.985 3.77 3.77 3.769-3.77m-3.774-4.712v8.482"
                      stroke="currentColor"
                      strokeOpacity=".8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                <path
                  d="M19.576 15.012a4.712 4.712 0 0 0-2.714-8.567h-1.188a7.54 7.54 0 1 0-12.949 6.87"
                  stroke="currentColor"
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </div>

      Download CV
    </a>
      
        </div>

                </div>
                 {/* Right Image */}
                      <div className="flex-1 relative flex justify-center items-center">
                        <div
                          className="blob relative w-72 h-72 md:w-[420px] md:h-[420px] bg-gradient-to-tr from-orange-500 to-orange-400 overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.3)] border-4 border-white/20 dark:border-white/10"
                          style={{
                            borderRadius:
                              "43.7699% 56.2301% 54.9205% 45.0795% / 43.7699% 47.5398% 52.4602% 50%",
                          }}
                        >
                          <Image
                            src={asserts.ownner_imag}
                            alt="Profile"
                            fill
                            priority
                            className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                          />
                        </div>
                      </div>
                
            </div>
        </div>
    )
}