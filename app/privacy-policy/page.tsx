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
                    This Privacy Policy explains how we collect, use, and protect your data when you use our mobile application (the &quot;App&quot;). By using the App, you agree to the practices outlined below.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                    1. Data Collection by FormPerfect AI
                </h2>

                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    FormPerfect AI does <strong>not collect, track, or store any user data for advertising or profiling purposes.</strong>
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We do not access or use device identifiers (like IDFA), cookies, or cross-app tracking tools.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We only use your device’s camera during live sessions to provide <strong>real-time posture and form analysis. No video or image data is recorded, stored, or transmitted.</strong>
                </p>


                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">2. Third-Party Services – Superwall</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We use a third-party service provider,<strong>Superwall</strong>, to manage subscriptions and paywall access.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    Superwall<strong> may collect limited device-level information </strong> required to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Validate purchases</li>
                    <li>Manage subscription access</li>
                    <li>Track subscription status (e.g., renewals or cancellations)</li>
                    <li>Analyze in-app purchase performance</li>
                    <strong>Important Notes:</strong>
                    <li>Superwall does <strong>not sell user data </strong>  or use it for <strong> advertising purposes.</strong> </li>
                    <li>Superwall’s data handling is limited to subscription-related functionality.</li>
                    <li>
                        You can learn more by reviewing{" "}
                        <a
                            href="https://superwall.com/privacy"
                            className="text-blue-600 underline cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Superwall’s Privacy Policy
                        </a>
                    </li>


                </ul>

                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">3. App Tracking Transparency (ATT)</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                Since<strong>FormPerfect AI does not track users,</strong> we <strong>do not display an ATT prompt.</strong>
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                Superwall does <strong>not track user activity across other apps or websites</strong> for advertising, and therefore ATT permission is not applicable under Apple’s guidelines.
                </p>

                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                All payments are processed via Apple In-App Purchase through Superwall.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                FormPerfect AI does not access or store:
                </p>
                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">4. Subscription & Payment Information</h3>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Payment method details</li>
                    <li>Billing information</li>
                    <li>Apple ID or personal financial data</li>

                </ul>


                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                5. Your Privacy Choices
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                As we do not collect personal data directly, there is no user profile data to manage or delete within FormPerfect AI.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                However, you may:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Manage camera permissions through your device settings</li>
                    <li>Cancel subscriptions via your Apple ID subscription settings
                    For any queries related to third-party data processing (e.g., Superwall), we encourage you to contact them directly or reach out to us for guidance.</li>
                    
                </ul>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                6. Changes to This Policy
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                We may update this Privacy Policy to reflect changes in our services or legal obligations.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                When we do, the updated policy will be posted in the app and on our website.
                </p>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">
                7. Contact Us
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                If you have questions or concerns, please contact us:
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
