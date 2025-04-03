import Image from "next/image";

export default function FormPerfectAI() {
  return (
    <section className="flex flex-col items-center py-25 px-40 text-center">
      <h2 className="text-[#1F222A] text-center text-[48px] font-bold leading-normal">Why FormPerfectAI?</h2>
      <p className="text-[#4E525A] text-center text-[20px] font-medium leading-[30px] max-w-[772px] py-5">
        Achieve your best with AI-powered fitness, seamless tracking, and rewards—built to
        keep you motivated and progressing every day.
      </p>

      <div className="flex flex-col md:flex-row   w-full gap-12 pt-15">
        {/* Left Features */}
        <div className="flex flex-col gap-8 text-left">
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
        <div className="relative  h-[640px]">
          <Image
            src="/images/mobile-2.png"
            alt="Mobile App Mockup"
            width={480}
            height={640}
            // className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-8 text-left">
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
    <div className="">
      <Image src={icon} alt={title} width={40} height={40} />
      <div className="max-w-[304px]">
        <h3 className="text-[#1F222A] text-[24px] font-semibold tracking-[-0.192px] pt-4 pb-2">{title}</h3>
        <p className="text-[#4E525A] text-[17px] font-medium leading-[24px]">{description}</p>
      </div>
    </div>
  );
}
