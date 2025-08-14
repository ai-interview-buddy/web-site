"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { linkDocs, linkSignIn } from "@/lib/links";

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
          <h1 className="flex items-center space-x-3 flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image className="dark:invert" src="/app-ai-interview-buddy/logo.png" alt="AI Interview Buddy Logo" width={60} height={38} priority />
              <span className="text-xl font-bold text-brand-black">AI Interview Buddy</span>
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-brand-black hover:text-golden-honey transition-colors">
              Features
            </Link>
            <Link href="/#community" className="text-brand-black hover:text-golden-honey transition-colors">
              Community
            </Link>
            <Link href="/#pricing" className="text-brand-black hover:text-golden-honey transition-colors">
              Pricing
            </Link>
            <a href={linkDocs} className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
              Documentation
            </a>
          </nav>

          {/* Sign In Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg">
              <Link href={linkSignIn}>Sign In</Link>
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
              <Link href="/#features" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Features
              </Link>
              <Link href="/#community" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Community
              </Link>
              <Link href="/#pricing" className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Pricing
              </Link>
              <a href={linkDocs} className="block px-3 py-2 text-brand-black hover:text-golden-honey transition-colors">
                Documentation
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-brand-yellow hover:bg-golden-honey text-brand-black font-semibold py-2 rounded-full">
                  <Link href={linkSignIn}>Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
