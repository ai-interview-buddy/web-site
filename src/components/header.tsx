"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-brand-black">AI Interview Buddy</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-brand-black hover:text-golden-honey transition-colors">
              Features
            </a>
            <a href="#community" className="text-brand-black hover:text-golden-honey transition-colors">
              Community
            </a>
            <a href="#pricing" className="text-brand-black hover:text-golden-honey transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-brand-black hover:text-golden-honey transition-colors">
              Docs
            </a>
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-black hover:text-golden-honey transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Features
              </a>
              <a href="#community" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Community
              </a>
              <a href="#pricing" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Pricing
              </a>
              <a href="#docs" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Docs
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold py-2 rounded-full">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
