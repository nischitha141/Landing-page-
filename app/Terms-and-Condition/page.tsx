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
                    Terms of Use & End User License Agreement (EULA) for FormPerfect AI
                </h1>

                <p className="text-[18px] font-normal leading-[100%] mb-6 mt-6 tracking-[0.5px] leading-normal">
                    Welcome to <strong>FormPerfect AI</strong>, These Terms of Use and End User License Agreement (&quot;Agreement&quot;) govern your use of the FormPerfect AI mobile application (the &quot;App&quot;) and the services provided through it (&quot;Services&quot;). This is a legally binding contract between you (&quot;User&quot;, &quot;you&quot;) and FormPerfect AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                    By accessing or using the App, you agree to this Agreement. If you do not agree, please uninstall and discontinue use of the App.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 ">
                    1. License Grant
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We grant you a limited, non-exclusive, non-transferable, revocable license to install and use the FormPerfect AI App for personal, non-commercial use, in accordance with this Agreement and Apple’s App Store Terms of Service.
                </p>


                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">2. App Purpose</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    FormPerfect AI is an AI-powered fitness and wellness application designed to offer:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Personalized workout guidance</li>
                    <li>Real-time posture and form correction using your device’s camera</li>
                    <li>Basic nutrition and wellness insights</li>
                    <li>Subscription-based access to premium features</li>
                </ul>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                    3. Data Usage and Privacy
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We take your privacy seriously. Here&apos;s how we handle your data:

                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li><strong>FormPerfect AI does not collect, track, store, or share any personal data.</strong></li>
                    <li>We do <strong>not access IDFA,</strong> cookies, or any advertising identifiers.</li>
                    <li>The device camera is used <strong>only for real-time posture correction </strong> and<strong> does not record, store, or transmit</strong> any image or video data.</li>
                    <li>We do <strong>not collect usage analytics or behavior metrics </strong> within the app.</li>
                </ul>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    For subscription handling, we integrate Superwall, a third-party paywall and purchase management tool.
                    Superwall may collect:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Purchase events (e.g., subscription activated or canceled)</li>
                    <li>Device-level metadata needed for subscription access
                        Superwall’s data use is strictly limited to <strong>subscription validation and access control. No data is used for advertising or tracking across other apps.</strong> You can learn more by reviewing  <a
                            href="https://superwall.com/privacy"
                            className="text-blue-600 underline cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Superwall’s Privacy Policy
                        </a></li>

                </ul>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    For more details, refer to our Privacy Policy
                </p>

                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">4. Subscription & Payments</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    FormPerfect AI offers premium features through auto-renewable Apple In-App Subscriptions via Superwall:
                    Plans:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Weekly: $9.99/week</li>
                    <li>Monthly: $24.99/month</li>
                    <li>Annual: $150.99/year</li>

                </ul>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    (Prices may vary based on region and currency)
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    Key Payment Terms:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing period.</li>
                    <li>Payment is charged to your Apple ID.</li>
                    <li>
                        You can manage or cancel subscriptions in your Apple device’s{" "}
                        <strong className="font-semibold">Settings &gt; Subscriptions</strong>.
                    </li>

                </ul>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We do not access or process any billing information ourselves.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                5. User Responsibilities
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                By using the App, you agree to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Use the App only for lawful, personal fitness purposes</li>
                    <li>Not attempt to reverse-engineer or tamper with the App</li>
                    <li>Not share your login credentials or paid access with others
                        
                    </li>
                    <li>Consult a physician before starting any new fitness program

                    </li>

                </ul>


                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">6. Termination</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                You may terminate this Agreement by uninstalling the App. We may suspend or terminate your access if you violate this Agreement or misuse the App.
                </p>
               

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                7. Intellectual Property
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                All rights, titles, and interests in the App, including content, code, and design, are owned by FormPerfect AI or its licensors. You may not reproduce, redistribute, or reuse any part of the App without written permission.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-3 mt-2">
                8. No Warranties
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                The App is provided &quot;as is&quot; and &quot;as available.&quot; We make no guarantees regarding fitness results or uninterrupted service availability.
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                Use of the App is at your own risk. You are solely responsible for any injury or health issue that arises during or after use.
                </p>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-3 mt-2">
                9. Limitation of Liability
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                To the extent permitted by law, FormPerfect AI shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-3 mt-2">
                10. Updates & Modifications
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                We may update this Agreement from time to time. Continued use of the App after an update constitutes acceptance of the new terms.
                </p>
                </p>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">11. Contact Us
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-2 mt-2 tracking-[0.5px] leading-normal ">
                For any questions, support, or legal concerns, contact us at:
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-2 tracking-[0.5px] leading-normal"><strong>FormPerfect AI Team</strong></p>
                <p className="text-[18px] font-normal leading-[100%] mb-2  tracking-[0.5px] leading-normal">
                    Email: <a href="mailto:email@dotperfectworld.com" className="underline">email@dotperfectworld.com</a>
                </p>
                <p className="text-[18px] font-normal leading-[100%] mt-6 tracking-[0.5px] leading-normal">
                    Website: <a href="https://www.formperfect.ai" className="underline">www.formperfect.ai</a>
                </p>
            </div>


            <div className="bg-white text-[#1F222A] font-urbanist px-6 md:px-20 py-12">
                <h1 className="font-urbanist font-extrabold text-[30px] leading-[44px] tracking-[-0.012em]"
                >
                    End User License Agreement (EULA) for FormPerfect AI
                </h1>


                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                    1. License Grant
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    FormPerfect AI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) grants you (&quot;you&quot; or &quot;user&quot;) a personal, non-exclusive, non-transferable, limited license to install and use the FormPerfect AI mobile application (the &quot;App&quot;) for lawful, non-commercial purposes, in accordance with this EULA and the Apple App Store Terms of Service.

                </p>


                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">2. Subscription Details</h3>
                <p className="text-[18px] font-bold leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    Auto-Renewable Subscriptions Offered:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>FormPerfect Premium - Weekly Plan</li>
                    <li>FormPerfect Premium - Monthly Plan</li>
                    <li>FormPerfect Premium - Annual Plan</li>

                </ul>
                <p className="text-[18px] font-bold leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    Length of Subscriptions:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Weekly: 7 days</li>
                    <li>Monthly: 1 month</li>
                    <li>Annual: 1 year</li>

                </ul>
                <p className="text-[18px] font-bold leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal mt-2">
                    Pricing:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Weekly: $9,99/week</li>
                    <li>Monthly: $24.99/month</li>
                    <li>Annual: $150.99/year</li>
                    <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                        (Prices are subject to regional variations and applicable taxes.)
                    </p>
                </ul>
                <p className="text-[18px] font-bold leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal mt-2">
                    3. Payment & Renewal
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Payment will be charged to your Apple ID at confirmation of purchase.</li>
                    <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
                    <li>Your account will be charged for renewal within 24 hours before the end of the current period.</li>
                    <li>You may manage or cancel subscriptions in your Apple ID settings after purchase.</li>
                    <li>No refunds are issued for unused portions of the subscription term.</li>

                </ul>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                    4. User Data & Privacy
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    Use of the App requires access to certain personal data (e.g., name, email, fitness preferences). By using the App, you agree to our Privacy Policy and Terms of Use.
                </p>

                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">5. Prohibited Use</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Reverse engineer or attempt to extract the source code</li>
                    <li>Republish or sell content within the App</li>
                    <li>Circumvent subscription mechanisms</li>
                    <li>Use the App in any manner inconsistent with this EULA</li>
                </ul>



                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                    6. Disclaimer
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    The App is provided &quot;as is.&quot; We do not guarantee fitness results, physical safety, or continuous availability. Always consult a healthcare professional before starting a new workout program.
                </p>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2" >
                    7. Limitation of Liability
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    We are not liable for any injuries, damages, or losses resulting from use or inability to use the App, including misuse of AI recommendations or workout plans.
                </p>



                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">8. Termination</h2>
                <p className="text-[18px] font-normal leading-[100%] mb-2 mt-2 tracking-[0.5px] leading-normal ">
                    We may suspend or terminate your access to the App without notice if we determine you have violated this EULA.
                </p>
                <p className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4"><strong>9. Contact Us</strong></p>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-[18px] font-normal leading-[100%] mb-2  tracking-[0.5px] leading-normal">
                    Email: <a href="mailto:email@dotperfectworld.com" className="underline">email@dotperfectworld.com</a>
                </p>

            </div>

            <Footer />
        </div>
    );
}
