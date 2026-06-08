"use client";

import Image from "next/image";
import profilePicture from "@/public/assets/profile-img.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12"
    >
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <div>
          <h3 className="text-orange-500 font-bold text-xl tracking-widest uppercase">
            Hi, I'm Muhammed
          </h3>

          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mt-2 leading-tight">
            Frontend <br />
            <span className="text-orange-500">Developer</span>
          </h1>

          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl text-lg leading-relaxed">
            Turning complex visions into pixel-perfect reality. I build fast,
            interactive, and scalable web solutions using the power of React and
            Next.js.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="bg-orange-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all hover:-translate-y-1 active:scale-95"
          >
            Hire Me Now
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center">
        <div
          className="relative w-72 h-72 md:w-[420px] md:h-[420px] overflow-hidden border-4 border-white/20 dark:border-white/10 bg-gradient-to-tr from-orange-500 to-orange-400 shadow-[0_20px_50px_rgba(249,115,22,0.3)]"
          style={{
            borderRadius:
              "40.7266% 59.2734% 69.6367% 30.3633% / 41.0899% 39.6367% 59.6367% 50.3633%",
          }}
        >
          <Image
            src={profilePicture}
            alt="Profile"
            fill
            priority
            className="object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;