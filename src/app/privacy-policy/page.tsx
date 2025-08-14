import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-brand-black mb-8">Privacy Policy</h1>

            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> 14 Aug 2025
            </p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <p>
                AI Interview Buddy ("we", "our", or "us") values your privacy and is committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, and safeguard your data when you use our website, web app, and mobile
                applications.
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">1. Information We Collect</h2>

                <h3 className="text-xl font-medium text-brand-black mb-3">1.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Account registration details such as name, email address, and authentication credentials (when signing in via social or
                    email).
                  </li>
                  <li>Uploaded CVs, interview recordings, and job application data that you choose to store within the app.</li>
                </ul>

                <h3 className="text-xl font-medium text-brand-black mb-3 mt-6">1.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Cookies and tracking technologies: We use cookies to store anonymised user actions for analytics and to maintain session
                    state.
                  </li>
                  <li>Session data: For authentication and security purposes, we store temporary session information when you log in.</li>
                  <li>
                    Device and usage data: Browser type, device type, operating system, IP address (anonymised), pages visited, and actions
                    taken.
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-brand-black mb-3 mt-6">1.3 Data from Third-Party Services</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    AI providers: When you use features like interview analysis or CV review, your content may be sent securely to trusted
                    AI service providers for processing.
                  </li>
                  <li>
                    Analytics providers: We may use third-party analytics tools to understand how users interact with our app in an
                    aggregated, anonymised form.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our services.</li>
                  <li>Authenticate your account and maintain your session.</li>
                  <li>Analyse user behaviour to improve features and user experience.</li>
                  <li>Process your content through AI providers to deliver requested results (e.g., interview feedback, CV review).</li>
                  <li>Communicate updates, service changes, or promotional content (if you opt in).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">3. How We Share Your Information</h2>
                <p className="mb-4">We do not sell your personal information. We may share information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI service providers solely for processing your requested tasks.</li>
                  <li>Analytics providers to collect anonymised usage data.</li>
                  <li>Service partners who help with hosting, authentication, and infrastructure.</li>
                  <li>Authorities if required by law, to comply with legal obligations, or to protect our rights.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">4. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We retain your data for as long as your account is active or as needed to provide services.</li>
                  <li>You may request deletion of your account and associated data at any time by contacting us.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="mb-4">We use:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Essential cookies for login sessions and security.</li>
                  <li>Analytics cookies to track anonymised interactions and improve our service.</li>
                </ul>
                <p className="mt-4">You can manage cookie preferences in your browser settings.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">6. Security</h2>
                <p>
                  We implement industry-standard measures to protect your data from unauthorised access, alteration, disclosure, or
                  destruction. However, no method of transmission or storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">7. International Data Transfers</h2>
                <p>
                  Your data may be transferred to and processed in countries outside of your residence. We ensure adequate protection
                  through contractual safeguards where required.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">8. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have rights to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, update, or delete your personal information.</li>
                  <li>Restrict or object to certain processing.</li>
                  <li>Withdraw consent at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this policy from time to time. The latest version will always be posted on this page with the "Effective
                  Date" updated accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-brand-black mb-4">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or your data, contact us at:
                  <br />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@aiinterviewbuddy.com" className="text-brand-yellow hover:text-golden-honey transition-colors">
                    contact@aiinterviewbuddy.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
