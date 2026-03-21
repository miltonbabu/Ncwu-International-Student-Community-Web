import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ChevronRight, Home, Calendar, BookOpen, Menu, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Toaster } from "sonner";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ncwuLogo from "@/assets/ncwu-logo.png";
import EconomicsAppContentWrapper from "./EconomicsAppContentWrapper";
import { economicsScheduleData, economicsTotalWeeks } from "@/data/economicsScheduleData";

function EconomicsSchedulePageContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    document.title = "Economics 2025 Class Schedule - NCWU";
  }, []);

  const uniqueSubjects = Array.from(new Set(economicsScheduleData.map(c => c.subject)));

  return (
    <div
      className={`min-h-screen relative overflow-hidden chinese-pattern-bg ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: isDark
              ? "rgba(15, 23, 42, 0.9)"
              : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(12px)",
            color: isDark ? "#fff" : "#1e293b",
            border: isDark
              ? "1px solid rgba(220, 38, 38, 0.2)"
              : "1px solid rgba(220, 38, 38, 0.3)",
          },
        }}
      />

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-500/5 to-amber-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-red-500/5 to-amber-500/5 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-amber-500/5 to-red-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <header
        className={`relative z-50 sticky top-0 backdrop-blur-xl ${isDark ? "bg-slate-950/80 border-red-500/20" : "bg-white/80 border-amber-200"} border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src={ncwuLogo}
                alt="NCWU Logo"
                className="w-10 h-10 rounded-xl object-contain transition-transform duration-300 hover:scale-110"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold chinese-gradient-text">
                  Economics 2025
                </h1>
                <p className={`text-xs font-medium ${isDark ? "text-red-300/60" : "text-red-700"}`}>
                  Class Schedule
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/economics-2025"
                className="nav-link-chinese hidden sm:block text-sm"
              >
                Economics
              </Link>
              <Link
                to="/"
                className="nav-link-chinese hidden sm:block text-sm"
              >
                Home
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <div
        className={`relative z-10 border-b ${isDark ? "border-red-500/10 bg-red-500/5" : "border-amber-200 bg-amber-50"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="nav-link-chinese flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className={`w-4 h-4 ${isDark ? "text-red-500/40" : "text-amber-400"}`} />
            <Link
              to="/economics-2025"
              className="nav-link-chinese"
            >
              Economics 2025
            </Link>
            <ChevronRight className={`w-4 h-4 ${isDark ? "text-red-500/40" : "text-amber-400"}`} />
            <span className={`font-medium ${isDark ? "text-red-300" : "text-red-900"}`}>
              Class Schedule
            </span>
          </nav>
        </div>
      </div>

      <EconomicsAppContentWrapper />

      <footer className={`relative z-10 border-t ${isDark ? "border-red-500/20 bg-red-500/5" : "border-amber-200 bg-amber-50/50"} mt-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={ncwuLogo}
                alt="NCWU Logo"
                className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 hover:scale-110"
              />
              <p className={`text-sm ${isDark ? "text-red-300/50" : "text-red-700"}`}>
                NCWU International Student Community
              </p>
            </div>
            <p className={`text-sm ${isDark ? "text-red-400/40" : "text-red-600"}`}>
              © 2024 NCWU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function EconomicsSchedulePage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ncwu-theme">
      <EconomicsSchedulePageContent />
    </ThemeProvider>
  );
}
