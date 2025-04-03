"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-b from-white via-white h-[10%] to-#E0E0E1 bg-gradient-to-b from-white to-gray-100 via-gray-100 min-h-screen">
      {/* Hero Content */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 rounded-[2.7rem] w-[85%]  shadow-lg">
        <h1 className="text-white text-center w-[55%] text-[56px] font-bold leading-[124%] mb-4 justify-center">
          Ready to Transform Your Fitness?
        </h1>
        <p className="text-[#E0E0E1] text-center text-[18px] font-medium leading-normal ">
          Smash your goals with AI-driven workouts & nutrition. Join
          FormPerfectAI today.
        </p>

        <div className="flex justify-center gap-4">
          <Link href="#">
            <Image
              src="/google-play-badge.png"
              alt="Get it on Google Play"
              width={150}
              height={50}
            />
          </Link>
          <Link href="#">
            <Image
              src="/app-store-badge.png"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </Link>
        </div>
      </div>

 {/* Footer Section */}
 <footer className="w-full  mt-8 py-6 text-gray-600">
        {/* Top section: Logo & Socials */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="FormPerfect AI Logo" width={40} height={40} />
            <span className="font-bold text-xl text-gray-800">FormPerfect AI</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-black">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-300 my-4 mx-auto max-w-5xl" />

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link href="#" className="hover:text-black">Features</Link>
          <Link href="#" className="hover:text-black">Referral</Link>
          <Link href="#" className="hover:text-black">For Enterprise</Link>
          <Link href="#" className="hover:text-black">Pricing</Link>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-4 text-xs mt-4">
          <Link href="#" className="hover:text-black">Privacy Policy</Link>
          <Link href="#" className="hover:text-black">Terms of Use</Link>
          <Link href="#" className="hover:text-black">Sales and Refunds</Link>
          <Link href="#" className="hover:text-black">Legal</Link>
          <Link href="#" className="hover:text-black">Site Map</Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs mt-4">&copy; 2025 All Rights Reserved</p>
      </footer>
    </section>
  );
}
