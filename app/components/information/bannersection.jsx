"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative bg-white pt-20">
      {/* Background Split */}
      <div className="absolute inset-0 z-0">
        <div className="h-[80%] bg-white"></div>
        <div className="h-[20%] bg-gray-200"></div>
      </div>

      {/* Hero Section Content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-6 py-12 bg-[#181A20] bg-[url('/BG.svg')] bg-center text-white rounded-[2.7rem] w-[85%] shadow-lg mx-auto -mb-20">
        <p className="text-white text-center md:w-[55%] w-full max-w-lg text-[32px] md:text-[56px] font-bold leading-[124%] mb-4">
          Ready to Transform Your Fitness?
        </p>
        <p className="text-[#E0E0E1] text-center text-[16px] md:text-[18px] font-medium leading-normal">
          Smash your goals with AI-driven workouts & nutrition. Join FormPerfectAI today.
        </p>

        <div className="flex justify-center mt-6 ">
          <button className="flex items-center px-7 py-2 bg-white rounded-full shadow-md transition hover:shadow-lg cursor-pointer"
          onClick={() => window.open("https://apps.apple.com/us/app/formperfect-ai/id6742069073", "_blank")}
          >
            <Image
              src="/apple.svg"
              alt="Apple Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <div className="text-left">
              <p className="text-xs font-semibold text-black">Download on the</p>
              <p className="text-lg font-bold text-black">App Store</p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
