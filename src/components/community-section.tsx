import { Button } from "@/components/ui/button";
import { Users, ExternalLink } from "lucide-react";

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-8">
            <Users className="h-10 w-10 text-brand-black" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">Shaped by the Community</h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Built with input from Reddit job seekers and hiring experts.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105">
              Join the Community
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 bg-transparent"
            >
              Read the Docs
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
