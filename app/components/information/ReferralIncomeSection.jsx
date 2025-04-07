import Image from "next/image";

const ReferralIncomeSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-40 py-16 gap-8">
      {/* Left Side: Earnings Card */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/images/referral.png"
          alt="Workout Preview"
          width={470}
          height={600}
          className="drop-shadow-xl max-w-full"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="lg:w-2/3 mt-8 lg:mt-0 lg:pl-12 max-w-[605px] text-center lg:text-left">
        <h2 className="text-[#1F222A] text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-normal">
          <span className="inline-block align-text-bottom mr-2 lg:mb-2">
            <Image src="/icons/money_bag.svg" width={40} height={40} alt="money bag" />
          </span>
          Turn Referrals into <br className="hidden md:block" /> Passive Income
        </h2>

        <p className="text-[#4E525A] text-[16px] md:text-[18px] lg:text-[21px] font-normal leading-normal">
          Transform your fitness journey into an income opportunity with exclusive referral perks & commissions.
          Unlike other referral programs, you’ll receive monthly commissions based on ambassador tiers.
        </p>
        <ul className="mt-6 space-y-3 text-[#4E525A] text-[16px] md:text-[18px] font-normal leading-normal">
          <li className="flex items-center justify-center lg:justify-start">
            <Image src="/icons/fire.svg" alt="Icon" width={20} height={20} className="mr-2" />
            Share & Earn – Invite friends via your unique link.
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <Image src="/icons/credit_card.svg" alt="Icon" width={20} height={20} className="mr-2" />
            Get Paid – Earn commissions when they subscribe.
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <Image src="/icons/rocket.svg" alt="Icon" width={20} height={20} className="mr-2" />
            Unlock Higher Rewards – Progress through tiers & boost earnings.
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <Image src="/icons/bullseye.svg" alt="Icon" width={20} height={20} className="mr-2" />
            Compete & Win – Join leaderboard challenges & bonuses.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ReferralIncomeSection;
