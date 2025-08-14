import {
  linkAndroid,
  linkDocFeatures,
  linkDocReportBug,
  linkDocReportSecurity,
  linkDocRequesFeature,
  linkDocs,
  linkGitHub,
  linkIos,
  linkReddit,
  linkWebApp,
} from "@/lib/links";
import { Github, ExternalLink } from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: linkDocFeatures },
      { name: "App Store", href: linkIos },
      { name: "Google Play", href: linkAndroid },
      { name: "Web App", href: linkWebApp },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Documentation", href: linkDocs },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Get Engaged",
    links: [
      { name: "Reddit", href: linkReddit, icon: ExternalLink },
      { name: "GitHub", href: linkGitHub, icon: Github },
      { name: "Request a Feature", href: linkDocRequesFeature },
      { name: "Report a Bug", href: linkDocReportBug },
      { name: "Report a Security Threat", href: linkDocReportSecurity },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6 text-brand-yellow">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-300 hover:text-brand-yellow transition-colors flex items-center gap-2">
                      {link.icon && <link.icon className="h-4 w-4" />}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© 2025 AI Interview Buddy - An AI-First App to Get You Hired</p>
        </div>
      </div>
    </footer>
  );
}
