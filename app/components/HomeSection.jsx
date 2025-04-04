import Image from "next/image";

function HomeSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-40 py-10 md:py-20 font-urbanist text-center md:text-left">
        {/* Left Side: Text & CTA */}
        <div className="flex-1 max-w-lg">
          <h1 className="font-bold text-[32px] md:text-[45px] lg:text-[50px] leading-snug tracking-[-1.152px]">
            <span className="text-[#A4B168]">FormPerfectAI</span> - Your AI-Powered Fitness & Wellness Companion
          </h1>
          <p className="mt-4 text-[#666A73] text-[16px] md:text-[18px]">
            Unlock Your Full Potential - Smarter workouts. Personalized nutrition. AI-driven guidance built just for you.
          </p>

          {/* App Store Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <Image src="/appstore.svg" alt="App Store" width={150} height={50} />
            {/* <Image src="/playstore.svg" alt="Google Play" width={150} height={50} /> */}
          </div>
        </div>

        {/* Right Side: Mobile UI Preview */}
        <div className="flex-1 flex justify-center mt-10 md:mt-0">
          <Image 
            src="/mobile-ui-png.png" 
            alt="App Preview" 
            width={400} 
            height={400} 
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 py-10 px-6 md:px-20 lg:px-40">
        {[
          { icon: "/avatar.png", number: "120K+", text: "Fitness enthusiasts trust us for personalized AI training." },
          { icon: "/star.svg", number: "4.9", text: "Our top rating reflects the quality and impact of our programs." },
          { icon: "/target.svg", number: "89+", text: "Helping users worldwide stay active and reach their goals." },
        ].map((item, index) => (
          <div key={index} className="w-full md:w-[306px] text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center">
              <Image src={item.icon} alt="Icon" width={40} height={40} className="mb-2" />
              <p className="font-semibold text-[26px] md:text-[30px] leading-[44px] tracking-[-1.2%] pb-2 pl-2">{item.number}</p>
            </div>
            <p className="font-urbanist font-semibold text-[14px] md:text-[16px] leading-normal tracking-[-0.048px] text-[#666A73]">
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default HomeSection;
