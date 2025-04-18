'use client';

import Image from 'next/image';

export default function SmarterWorkouts() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-white justify-between px-10 md:px-20 lg:px-40 py-16 gap-5">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-[#1F222A] text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-normal">
          Smarter Workouts, Better Results
        </h2>
        <p className="text-[#4E525A] text-[16px] font-medium leading-normal max-w-lg mx-auto lg:mx-0">
          AI-driven training designed to maximize results, improve technique, and keep you progressing every day.
        </p>

        {/* Feature List */}
        <ul className="space-y-4 mb-6 mt-6">
          {[
            'AI-Optimized Plans — Whether it’s strength, endurance, or flexibility, we’ve got you covered.',
            'Progress Tracking — Stay on top of your calories, consistency & achievements.',
            'Form Correction — Real-time AI guidance to perfect your technique and prevent injuries.',
            'Custom Workouts — Adjust duration, intensity, and focus areas to match your goals.'
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
              <Image src="/tick.svg" alt="Icon" width={20} height={20} />
              <p className="text-[#4E525A] text-[18px] font-normal leading-normal">{text}</p>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="flex justify-center lg:justify-start">
          <button className="bg-[#D0EA59] text-[#35383F] text-[18px] font-extrabold leading-normal tracking-[-0.072px] py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Right Section (Mockup Image) - Moves below in tablet */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <Image
          src="/images/mobile-3.png"
          alt="Workout Preview"
          width={470}
          height={600}
          className="drop-shadow-xl"
        />
      </div>
    </section>
  );
}
