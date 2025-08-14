import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, User, Briefcase, Sparkles } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Interview Feedback That Works",
    description: "AI analyses every question and scores structure, clarity, and impact.",
  },
  {
    icon: User,
    title: "Career Profiles",
    description: "Multiple CVs reviewed against role-specific criteria.",
  },
  {
    icon: Briefcase,
    title: "Smarter Job Tracking",
    description: "Paste a job link; auto-capture company, title, salary, and skills.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Applications",
    description: "Generate cover letters, track salaries, add notes.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-soft-white to-pollen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            Everything You Need to Land the Job You Deserve
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-brand-black" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
