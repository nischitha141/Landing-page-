"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="relative bg-white pt-20 ">
     
      <section className=" relative flex flex-col items-center justify-center px-6 py-12 bg-gray-900 gap-6 bg-[#181A20] bg-[url('/BG.svg')] bg-center text-white p-12 rounded-[2.7rem] w-[85%]  shadow-lg text-white mx-auto -mb-55 z-10">
        <p className="text-white text-center w-[55%] text-[56px] font-bold leading-[124%] mb-4 justify-center">
          Ready to Transform Your Fitness?
        </p>
        <p className="text-[#E0E0E1] text-center text-[18px] font-medium leading-normal ">
          Smash your goals with AI-driven workouts & nutrition. Join
          FormPerfectAI today.
        </p>

        <div className="flex justify-center ">

          <button className="flex items-center px-7 py-2 bg-white rounded-full shadow-md transition hover:shadow-lg">
            <Image
              src="/apple.svg"
              alt="Apple Logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <div className="text-left">
              <p className="text-xs  font-semibold text-black">Download on the</p>
              <p className="text-lg font-bold text-black">App Store</p>
            </div>
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gray-200  py-6 text-gray-600  px-25 pt-74 ">
        {/* Top section: Logo & Socials */}
        <div className=" flex md:flex-row items-center justify-between mb-6 -z-10 mt-18">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo2.svg" alt="FormPerfectAI" width={84} height={34} />
            <span className="text-[30.57px] font-bold leading-[130%] tracking-[0.15px]">FormPerfect AI</span>
          </div>
          {/* Navigation Links */}
          <div className="flex justify-center space-x-6 text-[18px] font-semibold leading-[24px] tracking-[0%] gap-6">
            <Link href="#" className="hover:text-black">Features</Link>
            <Link href="#" className="hover:text-black">Referral</Link>
            <Link href="#" className="hover:text-black">For Enterprise</Link>
            <Link href="#" className="hover:text-black">Pricing</Link>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-black">
              <Image src="/facebook.svg" alt="" width={40} height={40} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <Image src="/twitter.svg" alt="" width={40} height={40} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <Image src="/linkedin.svg" alt="" width={40} height={40} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#424242]  " />


        <div className="flex justify-between text-[#1F222A]">
          {/* Legal Links */}
          <div className="flex justify-center  text-xs mt-4 gap-10">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms of Use</Link>
            <Link href="#" className="hover:text-black">Sales and Refunds</Link>
            <Link href="#" className="hover:text-black">Legal</Link>
            <Link href="#" className="hover:text-black">Site Map</Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-xs mt-4">&copy; 2025 All Rights Reserved</p>
        </div>

      </footer>
      {/* </section> */}
    </div>
  );
}
