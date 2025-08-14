import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function OpenSourceSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-pollen to-soft-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <div className="w-20 h-20 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-8">
            <Github className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">Built in the Open</h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Fully open-source under MIT license.</p>

          <Button className="bg-brand-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105">
            View on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
