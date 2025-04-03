import Image from "next/image";

function HomeSection() {
  return (
    <><section className="flex flex-col md:flex-row items-center justify-between px-40 py-20 font-urbanist">
          {/* Left Side: Text & CTA */}
          <div className="max-w-lg">
              <h1
                  className="font-urbanist font-bold text-[50px] leading-normal tracking-[-1.152px]">

                  <span className="text-[#A4B168]">FormPerfectAI</span> - Your AI-Powered Fitness & Wellness Companion
              </h1>
              <p className="mt-4 text-[#666A73]">
                  Unlock Your Full Potential - Smarter workouts. Personalized nutrition. AI-driven guidance built just for you.
              </p>

              {/* App Store Buttons */}
              <div className="flex space-x-4 mt-6">
                  <Image src="/appstore.svg" alt="App Store" width={150} height={50} />
                  {/* <Image src="/playstore.svg" alt="Google Play" width={150} height={50} /> */}
              </div>
          </div>

          {/* Right Side: Floating Mobile UI Preview */}
          <div className="relative mt-10 md:mt-0">
              <Image src="/mobile-ui-png.png" alt="App Preview" width={400} height={400} />

          </div>
      </section>
      <section className="flex justify-around  py-10 px-40">
              <div className=" w-[306px] ">
                  <div className="flex">
                      <Image src="/avatar.png" alt="Icon" width={104} height={40} className="mb-2" />
                      <p className="font-semibold text-[30px] leading-[44px] tracking-[-1.2%] pb-2 pl-1">120K+</p>
                  </div>

                  <p className="font-urbanist font-semibold text-[16px] leading-normal tracking-[-0.048px] text-[#666A73]">Fitness enthusiasts trust us for personalized AI training.</p>
              </div>
              <div className=" w-[306px]">
                  <div className="flex">
                      <Image src="/star.svg" alt="Icon" width={40} height={40} className="mb-2" />
                      <p className="font-semibold text-[30px] leading-[44px] tracking-[-1.2%] pb-2 pl-1">4.9</p>
                  </div>
                  <p className="font-urbanist font-semibold text-[16px] leading-normal tracking-[-0.048px] text-[#666A73]">Our top rating reflects the quality and impact of our programs.</p>
              </div>
              <div className=" w-[306px]">
                  <div className="flex">
                      <Image src="/target.svg" alt="Icon" width={40} height={40} className="mb-2" />
                      <p className="font-semibold text-[30px] leading-[44px] tracking-[-1.2%] pb-2 pl-1">89+</p>
                  </div>
                  <p className="font-urbanist font-semibold text-[16px] leading-normal tracking-[-0.048px] text-[#666A73]">Helping users worldwide stay active and reach their goals.</p>
              </div>
          </section></>
  )
}

export default HomeSection