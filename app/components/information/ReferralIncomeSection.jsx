import Image from "next/image";

const ReferralIncomeSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-40 py-16">
      {/* Left Side: Earnings Card */}
        <Image
                src="/images/referral.png"
                alt="Workout Preview"
                width={470}
                height={600}
                className="drop-shadow-xl"
              />
      {/* Right Side: Text Content */}
      <div className="lg:w-2/3 mt-8 lg:mt-0 lg:pl-12 max-w-[605px]">
      {/* <Image
                src="/dollarbag.svg"
                alt="dollarbag"
                width={16}
                height={16}
                className="drop-shadow-xl"
              /> */}
        <h2 className="text-[#1F222A] text-[48px] font-bold leading-normal">Turn Referrals into Passive Income</h2>
        <p className="text-[#4E525A] text-[21px] font-normal leading-normal">
          Transform your fitness journey into an income opportunity with exclusive referral perks & commissions.
          Unlike other referral programs, you’ll receive monthly commissions based on ambassador tiers.
        </p>
        <ul className="mt-6 space-y-3 text-[#4E525A] text-[18px] font-normal leading-normal">
          <li className="flex items-center">
            <span className="text-lime-500 mr-2">
              {/* 💰 */}
               <Image src="/whitetick.svg" alt="Icon" width={20} height={20} />
              </span> Share & Earn – Invite friends via your unique link.
          </li>
          <li className="flex items-center">
            <span className="text-lime-500 mr-2">
              {/* 💵 */}
               <Image src="/whitetick.svg" alt="Icon" width={20} height={20} />
              </span> Get Paid – Earn commissions when they subscribe.
          </li>
          <li className="flex items-center">
            <span className="text-lime-500 mr-2">
              {/* 🔓 */}
               <Image src="/whitetick.svg" alt="Icon" width={20} height={20} />
              </span> Unlock Higher Rewards – Progress through tiers & boost earnings.
          </li>
          <li className="flex items-center">
            <span className="text-lime-500 mr-2">
              {/* 🏆 */}
               <Image src="/whitetick.svg" alt="Icon" width={20} height={20} />
              </span> Compete & Win – Join leaderboard challenges & bonuses.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ReferralIncomeSection;
