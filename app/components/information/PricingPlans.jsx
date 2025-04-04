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
        <div className="flex flex-col items-center bg-white pt-10 md:pt-16 pb-16 px-6 md:px-0">
            <h2 className="text-[#1F222A] text-center text-[28px] md:text-[48px] font-bold mb-4 max-w-[750px]">
                Choose the Perfect Plan for Your Fitness Journey
            </h2>
            <p className="text-[#4E525A] text-center text-[16px] md:text-[20px] font-medium leading-[24px] md:leading-[30px] mb-6 max-w-[750px]">
                Flexible Membership Options to Suit Your Goals and Lifestyle. Enjoy a 3 or 7-day free trial and find the right fit to start transforming your life today!
            </p>

            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8">
                {["weekly", "monthly", "annual"].map((plan) => (
                    <button
                        key={plan}
                        className={`px-6 py-2 border text-center text-[16px] md:text-[18px] font-extrabold rounded-md ${
                            selectedPlan === plan ? "bg-[#87944D] text-white" : "bg-white text-[#87944D] border-[#87944D]"
                        }`}
                        onClick={() => setSelectedPlan(plan)}
                    >
                        {plan.charAt(0).toUpperCase() + plan.slice(1)}
                    </button>
                ))}
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px]">
                {pricingOptions[selectedPlan].map((plan, index) => (
                    <div 
                        key={index} 
                        className={`p-6 border rounded-lg flex flex-col items-center md:items-start min-h-[500px] w-full max-w-[400px] mx-auto ${
                            index === 1 ? "bg-[#87944D] text-white" : "bg-white border-[#87944D]"
                        }`}
                    >
                        <h3 className="text-[20px] font-bold">{plan.title}</h3>
                        <p className={`text-[40px] md:text-[48px] font-bold pt-2 ${index === 1 ? "text-white" : "text-[#87944D]"}`}>
                            ${plan.price}
                        </p>
                        
                        <ul className="mt-6 mb-6 w-full">
                            {plan.features.map((feature, i) => (
                                <li key={i} className={`flex items-center gap-3 py-2 text-[16px] ${index === 1 ? "text-white" : "text-[#87944D]"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 25" fill="none">
                                        <path d="M3.35501 11.5072C3.58239 11.2865 3.89074 11.1625 4.21225 11.1625C4.53377 11.1625 4.84212 11.2865 5.0695 11.5072L9.35694 15.6704L17.9294 7.34521C18.042 7.23582 18.1756 7.14903 18.3227 7.0898C18.4699 7.03057 18.6276 7.00005 18.7868 7C18.9461 6.99995 19.1038 7.03035 19.2509 7.08948C19.3981 7.14861 19.5318 7.23531 19.6445 7.34462C19.7571 7.45393 19.8465 7.58372 19.9075 7.72657C19.9685 7.86943 19.9999 8.02255 20 8.17719C20.0001 8.33184 19.9687 8.48498 19.9078 8.62788C19.847 8.77077 19.7577 8.90062 19.6451 9.01001L9.35694 19L3.35501 13.172C3.1277 12.9512 3 12.6518 3 12.3396C3 12.0274 3.1277 11.728 3.35501 11.5072Z" 
                                            fill={index === 1 ? "#ffffff" : "#87944D"} 
                                        />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button 
                            className={`w-full py-2 rounded-md mt-auto ${
                                index === 1 ? "bg-white text-[#87944D]" : "bg-[#87944D] text-white"
                            }`}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
