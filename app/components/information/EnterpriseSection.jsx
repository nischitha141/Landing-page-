import Image from "next/image";
import Link from "next/link";

export default function EnterpriseSection() {
  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-12 lg:px-20">

      <Image
        src="/icons/star.svg"
        alt="Star Right"
        width={30}
        height={30}
        className="hidden md:block absolute right-6 top-[30%] animate-pulse"
      />
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-normal">
          A Smarter{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Employee Benefit</span>

            <svg width="274" height="19" viewBox="0 0 274 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.13438 10.4802C3.40973 8.38976 11.9423 6.77841 15.9242 6.23403C34.127 3.62107 63.4221 2.31446 75.6521 2.96776C87.8821 3.62107 74.5144 4.92747 62.8532 6.23398C51.1921 7.54048 59.7246 8.19374 70.2481 7.54048C80.7716 6.88723 102.672 6.23398 121.444 5.90735C140.215 5.58072 121.159 4.92747 102.672 4.92747C84.1847 4.92747 84.4691 3.62102 91.0107 2.96776C97.5523 2.31451 112.342 -0.298503 129.692 0.0281234C147.041 0.35475 187.998 1.008 205.632 3.29439C223.265 5.58078 259.671 11.7867 268.488 13.7464C277.305 15.7062 276.167 21.2589 260.524 17.9926C244.881 14.7263 212.458 8.84704 141.353 7.86716C70.2481 6.88728 16.2085 12.4399 10.5202 14.7263C4.83179 17.0127 0.849924 17.0127 3.12527 15.0529C5.40063 13.0932 5.9695 12.7666 3.69415 13.4198C1.4188 14.0731 -1.70981 13.0932 1.13438 10.4802Z" fill="#D0EA59" />
            </svg>

          </span>{' '}
          – <br />
          Beyond Gym Memberships
        </h2>
        <p className="mt-4 text-[#C5C6C9] text-[16px] md:text-[18px] font-medium leading-normal max-w-[620px]">
          Give your team more than just a gym—offer them a powerful AI-powered wellness companion. FormPerfectAI empowers your employees with tailored fitness, nutrition, and wellness support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-12 items-center">
        <Image
          src="/icons/star.svg"
          alt="Star Left"
          width={24}
          height={24}
          className="hidden md:block absolute left-10 top-110 animate-pulse"
        />
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
          <p className="text-[#C5C6C9] text-[16px] md:text-[18px] font-normal leading-normal pb-5">
            FormPerfectAI can be directly purchased by employers as a modern employee benefit, integrating seamlessly into your corporate wellness program.
          </p>
          <p className="text-[#C5C6C9] text-[16px] md:text-[18px] font-normal leading-normal pb-5">
            While traditional wellness programs and gym memberships serve a purpose, FormPerfectAI delivers measurable outcomes without the need for personal trainers, empowering employees to enhance their physical and mental well-being.
          </p>
          <ul className="space-y-4">
            {[
              "Easy to Implement.",
              "Scalable Across Teams.",
              "A Benefit Employees Love and Use.",

            ].map((text, index) => (
              <li key={index} className="flex space-x-3">
                <Image src="/whitetick.svg" alt="Icon" width={15} height={15} />
                <p className="text-[#C5C6C9] text-[16px] md:text-[18px] font-normal leading-normal">
                  {text}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[20px] md:text-[24px] font-semibold leading-[32px] tracking-[-0.192px]">
            A sound mind lives in a sound body
          </p>
          <Link href="/contact">
            <button className="cursor-pointer mt-6 px-6 py-3 bg-[#D0EA59] text-[#35383F] text-[16px] md:text-[18px] font-extrabold tracking-[-0.072px] rounded-full"
            >
              Grant This Benefit To Your Employees
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
