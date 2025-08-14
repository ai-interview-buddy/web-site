import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    features: ["1 CV analysed in career profile", "10 Job positions applied", "1 Interview feedback"],
  },
  {
    name: "Premium",
    badge: "Best Value",
    features: ["Unlimited CVs analysed in career profile", "Unlimited Job positions applied", "Unlimited Interview feedback"],
  },
];

export function PricingCandidateSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">Simple, Transparent Pricing</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl animate-fade-in-up ${
                plan.badge ? "border-brand-yellow shadow-lg scale-105" : "border-gray-200 hover:border-brand-yellow"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-yellow text-brand-black px-4 py-2 rounded-full text-sm font-bold">{plan.badge}</span>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-brand-black">{plan.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-brand-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.badge && (
                  <Button className="w-full bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold py-3 rounded-full text-lg transition-all duration-200 hover:scale-105">
                    Try Premium Free for 7 Days
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
