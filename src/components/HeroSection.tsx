import { ReactNode } from "react";
import { useTheme } from "./ThemeProvider";
import {
  ArrowRight,
  Globe,
  ExternalLink,
  Sparkles,
  BookOpen,
} from "lucide-react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  tertiaryButtonText?: string;
  tertiaryButtonLink?: string;
  quaternaryButtonText?: string;
  quaternaryButtonLink?: string;
  quinaryButtonText?: string;
  quinaryButtonLink?: string;
  senaryButtonText?: string;
  senaryButtonLink?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  tertiaryButtonText,
  tertiaryButtonLink,
  quaternaryButtonText,
  quaternaryButtonLink,
  quinaryButtonText,
  quinaryButtonLink,
  senaryButtonText,
  senaryButtonLink,
  backgroundImage,
  children,
}: HeroSectionProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      className={`relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] overflow-hidden ${!isDark ? "shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3),0_40px_100px_-20px_rgba(0,0,0,0.2)]" : ""}`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: isDark ? "blur(1px)" : "none",
          }}
        />
      )}

      <div
        className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/70" : "bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/40"}`}
      />

      {!isDark && (
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            boxShadow:
              "inset 0 0 100px 20px rgba(0, 0, 0, 0.15), inset 0 0 200px 40px rgba(0, 0, 0, 0.1)",
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <p
              className={`text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase mb-3 sm:mb-4 ${isDark ? "text-amber-400" : "text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`}
            >
              {subtitle}
            </p>
          )}

          <div className="mb-4 sm:mb-6">
            <div
              className={`${isDark ? "text-white" : "text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"}`}
            >
              {title}
            </div>
          </div>

          {description && (
            <p
              className={`text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 font-medium ${isDark ? "text-white/90" : "text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"}`}
            >
              {description}
            </p>
          )}

          {(primaryButtonText ||
            secondaryButtonText ||
            tertiaryButtonText ||
            quaternaryButtonText ||
            quinaryButtonText ||
            senaryButtonText) && (
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {primaryButtonText && primaryButtonLink && (
                <a
                  href={primaryButtonLink}
                  className="btn-chinese inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
                >
                  <span>{primaryButtonText}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              )}
              {secondaryButtonText && secondaryButtonLink && (
                <a
                  href={secondaryButtonLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40"
                >
                  <span>{secondaryButtonText}</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </a>
              )}
              {tertiaryButtonText && tertiaryButtonLink && (
                <a
                  href={tertiaryButtonLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/40"
                >
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span>{tertiaryButtonText}</span>
                </a>
              )}
              {quaternaryButtonText && quaternaryButtonLink && (
                <a
                  href={quaternaryButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-400 hover:to-purple-500 text-white shadow-lg shadow-fuchsia-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/40"
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span>{quaternaryButtonText}</span>
                </a>
              )}
              {quinaryButtonText && quinaryButtonLink && (
                <a
                  href={quinaryButtonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 text-white shadow-lg shadow-rose-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-rose-500/40"
                >
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>{quinaryButtonText}</span>
                </a>
              )}
              {senaryButtonText && senaryButtonLink && (
                <a
                  href={senaryButtonLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white shadow-lg shadow-amber-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/40"
                >
                  <BookOpen className="w-4 h-4 flex-shrink-0" />
                  <span>{senaryButtonText}</span>
                </a>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
