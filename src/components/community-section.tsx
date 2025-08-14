import { Button } from "@/components/ui/button";
import { linkDocReddit, linkReddit } from "@/lib/links";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-8">
            <Image className="dark:invert" src="/app-ai-interview-buddy/reddit.png" alt="Reddit r/AiInterviewBuddy" width={36} height={36} priority />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">Shaped by the Community</h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">Built with valuable input and feedback from the Reddit community.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              <a href={linkReddit} target="_blank" rel="noopener noreferrer">
                Join r/AiInterviewBuddy
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-2 border-brand-black bg-transparent px-6 py-3 rounded-full font-semibold transition-all duration-200 text-brand-black hover:bg-brand-black hover:!text-white"
            >
              <a href={linkDocReddit} target="_blank" rel="noopener noreferrer">
                Read the Docs
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
