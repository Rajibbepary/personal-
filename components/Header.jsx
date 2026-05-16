"use client";
import { ReactTyped } from "react-typed";

export default function Header() {

    return (
     <div id="about" className="w-full px-[2%] py-10 scroll-mt-25">
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-10">
                <div className="flex-1">
                    <h3 className="font-Ovo text-[20px] font-bold leading-7 text-[lab(64.272_57.1788_90.3583)]">HI, I'M RAJIB</h3>
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
                            <button className="group mt-4 px-10 py-3 bg-[#FF6900] rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-[#FF4400]">
                            <p className="relative h-6 overflow-hidden">
                                <span className="block transition-transform duration-300 group-hover:-translate-y-full font-extrabold">Hire Me</span>
                                <span className="absolute font-extrabold w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">Hire Me</span>
                            </p>
                        </button>


                </div>
                <div className="max-w-max mx-auto relative">
                    <img src='/assets/user_img.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />
                </div>
            </div>
        </div>
    )
}