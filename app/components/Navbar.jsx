"use client";
import Image from "next/image";


export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-between px-25 py-5">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logo.svg" alt="FormPerfectAI" width={84} height={34} />
        <h2 className="text-[#1F222A] font-bold text-[30.574px] leading-[39.746px] tracking-[0.153px]">FormPerfect AI</h2>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-[#35383F] font-[Urbanist] text-[18px] font-semibold leading-[24px]">
        <li><button onClick={() => scrollToSection("features")} className="hover:text-[#D0EA59]">Features</button></li>
        <li><button onClick={() => scrollToSection("referral")} className="hover:text-[#D0EA59]">Referral</button></li>
        <li><button onClick={() => scrollToSection("enterprise")} className="hover:text-[#D0EA59]">For Enterprise</button></li>
        <li><button onClick={() => scrollToSection("pricing")} className="hover:text-[#D0EA59]">Pricing</button></li>
      </ul>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <button className="p-4 border border-[#D5D7DA] font-urbanist font-extrabold text-[18px] leading-[100%] tracking-[-0.4%] text-[#35383F] rounded-md">Contact Us</button>
        <button className="p-4 border border-[#D5D7DA] font-urbanist font-extrabold text-[18px] leading-[100%] tracking-[-0.4%] text-[#35383F] bg-[#D0EA59] rounded-md">Download App</button>
      </div>
    </nav>
  );
}

