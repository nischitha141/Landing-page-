"use client";
import { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from 'next/navigation'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId) => {
    router.push(`/?section=${sectionId}`)
    setIsOpen(false); // Close menu after clicking

  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-10 py-5 relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="FormPerfectAI" width={84} height={34} />
        <h2 className="text-[#1F222A] font-bold text-[24px] md:text-[30.574px] leading-[39.746px] tracking-[0.153px]">
          FormPerfect AI
        </h2>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex space-x-8 text-[#35383F] font-[Urbanist] text-[18px] font-semibold leading-[24px]">
        <li><button onClick={() => scrollToSection("features")} className=" cursor-pointer hover:text-[#D0EA59]">Features</button></li>
        <li><button onClick={() => scrollToSection("referral")} className="cursor-pointer hover:text-[#D0EA59]">Referral</button></li>
        <li><button onClick={() => scrollToSection("enterprise")} className="cursor-pointer hover:text-[#D0EA59]">For Enterprise</button></li>
        <li><button onClick={() => scrollToSection("pricing")} className="cursor-pointer hover:text-[#D0EA59]">Pricing</button></li>
      </ul>

      {/* CTA Buttons */}
      <div className="hidden lg:flex space-x-4">
        <Link href="/contact">
          <button className=" cursor-pointer p-4 border border-[#D5D7DA] font-urbanist font-extrabold text-[18px] leading-[100%] tracking-[-0.4%] text-[#35383F] rounded-md">
            Contact Us
          </button>
        </Link>
        <button
          className="cursor-pointer p-4 border border-[#D5D7DA] font-urbanist font-extrabold text-[18px] leading-[100%] tracking-[-0.4%] text-[#35383F] bg-[#D0EA59] rounded-md"
          onClick={() => window.open("https://apps.apple.com/us/app/formperfect-ai/id6742069073", "_blank")}
        >
          Download App
        </button>

      </div>

      {/* Tablet & Mobile Menu Button */}
      <button onClick={toggleMenu} className="lg:hidden text-3xl text-[#35383F]">
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Tablet & Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden flex flex-col items-center space-y-6 py-6 z-50">
          <button onClick={() => scrollToSection("features")} className="cursor-pointer text-[18px] font-semibold text-[#35383F] hover:text-[#D0EA59]">Features</button>
          <button onClick={() => scrollToSection("referral")} className="cursor-pointer text-[18px] font-semibold text-[#35383F] hover:text-[#D0EA59]">Referral</button>
          <button onClick={() => scrollToSection("enterprise")} className="cursor-pointer text-[18px] font-semibold text-[#35383F] hover:text-[#D0EA59]">For Enterprise</button>
          <button onClick={() => scrollToSection("pricing")} className="cursor-pointer text-[18px] font-semibold text-[#35383F] hover:text-[#D0EA59]">Pricing</button>
          <Link href="/contact" className=" w-full flex flex-col items-center ">
            <button className="cursor-pointer p-3 w-[80%] text-center border border-[#D5D7DA] font-urbanist font-extrabold text-[18px] leading-[100%] tracking-[-0.4%] text-[#35383F] rounded-md">
              Contact Us
            </button>

          </Link>
          <button className="cursor-pointer p-3 w-[80%] text-center border border-[#D5D7DA] font-urbanist font-extrabold text-[18px] leading-[100%] tracking-[-0.4%] text-[#35383F] bg-[#D0EA59] rounded-md"
          onClick={() => window.open("https://apps.apple.com/us/app/formperfect-ai/id6742069073", "_blank")}
          >
            Download App
          </button>
        </div>
      )}
    </nav>
  );
}