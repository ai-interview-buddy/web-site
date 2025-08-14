import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-brand-black mb-8">Terms of Service</h1>

            <p className="text-gray-600 mb-8">
              <strong>Effective Date:</strong> 14 Aug 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Welcome to AI Interview Buddy (we, our, or us). By accessing or using our website, web app, or mobile applications
                (collectively, the Service), you agree to be bound by these Terms of Use (Terms). Please read them carefully.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By using the Service, you agree to comply with and be legally bound by these Terms. If you do not agree to these Terms,
                  you must not use the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">2. Eligibility</h2>
                <p className="text-gray-700">
                  You must be at least 18 years old or have the legal capacity to enter into a binding agreement to use the Service. By
                  using the Service, you represent and warrant that you meet this requirement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">3. Account Registration</h2>
                <p className="text-gray-700 mb-4">To access certain features, you may be required to create an account. You agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Provide accurate and complete information.</li>
                  <li>Keep your login credentials secure.</li>
                  <li>Notify us immediately of any unauthorised use of your account.</li>
                </ul>
                <p className="text-gray-700 mt-4">You are responsible for all activities under your account.</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">4. Use of the Service</h2>
                <p className="text-gray-700 mb-4">
                  You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Use the Service in any way that violates applicable laws.</li>
                  <li>
                    Upload, share, or transmit any content that infringes on the rights of others or is harmful, offensive, or unlawful.
                  </li>
                  <li>Attempt to interfere with or disrupt the Service or its security features.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">5. AI Processing</h2>
                <p className="text-gray-700">
                  The Service uses third-party AI providers to process certain user-submitted content, including but not limited to CVs,
                  interview recordings, and job descriptions. By submitting such content, you grant us the right to transmit it to our AI
                  providers for processing solely to provide you with the requested functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">6. Intellectual Property</h2>
                <p className="text-gray-700">
                  All content, features, and functionality of the Service (excluding your user content) are the property of AI Interview
                  Buddy or its licensors. You may not reproduce, distribute, or create derivative works without our prior written
                  permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">7. Privacy</h2>
                <p className="text-gray-700">
                  Your use of the Service is also governed by our{" "}
                  <Link href="/privacy-policy" className="text-[#FFC629] hover:underline">
                    Privacy Policy
                  </Link>
                  , which explains how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">8. Termination</h2>
                <p className="text-gray-700">
                  We may suspend or terminate your account and access to the Service at our sole discretion if you violate these Terms or if
                  we discontinue the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">9. Disclaimers</h2>
                <p className="text-gray-700">
                  The Service is provided `as is` and `as available` without warranties of any kind. We do not guarantee that the Service
                  will be error-free, secure, or available at all times.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700">
                  To the maximum extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages
                  arising out of or related to your use of the Service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">11. Changes to These Terms</h2>
                <p className="text-gray-700">
                  We may modify these Terms at any time. Updated versions will be posted on this page with the `Effective Date` updated.
                  Continued use of the Service constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-[#1D252C] mb-4">12. Contact Us</h2>
                <p className="text-gray-700">
                  If you have any questions about these Terms, please contact us at:
                  <br />
                  Email:{" "}
                  <a href="mailto:contact@aiinterviewbuddy.com" className="text-[#FFC629] hover:underline">
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
