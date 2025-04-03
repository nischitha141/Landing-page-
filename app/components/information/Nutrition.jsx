'use client';

import Image from 'next/image';

export default function Nutrition() {
  return (
    <section className="flex flex-col md:flex-row items-center  bg-white justify-between px-40 py-16 gap-5">
      {/* Left Section */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-[#1F222A] text-[48px] font-bold leading-normal">
        Nutrition & Wellness Made Easy
        </h2>
        <p className="text-[#4E525A] text-[16px] font-medium leading-normal">
        Personalized meal plans and wellness insights to fuel your body, optimize recovery, and enhance performance.
        </p>
        
        {/* Feature List */}
        <ul className="space-y-4 mb-6 mt-6">
          {[
            'Personalized Meal Plans – AI-generated suggestions based on your diet & fitness goals.',
            'Macro & Calorie Tracking – Seamless integration with fitness tracking apps for accurate logging.',
            'Smart Swaps – Get healthy alternatives to keep your diet on track.',
            'Mindfulness & Recovery – Guided meditation, sleep optimization, and stress management for holistic well-being.'
          ].map((text, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Image src="/whitetick.svg" alt="Icon" width={20} height={20}  />
              <p className="text-[#4E525A] text-[18px] font-normal leading-normal">{text}</p>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <button className="bg-[#D0EA59] text-[#35383F] text-[18px] font-extrabold leading-normal tracking-[-0.072px] py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-all">
          Get Started
        </button>
      </div>
      
      {/* Right Section (Mockup Image) */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <Image 
          src="/images/mobile-4.png" 
          alt="Workout Preview" 
          width={470} 
          height={600} 
          className="drop-shadow-xl"
        />
      </div>
    </section>
  );
}
