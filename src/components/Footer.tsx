import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import {
  Shield,
  FileText,
  AlertTriangle,
  ExternalLink,
  Heart,
  ChevronDown,
  ChevronUp,
  Mail,
  Globe,
  Info,
} from "lucide-react";
import ncwuLogo from "@/assets/ncwu-logo.png";

interface FooterLink {
  label: string;
  href?: string;
  to?: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [showRules, setShowRules] = useState(false);

  const footerSections: FooterSection[] = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "CST Schedule", to: "/cst" },
        { label: "Economics 2025", to: "/economics-2025" },
        { label: "HSK Learning", to: "/hsk" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "HSK Web App", href: "https://xuetong-chinese-learning-app.onrender.com/", external: true },
        { label: "Class Schedule", to: "/cst/class-schedule" },
        { label: "Economics Schedule", to: "/economics-2025/class-schedule" },
      ],
    },
    {
      title: "Policies",
      links: [
        { label: "Terms of Use", to: "#" },
        { label: "Privacy Policy", to: "#" },
        { label: "Community Guidelines", to: "#" },
        { label: "Contact Us", to: "#" },
      ],
    },
  ];

  const rules = [
    {
      title: "Academic Integrity",
      description: "All academic content shared on this platform must adhere to NCWU's academic integrity policies. Plagiarism, cheating, or any form of academic dishonesty is strictly prohibited.",
    },
    {
      title: "Respectful Communication",
      description: "Users must maintain respectful and professional communication at all times. Harassment, discrimination, or offensive language will not be tolerated.",
    },
    {
      title: "Data Privacy",
      description: "Personal information shared on this platform should be limited. Do not share sensitive personal data, passwords, or financial information.",
    },
    {
      title: "Content Usage",
      description: "All content provided is for educational purposes only. Redistribution or commercial use of materials without proper authorization is prohibited.",
    },
    {
      title: "Account Responsibility",
      description: "Users are responsible for maintaining the security of their accounts and for all activities that occur under their account.",
    },
  ];

  return (
    <footer
      className={`relative z-10 border-t ${
        isDark
          ? "border-red-500/20 bg-gradient-to-b from-slate-950 to-slate-900"
          : "border-amber-200 bg-gradient-to-b from-amber-50/50 to-white"
      } mt-12`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`py-6 px-4 rounded-xl my-6 ${
            isDark
              ? "bg-amber-500/10 border border-amber-500/20"
              : "bg-amber-100 border border-amber-200"
          }`}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                isDark ? "text-amber-400" : "text-amber-600"
              }`}
            />
            <div>
              <h4
                className={`font-bold text-sm mb-1 ${
                  isDark ? "text-amber-400" : "text-amber-700"
                }`}
              >
                Unofficial Student Community Website
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-amber-300/70" : "text-amber-700/80"
                }`}
              >
                This is an <strong>unofficial</strong> website created by and for the international student community at NCWU. 
                This website is <strong>not affiliated with, endorsed by, or officially connected to</strong> North China University 
                of Water Resources and Electric Power. All information provided is for educational and informational purposes only. 
                For official university information, please visit the{" "}
                <a
                  href="http://www.ncwu.edu.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline font-medium ${
                    isDark
                      ? "text-amber-400 hover:text-amber-300"
                      : "text-amber-600 hover:text-amber-800"
                  }`}
                >
                  official NCWU website
                  <ExternalLink className="w-3 h-3 inline ml-0.5" />
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={ncwuLogo}
                alt="NCWU Logo"
                className="w-10 h-10 rounded-xl object-contain"
              />
              <div>
                <h3
                  className={`font-bold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  NCWU International
                </h3>
                <p
                  className={`text-xs ${
                    isDark ? "text-white/50" : "text-slate-500"
                  }`}
                >
                  Student Community
                </p>
              </div>
            </div>
            <p
              className={`text-sm mb-4 ${
                isDark ? "text-white/60" : "text-slate-600"
              }`}
            >
              A community-driven platform for international students at NCWU to access resources, 
              schedules, and learning materials.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:ncwu.intl@gmail.com"
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                }`}
                title="Email us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="http://www.ncwu.edu.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900"
                }`}
                title="Official NCWU Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4
                className={`font-semibold mb-4 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className={`text-sm transition-colors ${
                          isDark
                            ? "text-white/60 hover:text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={`text-sm transition-colors inline-flex items-center gap-1 ${
                          isDark
                            ? "text-white/60 hover:text-white"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {link.label}
                        {link.external && <ExternalLink className="w-3 h-3" />}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className={`border-t py-6 ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <button
            onClick={() => setShowRules(!showRules)}
            className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${
              isDark
                ? "bg-white/5 hover:bg-white/10"
                : "bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-3">
              <Shield
                className={`w-5 h-5 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}
              />
              <span
                className={`font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Community Rules & Guidelines
              </span>
            </div>
            {showRules ? (
              <ChevronUp
                className={`w-5 h-5 ${
                  isDark ? "text-white/40" : "text-slate-400"
                }`}
              />
            ) : (
              <ChevronDown
                className={`w-5 h-5 ${
                  isDark ? "text-white/40" : "text-slate-400"
                }`}
              />
            )}
          </button>

          {showRules && (
            <div
              className={`mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4 rounded-xl ${
                isDark ? "bg-white/5" : "bg-slate-50"
              }`}
            >
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    isDark
                      ? "bg-white/5 border border-white/10"
                      : "bg-white border border-slate-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FileText
                      className={`w-4 h-4 ${
                        isDark ? "text-emerald-400" : "text-emerald-600"
                      }`}
                    />
                    <h5
                      className={`font-semibold text-sm ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {rule.title}
                    </h5>
                  </div>
                  <p
                    className={`text-xs ${
                      isDark ? "text-white/60" : "text-slate-600"
                    }`}
                  >
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          className={`py-6 border-t ${
            isDark ? "border-white/10" : "border-slate-200"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm">
              <Info
                className={`w-4 h-4 ${
                  isDark ? "text-white/40" : "text-slate-400"
                }`}
              />
              <span className={isDark ? "text-white/50" : "text-slate-500"}>
                Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
              </span>
            </div>
            <p
              className={`text-sm text-center ${
                isDark ? "text-white/50" : "text-slate-500"
              }`}
            >
              © {new Date().getFullYear()} NCWU International Student Community. 
              Made with <Heart className="w-4 h-4 inline text-red-500" /> by students, for students.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
