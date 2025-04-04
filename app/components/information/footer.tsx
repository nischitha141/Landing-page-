"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-white pt-20">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-6 py-12 bg-[#181A20] bg-[url('/BG.svg')] bg-center text-white rounded-[2.7rem] w-[85%] shadow-lg mx-auto -mb-20 z-10">
        <p className="text-white text-center md:w-[55%] w-full max-w-lg text-[32px] md:text-[56px] font-bold leading-[124%] mb-4">
          Ready to Transform Your Fitness?
        </p>
        <p className="text-[#E0E0E1] text-center text-[16px] md:text-[18px] font-medium leading-normal">
          Smash your goals with AI-driven workouts & nutrition. Join FormPerfectAI today.
        </p>

        <div className="flex justify-center mt-6">
          <button className="flex items-center px-7 py-2 bg-white rounded-full shadow-md transition hover:shadow-lg">
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

      {/* Footer Section */}
      <footer className="w-full bg-gray-200 py-6 text-gray-600 px-6 md:px-12 pt-74">
        {/* Top Section: Logo & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo2.svg" alt="FormPerfectAI" width={84} height={34} />
            <span className="text-[30.57px] lg:text-[30.57px] md:text-[20px] font-bold leading-[130%] tracking-[0.15px]">
              FormPerfect AI
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center text-[16px] md:text-[18px] font-semibold gap-6">
            <Link href="#" className="hover:text-black">Features</Link>
            <Link href="#" className="hover:text-black">Referral</Link>
            <Link href="#" className="hover:text-black">For Enterprise</Link>
            <Link href="#" className="hover:text-black">Pricing</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-black">
              <Image src="/facebook.svg" alt="Facebook" width={40} height={40} />
            </Link>
            <Link href="#" className="hover:text-black">
              <Image src="/twitter.svg" alt="Twitter" width={40} height={40} />
            </Link>
            <Link href="#" className="hover:text-black">
              <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={40} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#424242] my-4" />

        {/* Legal Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between text-[#1F222A] text-xs space-y-4 md:space-y-0">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms of Use</Link>
            <Link href="#" className="hover:text-black">Sales and Refunds</Link>
            <Link href="#" className="hover:text-black">Legal</Link>
            <Link href="#" className="hover:text-black">Site Map</Link>
          </div>
          <p className="text-center">&copy; 2025 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
