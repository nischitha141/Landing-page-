import Image from "next/image";

export default function EnterpriseSection() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-normal">
          FormPerfectAI for Enterprises
        </h2>
        <p className="mt-4 text-[#C5C6C9] text-[16px] md:text-[18px] font-medium leading-normal max-w-[620px]">
          Empower teams and clients with scalable AI-driven fitness, nutrition, and wellness.
          FormPerfectAI adapts to corporate, gym, and wellness brands with tailored programs,
          analytics, and engagement tools.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-12 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/woman-meditating.png"
            width={500}
            height={400}
            alt="Meditation"
            className="rounded-lg w-full max-w-[500px] md:max-w-none"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left mt-8 md:mt-0 md:pl-8">
          <ul className="space-y-4">
            {[
              "Healthier Teams, Higher Productivity – Improve employee well-being, reduce absenteeism & boost performance.",
              "Data-Driven Insights – Track engagement, measure impact & optimize wellness programs.",
              "Scalable & Customizable – Tailored solutions for companies, gyms & wellness brands of all sizes.",
              "Effortless Integration – Works seamlessly with existing HR & corporate wellness platforms.",
              "Cost-Effective Plans – Flexible pricing & enterprise discounts to maximize ROI.",
            ].map((text, index) => (
              <li key={index} className="flex items-start space-x-3">
                <Image src="/whitetick.svg" alt="Icon" width={20} height={20} />
                <p className="text-[#C5C6C9] text-[16px] md:text-[18px] font-normal leading-normal">
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[-0.192px]">
            Boost Engagement. Drive Results. Elevate Wellness—All at a Competitive Price!
          </p>
          <button className="mt-6 px-6 py-3 bg-[#D0EA59] text-[#35383F] text-[16px] md:text-[18px] font-extrabold tracking-[-0.072px] rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
