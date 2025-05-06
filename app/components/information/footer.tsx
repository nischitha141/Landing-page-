"use client";
// import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function HeroSection() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => setIsOpen(!isOpen);
  const router = useRouter()
  const scrollToSection = (sectionId: string) => {
    router.push(`/?section=${sectionId}`)
    // setIsOpen(false); 

  };
  return (
    <div className="relative pt-20">


      {/* Footer Section */}
      <footer className="w-full bg-gray-200 py-6 text-gray-600 px-6 md:px-12 py-25 ">
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
          <div className="flex flex-wrap justify-center text-[16px] md:text-[18px] font-semibold gap-6 cursor-pointer">
            <a onClick={() => scrollToSection("features")} className="hover:text-black">Features</a>
            <a onClick={() => scrollToSection("referral")} className="hover:text-black">Referral</a>
            <a onClick={() => scrollToSection("enterprise")} className="hover:text-black">For Enterprise</a>
            <a onClick={() => scrollToSection("pricing")} className="hover:text-black">Pricing</a>
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
            <Link href="/privacy-policy" target="_blank" className="hover:text-black">Privacy Policy</Link>
            <Link href="/Terms-and-Condition" target="_blank"
              rel="noopener noreferrer" className="hover:text-black">Terms of Use</Link>
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
