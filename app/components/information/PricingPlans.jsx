"use client";

import { useState } from "react";

const pricingOptions = {
    weekly: [
        { title: "Standard Plan", price: 4.99, features: ["Core AI-driven fitness tracking", "Basic workout routines", "Daily calorie tracking", "Limited progress analytics", "Community access"] },
        { title: "Premium Plan", price: 9.99, features: ["Everything in Standard", "Personalized AI fitness coaching", "Custom workout plans based on goals", "Access to premium workout videos", "Weekly progress report and insights", "24/7 priority customer support"] },
    ],
    monthly: [
        { title: "Standard Plan", price: 14.99, features: ["Core AI-driven fitness tracking", "Basic workout routines", "Daily calorie tracking", "Limited progress analytics", "Community access"] },
        { title: "Premium Plan", price: 29.99, features: ["Everything in Standard", "Personalized AI fitness coaching", "Custom workout plans based on goals", "Access to premium workout videos", "Weekly progress report and insights", "24/7 priority customer support"] },
    ],
    annual: [
        { title: "Standard Plan", price: 99.99, features: ["Core AI-driven fitness tracking", "Basic workout routines", "Daily calorie tracking", "Limited progress analytics", "Community access"] },
        { title: "Premium Plan", price: 199.99, features: ["Everything in Standard", "Personalized AI fitness coaching", "Custom workout plans based on goals", "Access to premium workout videos", "Weekly progress report and insights", "24/7 priority customer support"] },
    ],
};

export default function PricingPlans() {
    const [selectedPlan, setSelectedPlan] = useState("weekly");

    return (
        <div className="flex flex-col items-center py-10 bg-white  ">
            <h2 className="text-[#1F222A] text-center text-[48px] font-bold mb-4 max-w-[750px]">Choose the Perfect Plan for Your Fitness Journey</h2>
            <p className="text-[#4E525A] text-center text-[20px] font-medium leading-[30px] mb-6 max-w-[750px] ">Flexible Membership Options to Suit Your Goals and Lifestyle. Enjoy a 3 or 7-day free trial and find the right fit to start transforming your life today!</p>

            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8">
                {["weekly", "monthly", "annual"].map((plan) => (
                    <button
                        key={plan}
                        className={`px-6 py-2 border text-center text-[18px] font-extrabold leading-[27px] rounded-md font-medium ${selectedPlan === plan ? "bg-[#87944D] text-white" : "bg-white text-[#87944D]"}`}
                        onClick={() => setSelectedPlan(plan)}
                    >
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}
                    </button>
                ))}
            </div>

            {/* Pricing Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                {pricingOptions[selectedPlan].map((plan, index) => (
                    <div key={index} className={`p-6 border rounded-lg relative  justify-center w-[450px] h-[502px] ${index === 1 ? "bg-[#87944D] text-white" : "bg-white border-[#87944D] "}`}>
                        <div className={`flex flex-col items-center`} >
                            <h3 className="text-[#35383F] text-center text-[20px] font-bold leading-[28px]">{plan.title}</h3>
                            <p className={`text-center pt-2 text-[56px] font-bold leading-[67.2px] ${index === 1 ? "text-white" : "text-[#87944D]"}`}>${plan.price}</p>
                        </div>
                        <ul className="mb-6 mt-10 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className={`flex items-center  gap-4 py-2 w-full  text-[16px] font-medium leading-[24px] ${index === 1 ? "text-white" : "text-[#87944D]"}`}>
                                    <span>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 25" fill="none">
                                            <path d="M3.35501 11.5072C3.58239 11.2865 3.89074 11.1625 4.21225 11.1625C4.53377 11.1625 4.84212 11.2865 5.0695 11.5072L9.35694 15.6704L17.9294 7.34521C18.042 7.23582 18.1756 7.14903 18.3227 7.0898C18.4699 7.03057 18.6276 7.00005 18.7868 7C18.9461 6.99995 19.1038 7.03035 19.2509 7.08948C19.3981 7.14861 19.5318 7.23531 19.6445 7.34462C19.7571 7.45393 19.8465 7.58372 19.9075 7.72657C19.9685 7.86943 19.9999 8.02255 20 8.17719C20.0001 8.33184 19.9687 8.48498 19.9078 8.62788C19.847 8.77077 19.7577 8.90062 19.6451 9.01001L9.35694 19L3.35501 13.172C3.1277 12.9512 3 12.6518 3 12.3396C3 12.0274 3.1277 11.728 3.35501 11.5072Z" fill={index === 1 ? "#ffffff" : "#87944D"} />
                                        </svg>
                                    </span>  
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={` w-[88%] absolute bottom-6  left-0 right-0 mx-auto py-2 rounded-md ${index === 1 ? "bg-white text-[#87944D] " : "bg-[#87944D]  text-white"}`}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
