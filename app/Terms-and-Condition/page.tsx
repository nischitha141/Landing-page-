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
                    Terms of Service
                </h1>

                <p className="text-[18px] font-normal leading-[100%] mb-6 mt-6 tracking-[0.5px] leading-normal">
                    Welcome to <strong>FormPerfect AI</strong>, your AI-powered fitness and wellness companion.
                    This Privacy Policy explains how we collect, use, protect, and manage your information when you use our mobile application (the “App”).
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 ">
                1. Use of Services
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                FormPerfect AI provides AI-powered fitness coaching, workout tracking, form correction, and personalized health insights. You may use our Services only if you are legally capable of forming a binding contract and in compliance with these Terms.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                2. Account Registration
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                To access certain features, you must create an account. You agree to provide accurate and complete information and to keep your login credentials secure. You are responsible for all activities that occur under your account.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                3. Subscription & Billing
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                FormPerfect AI may offer free trials, subscriptions, or in-app purchases. Payment details, billing cycles, and cancellation policies are disclosed at the time of purchase and managed via the app store (Apple App Store / Google Play Store). You are responsible for any charges incurred.
                </p>

                
                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">4. User Conduct</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                You agree not to:     
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Use the App for any illegal or unauthorized purpose.</li>
                    <li>Interfere with or disrupt the operation of the App.</li>
                    <li>Attempt to access accounts, systems, or data without authorization.</li>

                </ul>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                5. Intellectual Property
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                All content, features, and functionality of the App—including but not limited to text, graphics, logos, and software—are owned by or licensed to us and protected under intellectual property laws.
                </p>


                <h3 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">6. Termination and Deletion</h3>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                You may delete your account at any time within the App. Upon deletion:    
                </p>
                <ul className="list-disc pl-6 mb-6 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                    <li>Your account will be deactivated and removed from active user records.</li>
                    <li>We will retain your email address and limited associated metadata to prevent abuse of free trials and for legal and operational purposes.</li>
                    <li>Some non-personal or anonymized data may be retained in backup systems for a limited time as part of our data integrity policies.</li>

                </ul>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4 mt-2">
                7. Limitation of Liability
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of (or inability to use) the App.
                </p>

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-3 mt-2">
                8. Modifications to Terms
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                We may update these Terms from time to time. We will notify you of any material changes via email or in-app notification. Continued use of the App after such updates constitutes your acceptance of the revised Terms.
                </p>
                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-3 mt-2">
                9. Governing Law
                </h2>
                <p className="text-[18px] font-normal leading-[100%] mb-1 text-[18px] font-normal leading-[100%] tracking-[0.5px] leading-normal">
                These Terms shall be governed by the laws of [Insert Jurisdiction], without regard to its conflict of laws principles.
                </p>

                

                <h2 className="text-[20px] font-bold leading-[38px] tracking-[-0.008em] mb-4">9. Contact Us</h2>
                <p className="text-[18px] font-normal leading-[100%] mb-2 mt-2 tracking-[0.5px] leading-normal ">
                If you have any questions about these Terms, please contact us at:
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
