import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HomeSection from "./components/HomeSection";
import FormPerfectAI from "./components/information/FormPerfectAI";
import SmarterWorkouts from "./components/information/SmarterWorkouts";
import Nutrition from "./components/information/Nutrition";
import Track from "./components/information/Track";
import ReferralIncomeSection from "./components/information/ReferralIncomeSection"
import EnterpriseSection from "./components/information/EnterpriseSection"
import Testimonials from "./components/information/Testimonials"
import PricingPlans from "./components/information/PricingPlans";
import HeroSection from "./components/information/footer";
import BannerSection from "./components/information/bannersection";
import ScrollToSection from './utils/ScrollToSection'
import { Suspense } from "react";
export default function HomePage() {
  return (
    <main>
       <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
      <div id="home" className="bg-[url('/bgpattern.svg')] bg-center w-full bg-white min-h-screen">
        <Navbar />
        <HomeSection />
      </div>

      <section id="features"><FormPerfectAI /></section>
      <section id="workouts"><SmarterWorkouts /></section>
      <section id="nutrition"><Nutrition /></section>
      <section id="track"><Track /></section>
      <section id="referral"><ReferralIncomeSection /></section>
      <section id="enterprise"><EnterpriseSection /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="pricing"><PricingPlans /></section>
      
      <BannerSection />
      <section id="HeroSection"><HeroSection /></section>
      
    

    </main>
  );
}
