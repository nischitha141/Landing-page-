'use client';

import Image from 'next/image';

export default function Track() {
  return (
    <section className="flex flex-col lg:flex-row items-center bg-white justify-between px-10 md:px-20 lg:px-40 py-16 gap-5">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-[#1F222A] text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-normal">
          Track & Celebrate Your Progress
        </h2>
        <p className="text-[#4E525A] text-[16px] font-medium leading-normal max-w-lg mx-auto lg:mx-0">
          Powerful analytics and AI insights to help you stay motivated, measure growth, and reach new milestones.
        </p>

        {/* Feature List */}
        <ul className="space-y-4 mb-6 mt-6">
          {[
            'Daily & Weekly Analytics – Visual insights into workout trends, calories burned, and progress.',
            'Earn Rewards – Hit milestones, unlock achievements, and stay motivated.',
            'Join the Community – Engage with like-minded fitness enthusiasts for added motivation.',
            'AI-Powered Insights – Personalized recommendations to optimize performance and results.'
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3 justify-center lg:justify-start">
              <Image src="/whitetick.svg" alt="Icon" width={20} height={20} />
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
          src="/images/mobile-5.png"
          alt="Track Progress Preview"
          width={470}
          height={600}
          className="drop-shadow-xl"
        />
      </div>
    </section>
  );
}
