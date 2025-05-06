// app/privacy-policy/page.tsx (if using App Router)
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/information/footer";

export default function PrivacyPolicyPage() {
    return (
        <div
            className="bg-center bg-no-repeat bg-cover w-full bg-white min-h-screen"
            style={{ backgroundImage: "url('/Eclipse.png')" }}
        >
            <Navbar />

            <div className="bg-white text-[#1F222A] font-urbanist px-6 md:px-20 py-12">
                <h1 className="font-urbanist font-extrabold text-[30px] leading-[44px] tracking-[-0.012em]"
                >
                    Privacy Policy for FormPerfect AI
                </h1>

                <p className="text-[18px] font-normal leading-[100%] mb-6 mt-6 tracking-[0.5px] leading-normal">
                    Welcome to <strong>FormPerfect AI</strong>, your AI-powered fitness and wellness companion.
                    This Privacy Policy explains how we collect, use, protect, and manage your information when you use our mobile application (the “App”).
                    By using the App, you agree to the practices described in this Privacy Policy.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    1. Information We Collect
                </h2>

                <h3 className="text-[18px] font-semibold mb-2">a. Personal Information</h3>
                <ul className="list-disc pl-6 pt-2 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Age and gender (optional)</li>
                    <li>Fitness goals, preferences, and health-related inputs (optional)</li>
                    <li>Authentication credentials (e.g., Google or Apple Sign-In)</li>
                </ul>

                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">b. Device and App Usage Information</h3>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Device type, model, and operating system version</li>
                    <li>App interaction data (e.g., completed workouts, session progress, calories burned)</li>
                </ul>

                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">c. Camera Access</h3>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Your device’s camera is used <strong>only</strong> for real-time posture and form analysis.</li>
                    <li><strong>We do not record, store, transmit, or share</strong> any video or image data.</li>
                </ul>

                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">d. Subscription & Purchase Information</h3>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Product selections</li>
                    <li>Purchase history and related metadata</li>
                </ul>


                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Provide personalized workouts, fitness recommendations, and progress tracking</li>
                    <li>Offer AI-based real-time form correction</li>
                    <li>Deliver nutrition suggestions and wellness tips</li>
                    <li>Manage your account and in-app preferences</li>
                    <li>Analyze usage trends to improve user experience</li>
                    <li>Communicate support updates and service notifications</li>
                    <li>Facilitate subscriptions and access through <strong>Superwall</strong></li>
                </ul>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    3. Data Storage and Security
                </h2>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Encrypted data storage on secure servers</li>
                    <li>SSL encryption for data transmission</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Routine security reviews and best-practice compliance</li>
                </ul>

               

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    4. Third-Party Services
                </h2>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>We use <strong>Superwall</strong> to manage subscriptions and purchases. As part of this integration, Superwall may collect:</li>
                    <ul className="list-inside list-disc pl-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                        <li>Device identifiers (e.g., IDFA for iOS)</li>
                        <li>Purchase events and metadata</li>
                        <li>User interactions with subscription screens</li>
                    </ul>
                    <li>Superwall uses this data strictly for subscription functionality and analytics. For details, please review Superwall’s Privacy Policy.</li>
                </ul>

             

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    5. App Tracking Transparency (ATT)
                </h2>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>In compliance with Apple’s App Tracking Transparency (ATT) framework, we request your explicit permission before:</li>
                    <ul className="list-inside list-disc pl-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                        <li>Tracking activity across apps and websites</li>
                        <li>Sharing device identifiers (like IDFA) with third parties such as Superwall for subscription personalization</li>
                    </ul>
                    <li>You can update your tracking preferences any time via your device settings.</li>
                </ul>

             

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    6. Your Privacy Controls
                </h2>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>You can manage your data at any time:</li>
                    <ul className="list-inside list-disc pl-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                        <li>Review or update your personal information</li>
                        <li>Delete your account and request permanent deletion of your data</li>
                        <li>Revoke camera access or adjust permissions through device settings</li>
                    </ul>
                    <li>To submit a request, please contact: <a href="mailto:email@dotperfectworld.com" className="underline">email@dotperfectworld.com</a></li>
                </ul>

               

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    7. Changes to This Privacy Policy
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We may update this Privacy Policy from time to time.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    The updated version will take effect immediately upon posting.
                </p>


                <h2 className="text-[24px] font-bold leading-[38px] tracking-[-0.008em] mt-10 mb-4">8. Contact Us</h2>
                <p className="text-[18px] font-normal leading-[100%] mb-2 mt-2 tracking-[0.5px] leading-normal ">
                    If you have questions or concerns regarding this Privacy Policy, feel free to reach out:
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-2 tracking-[0.5px] leading-normal"><strong>FormPerfect AI Team</strong></p>
                <p className="text-[18px] font-normal leading-[100%] mb-2  tracking-[0.5px] leading-normal">
                    Email: <a href="mailto:email@dotperfectworld.com" className="underline">email@dotperfectworld.com</a>
                </p>
                <p className="text-[18px] font-normal leading-[100%] mt-6 tracking-[0.5px] leading-normal">
                    Website: <a href="https://www.formperfect.ai" className="underline">www.formperfect.ai</a>
                </p>
            </div>




            <Footer />
        </div>
    );
}
