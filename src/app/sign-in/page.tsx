import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { linkAndroid, linkDocs, linkIos, linkWebApp } from "@/lib/links";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-black mb-4">Sign In to AI Interview Buddy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred platform to access your interview analyse tool and job tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Apple Store */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-brand-black mb-3">Apple Store</h2>
                <p className="text-gray-600 mb-6">
                  Download our iOS app for the best mobile experience with offline access and push notifications.
                </p>
              </div>
              <Button
                asChild
                className="w-full bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <a href={linkIos}>Download for iOS</a>
              </Button>
            </div>

            {/* Play Store */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-brand-black mb-3">Play Store</h2>
                <p className="text-gray-600 mb-6">
                  Get our Android app with full functionality, voice recording, and seamless sync across devices.
                </p>
              </div>
              <Button
                asChild
                className="w-full bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg"
              >
                <a href={linkAndroid}>Download for Android </a>
              </Button>
            </div>

            {/* Web App */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-brand-yellow to-golden-honey rounded-2xl flex items-center justify-center">
                  <svg className="w-12 h-12 text-brand-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-brand-black mb-3">Web App</h2>
                <p className="text-gray-600 mb-6">
                  Access all features instantly in your browser. No download required, works on any device.
                </p>
              </div>
              <Button className="w-full bg-brand-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg">
                <a href={linkWebApp}>Launch Web App </a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              New to AI Interview Buddy? <span className="font-semibold">Create your free account</span> and start preparing for your dream
              job today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                variant="outline"
                className="border-brand-yellow text-brand-black hover:bg-brand-yellow hover:text-brand-black bg-transparent"
              >
                <a href={linkDocs}>Learn More About Features</a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
