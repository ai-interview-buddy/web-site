import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Rocket } from "lucide-react";
import { linkSignIn } from "@/lib/links";

export function PricingBetaSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Headline + Beta badge */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full bg-brand-yellow text-brand-black px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
            Beta
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black">Join Our Beta - Free for Now</h2>
        </div>

        {/* Single large card */}
        <Card className="relative border-2 border-brand-yellow shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
          {/* subtle “early access” icon */}
          <Rocket className="absolute right-5 top-5 h-8 w-8 text-brand-yellow/30" aria-hidden />

          <CardContent className="px-6 sm:px-10 py-10">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-gray-700">
                We are currently in beta, focused on building the best AI-powered job-hunting companion possible. All features are free
                during beta, but since AI resources are expensive, we will introduce a fair and transparent pricing model later.
              </p>

              <div className="text-left space-y-3 mx-auto max-w-xl">
                <p className="font-semibold text-brand-black">By joining now, you will:</p>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Get unlimited access to all features during beta.</span>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Help shape the product with your feedback.</span>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lock in special perks when we launch paid plans.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href={linkSignIn} passHref>
                  {" "}
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold py-3 rounded-full text-lg transition-all duration-200 hover:scale-105"
                  >
                    Join the Beta →
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
