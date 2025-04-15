'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import Footer from '../components/information/footer'; // Import your Footer component

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        agree: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
        // if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
        if (!formData.message) newErrors.message = 'Message is required';
        if (!formData.agree) newErrors.agree = 'You must agree to our privacy policy';
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        // Check if the input is a checkbox, cast e.target as HTMLInputElement
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked; // Explicitly cast to HTMLInputElement
            setFormData(prev => ({
                ...prev,
                [name]: checked, // Use `checked` for checkboxes
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value, // Use `value` for text inputs and textareas
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setSubmitting(true);
        try {
            const res = await fetch('http://51.20.81.95:3005/api/auth/userEnquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    phone_number: formData.phoneNumber,
                    message: formData.message,
                }),
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    agree: false,
                });
                setErrors({});
            } else {
                alert('Something went wrong!');
            }
        } catch (err) {
            alert('Error sending message');
        } finally {
            setSubmitting(false);
        }
    };


    return (

        <div className="relative bg-white min-h-screen overflow-hidden">
            {/* Decorative Gradient SVG - Top Right */}
            <div className="absolute top-0 right-0 z-0">
                <svg
                    width="836"
                    height="789"
                    viewBox="0 0 836 789"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_5530_21553)">
                        <circle
                            cx="610.145"
                            cy="178.145"
                            r="410"
                            transform="rotate(15 610.145 178.145)"
                            fill="url(#paint0_linear_5530_21553)"
                            fillOpacity="0.24"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_5530_21553"
                            x="0.0437012"
                            y="-431.956"
                            width="1220.2"
                            height="1220.2"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_5530_21553" />
                        </filter>
                        <linearGradient
                            id="paint0_linear_5530_21553"
                            x1="618.765"
                            y1="-181.853"
                            x2="756.801"
                            y2="323.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#A4B168" />
                            <stop offset="1" stopColor="#D0EA59" stopOpacity="0.8" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative z-10">
                {/* Navbar */}
                <Navbar />

                <div className="max-w-6xl mx-auto px-4 py-12 flex gap-12">
                    {/* Form */}
                    <form className="flex-1 space-y-6" onSubmit={handleSubmit}>
                        <h2 className="text-3xl font-bold">Contact Us</h2>
                        <p className='font-semibold text-2xl leading-none tracking-[-0.5%]'>Reach out to our friendly team with any app questions!</p>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <div className=" mb-[24px] font-semibold h-[20px] gap-1 text-[#414651]">
                                    First Name *
                                </div>
                                <input
                                    name="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full border border-[#E0E0E1] p-3 rounded-md font-semibold text-[16px] leading-none tracking-[-0.3%] text-[#717680]"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            </div>
                            <div className="flex-1">
                                <div className="mb-[24px]  font-semibold h-[20px] gap-1 text-[#414651]">
                                    Last Name *
                                </div>
                                <input
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full border border-[#E0E0E1] p-3 rounded-md font-semibold text-[16px] leading-none tracking-[-0.3%] text-[#717680]"
                            
                                />
                                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                            </div>
                        </div>
                        <div className="w-[75px] font-semibold h-[20px] gap-1 text-[#414651]">
                            Email *
                        </div>
                        <input
                            name="email"
                            placeholder="you@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-[#E0E0E1] p-3 rounded-md font-semibold text-[16px] leading-none tracking-[-0.3%] text-[#717680]"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <div className=" font-semibold h-[20px] gap-1 text-[#414651]">
                            Phone Number
                        </div>
                        <input
                            name="phoneNumber"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full border border-[#E0E0E1] p-3 rounded-md font-semibold text-[16px] leading-none tracking-[-0.3%] text-[#717680]"
                        />
                        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                        <div className="w-[75px] font-semibold h-[20px] gap-1 text-[#414651]">
                            Message *
                        </div>
                        <textarea
                            name="message"
                            placeholder="Leave us a message..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-[#E0E0E1] p-3 rounded-md font-semibold text-[16px] leading-none tracking-[-0.3%] text-[#717680]"
                            rows={4}
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                        <label className="flex items-center gap-2 font-normal text-md leading-text-md tracking-[0%] text-[#4E525A]">
                            <input
                                type="checkbox"
                                name="agree"
                                checked={formData.agree}
                                onChange={handleChange}
                            />
                            You agree to our friendly privacy policy.
                        </label>
                        {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="w-full  bg-[#D0EA59] text-[#35383F] font-bold py-3 px-6 rounded-[20px] pt-4 pr-6 pb-4 pl-6 gap-[10px] hover:opacity-90 font-extrabold text-[18px] leading-none tracking-[-0.4%]"
                        >
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {success && <p className="text-green-600 font-semibold text-[16px] leading-none tracking-[-0.3%] mt-2 ">Message sent successfully!</p>}
                    </form>

                    {/* Image side */}
                    <div className="flex-1">
                        <img
                            src="/contact-side-image.png"
                            alt="Contact Us"
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
