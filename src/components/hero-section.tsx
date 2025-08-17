"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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
                Record, review, and refine your interviews, track opportunities, and tailor your CV all in one AI-powered workspace.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">{/* CTA buttons omitted for brevity */}</div>
          </div>

          {/* Mockup with Modal */}
          <div className="relative animate-fade-in-up animation-delay-200 flex justify-center z-10">
            {/* Clickable Image Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative cursor-pointer w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-pollen to-soft-white p-4 sm:p-6 transition-transform hover:scale-105 z-10"
              aria-label="View larger image"
            >
              <div className="relative w-full h-0 pb-[66.66%]">
                <Image
                  src="/ai-interview-dashboard.png"
                  alt="Desktop app showing interview feedback"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </button>

            {/* Background Decoration – pushed behind */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-yellow/20 rounded-full blur-xl z-0" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-golden-honey/20 rounded-full blur-xl z-0" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setIsModalOpen(false)}>
          <div
            className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-xl bg-white p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal click from closing
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-black hover:text-gray-600 z-10 cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-0 pb-[66.66%]">
              <Image src="/ai-interview-dashboard.png" alt="Enlarged dashboard mockup" fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
