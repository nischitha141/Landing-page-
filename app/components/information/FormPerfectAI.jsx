import Image from "next/image";

export default function FormPerfectAI() {
  return (
    <section className="flex flex-col items-center py-16 px-6 md:px-16 lg:px-32 text-center">
      <h2 className="text-[#1F222A] text-[32px] md:text-[42px] lg:text-[48px] font-bold leading-normal">
        Why FormPerfectAI?
      </h2>
      <p className="text-[#4E525A] text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[28px] max-w-[772px] py-5">
        Achieve your best with AI-powered fitness, seamless tracking, and rewards—built to
        keep you motivated and progressing every day.
      </p>

      <div className="flex flex-col lg:flex-row items-center w-full gap-10 lg:gap-12 pt-10">
        {/* Left Features */}
        <div className="flex flex-col gap-8 w-full max-w-[400px] md:max-w-none text-center md:text-left  md:items-center">
          <Feature
            icon="/icons/AI-Powered.svg"
            title="AI-Powered Personalization"
            description="Get workout, meal, & wellness plans tailored to your body & goals"
          />
          <Feature
            icon="/icons/Real-Time.svg"
            title="Real-Time Form Correction"
            description="Avoid injuries & improve technique instantly"
          />
          <Feature
            icon="/icons/Analytics.svg"
            title="Analytics & Insights"
            description="Track calories, workouts, nutrition, wellness, and progress in one place"
          />
        </div>

        {/* Mobile Mockup */}
        <div className="relative w-full max-w-[480px] flex justify-center">
          <Image
            src="/images/mobile-2.png"
            alt="Mobile App Mockup"
            width={450}
            height={600}
            className="w-[85%] md:w-[75%] lg:w-[100%] h-auto"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-8 w-full max-w-[400px] md:max-w-none text-center md:text-left md:items-center">
          <Feature
            icon="/icons/Custom Workouts.svg"
            title="Custom Workouts"
            description="Adjust duration, intensity, and focus areas with ease"
          />
          <Feature
            icon="/icons/Holistic.svg"
            title="Holistic Wellness Guidance"
            description="AI-suggested meal & mindfulness plans including reading for overall well-being"
          />
          <Feature
            icon="/icons/Earn Passive.svg"
            title="Earn Passive Income"
            description="Invite friends & turn your fitness journey into passive income!"
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
      <Image src={icon} alt={title} width={40} height={40} />
      <div className="max-w-[304px]">
        <h3 className="text-[#1F222A] text-[20px] md:text-[22px] font-semibold tracking-[-0.192px]">
          {title}
        </h3>
        <p className="text-[#4E525A] text-[16px] md:text-[17px] font-medium leading-[24px]">
          {description}
        </p>
      </div>
    </div>
  );
}
