import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                An AI-First App to <span className="text-brand-yellow">Get You Hired</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                Record, review, and refine your interviews, track opportunities, and tailor your CV — all in one AI-powered workspace.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold px-8 py-3 rounded-full text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  App Store
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          {/* Mockups */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="relative z-10">
              {/* Desktop Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 mb-8">
                <div className="bg-gradient-to-br from-pollen to-soft-white rounded-xl p-6 h-64 flex items-center justify-center">
                  <img
                    src="/ai-interview-dashboard.png"
                    alt="Desktop app showing interview feedback"
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-3 w-32">
                <div className="bg-gradient-to-br from-brand-yellow to-golden-honey rounded-lg p-3 h-24 flex items-center justify-center">
                  <img src="/placeholder-qhsrt.png" alt="Mobile app showing job tracking" className="rounded shadow-sm max-w-full h-auto" />
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-golden-honey/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
