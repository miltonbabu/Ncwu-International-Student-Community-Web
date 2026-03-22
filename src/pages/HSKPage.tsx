import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { VocabularyList } from "@/components/VocabularyList";
import { hsk1Vocabulary } from "@/data/hsk1Vocabulary";
import { hsk2Vocabulary } from "@/data/hsk2Vocabulary";
import { hsk3Vocabulary } from "@/data/hsk3Vocabulary";
import ncwuLogo from "@/assets/ncwu-logo.png";
import {
  BookOpen,
  GraduationCap,
  Headphones,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Home,
  PenTool,
  MessageSquare,
  FileText,
} from "lucide-react";

type ViewState = "main" | "hsk1" | "hsk2" | "hsk3";

function HSKPageContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [currentView, setCurrentView] = useState<ViewState>("main");

  useEffect(() => {
    document.title = "HSK Chinese Learning - NCWU International";
  }, []);

  const hskLevels = [
    {
      level: "HSK 1",
      description: "Beginner - 150 words",
      color: "from-green-500 to-emerald-600",
      icon: GraduationCap,
      action: () => setCurrentView("hsk1"),
    },
    {
      level: "HSK 2",
      description: "Elementary - 300 words",
      color: "from-blue-500 to-cyan-600",
      icon: BookOpen,
      action: () => setCurrentView("hsk2"),
    },
    {
      level: "HSK 3",
      description: "Pre-Intermediate - 600 words",
      color: "from-purple-500 to-violet-600",
      icon: PenTool,
      action: () => setCurrentView("hsk3"),
    },
    {
      level: "HSK 4",
      description: "Intermediate - 1200 words",
      color: "from-orange-500 to-amber-600",
      icon: MessageSquare,
    },
    {
      level: "HSK 5",
      description: "Upper-Intermediate - 2500 words",
      color: "from-red-500 to-rose-600",
      icon: Headphones,
    },
    {
      level: "HSK 6",
      description: "Advanced - 5000 words",
      color: "from-indigo-500 to-purple-600",
      icon: FileText,
    },
  ];

  const resources = [
    {
      title: "Vocabulary Lists",
      description: "Complete word lists for each HSK level",
      icon: BookOpen,
    },
    {
      title: "Practice Tests",
      description: "Mock exams to test your readiness",
      icon: FileText,
    },
    {
      title: "Listening Practice",
      description: "Audio exercises for listening comprehension",
      icon: Headphones,
    },
    {
      title: "Writing Practice",
      description: "Character writing exercises and tips",
      icon: PenTool,
    },
  ];

  if (currentView === "hsk1") {
    return (
      <div
        className={`min-h-screen relative overflow-hidden chinese-pattern-bg ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <header
          className={`relative z-50 sticky top-0 backdrop-blur-xl ${isDark ? "bg-slate-950/80 border-emerald-500/20" : "bg-white/80 border-teal-200"} border-b`}
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
                  <h1 className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    HSK 1 Vocabulary
                  </h1>
                  <p
                    className={`text-xs font-medium ${isDark ? "text-emerald-300/60" : "text-emerald-700"}`}
                  >
                    NCWU International
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView("main")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div
          className={`relative z-10 border-b ${isDark ? "border-emerald-500/10 bg-emerald-500/5" : "border-teal-200 bg-teal-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="nav-link-chinese flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <ChevronRight
                className={`w-4 h-4 ${isDark ? "text-emerald-500/40" : "text-teal-400"}`}
              />
              <button
                onClick={() => setCurrentView("main")}
                className="nav-link-chinese"
              >
                HSK
              </button>
              <ChevronRight
                className={`w-4 h-4 ${isDark ? "text-emerald-500/40" : "text-teal-400"}`}
              />
              <span
                className={`font-medium ${isDark ? "text-emerald-300" : "text-emerald-900"}`}
              >
                HSK 1 Vocabulary
              </span>
            </nav>
          </div>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <VocabularyList
            words={hsk1Vocabulary}
            title="HSK 1 Vocabulary"
            onClose={() => setCurrentView("main")}
          />
        </main>

        <footer
          className={`relative z-10 border-t ${isDark ? "border-emerald-500/20 bg-emerald-500/5" : "border-teal-200 bg-teal-50/50"} mt-12`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={ncwuLogo}
                  alt="NCWU Logo"
                  className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                />
                <p
                  className={`text-sm ${isDark ? "text-emerald-300/50" : "text-emerald-700"}`}
                >
                  NCWU International Student Community
                </p>
              </div>
              <p
                className={`text-sm ${isDark ? "text-emerald-400/40" : "text-emerald-600"}`}
              >
                © 2024 NCWU. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (currentView === "hsk2") {
    return (
      <div
        className={`min-h-screen relative overflow-hidden chinese-pattern-bg ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <header
          className={`relative z-50 sticky top-0 backdrop-blur-xl ${isDark ? "bg-slate-950/80 border-blue-500/20" : "bg-white/80 border-blue-200"} border-b`}
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
                  <h1 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                    HSK 2 Vocabulary
                  </h1>
                  <p
                    className={`text-xs font-medium ${isDark ? "text-blue-300/60" : "text-blue-700"}`}
                  >
                    NCWU International
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView("main")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div
          className={`relative z-10 border-b ${isDark ? "border-blue-500/10 bg-blue-500/5" : "border-blue-200 bg-blue-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="nav-link-chinese flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <ChevronRight
                className={`w-4 h-4 ${isDark ? "text-blue-500/40" : "text-blue-400"}`}
              />
              <button
                onClick={() => setCurrentView("main")}
                className="nav-link-chinese"
              >
                HSK
              </button>
              <ChevronRight
                className={`w-4 h-4 ${isDark ? "text-blue-500/40" : "text-blue-400"}`}
              />
              <span
                className={`font-medium ${isDark ? "text-blue-300" : "text-blue-900"}`}
              >
                HSK 2 Vocabulary
              </span>
            </nav>
          </div>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <VocabularyList
            words={hsk2Vocabulary}
            title="HSK 2 Vocabulary"
            onClose={() => setCurrentView("main")}
          />
        </main>

        <footer
          className={`relative z-10 border-t ${isDark ? "border-blue-500/20 bg-blue-500/5" : "border-blue-200 bg-blue-50/50"} mt-12`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={ncwuLogo}
                  alt="NCWU Logo"
                  className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                />
                <p
                  className={`text-sm ${isDark ? "text-blue-300/50" : "text-blue-700"}`}
                >
                  NCWU International Student Community
                </p>
              </div>
              <p
                className={`text-sm ${isDark ? "text-blue-400/40" : "text-blue-600"}`}
              >
                © 2024 NCWU. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  if (currentView === "hsk3") {
    return (
      <div
        className={`min-h-screen relative overflow-hidden chinese-pattern-bg ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
      >
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <header
          className={`relative z-50 sticky top-0 backdrop-blur-xl ${isDark ? "bg-slate-950/80 border-purple-500/20" : "bg-white/80 border-purple-200"} border-b`}
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
                  <h1 className="text-lg font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                    HSK 3 Vocabulary
                  </h1>
                  <p
                    className={`text-xs font-medium ${isDark ? "text-purple-300/60" : "text-purple-700"}`}
                  >
                    NCWU International
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrentView("main")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Back</span>
                </button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <div
          className={`relative z-10 border-b ${isDark ? "border-purple-500/10 bg-purple-500/5" : "border-purple-200 bg-purple-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link to="/" className="nav-link-chinese flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <ChevronRight
                className={`w-4 h-4 ${isDark ? "text-purple-500/40" : "text-purple-400"}`}
              />
              <button
                onClick={() => setCurrentView("main")}
                className="nav-link-chinese"
              >
                HSK
              </button>
              <ChevronRight
                className={`w-4 h-4 ${isDark ? "text-purple-500/40" : "text-purple-400"}`}
              />
              <span
                className={`font-medium ${isDark ? "text-purple-300" : "text-purple-900"}`}
              >
                HSK 3 Vocabulary
              </span>
            </nav>
          </div>
        </div>

        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <VocabularyList
            words={hsk3Vocabulary}
            title="HSK 3 Vocabulary"
            onClose={() => setCurrentView("main")}
          />
        </main>

        <footer
          className={`relative z-10 border-t ${isDark ? "border-purple-500/20 bg-purple-500/5" : "border-purple-200 bg-purple-50/50"} mt-12`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={ncwuLogo}
                  alt="NCWU Logo"
                  className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 hover:scale-110"
                />
                <p
                  className={`text-sm ${isDark ? "text-purple-300/50" : "text-purple-700"}`}
                >
                  NCWU International Student Community
                </p>
              </div>
              <p
                className={`text-sm ${isDark ? "text-purple-400/40" : "text-purple-600"}`}
              >
                © 2024 NCWU. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen relative overflow-hidden chinese-pattern-bg ${isDark ? "bg-slate-950" : "bg-slate-50"}`}
    >
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <Navigation />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl sm:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Master Chinese with
            <span className="block bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              HSK Learning Resources
            </span>
          </h1>
          <p
            className={`text-lg max-w-2xl mx-auto ${isDark ? "text-white/70" : "text-slate-600"}`}
          >
            Prepare for your HSK exams with our comprehensive learning
            materials, practice tests, and study guides.
          </p>
        </div>

        <div className="mb-12">
          <h2
            className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            HSK Levels
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {hskLevels.map((level) => {
              const Icon = level.icon;
              return (
                <div
                  key={level.level}
                  onClick={level.action}
                  className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-slate-200 hover:shadow-xl"
                  } border backdrop-blur-xl`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${level.color} mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3
                      className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {level.level}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-white/60" : "text-slate-500"}`}
                    >
                      {level.description}
                    </p>
                    {level.action && (
                      <div className="mt-3 flex items-center gap-1 text-emerald-500 text-sm font-medium">
                        <span>View Vocabulary</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2
            className={`text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Learning Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.title}
                  className={`flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
                    isDark
                      ? "bg-white/5 border-white/10 hover:bg-white/10"
                      : "bg-white border-slate-200 hover:shadow-lg"
                  } border backdrop-blur-xl`}
                >
                  <div
                    className={`p-3 rounded-xl ${isDark ? "bg-emerald-500/20" : "bg-emerald-100"}`}
                  >
                    <Icon
                      className={`w-6 h-6 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {resource.title}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-white/60" : "text-slate-500"}`}
                    >
                      {resource.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`text-center p-8 rounded-2xl ${isDark ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20" : "bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200"}`}
        >
          <h3
            className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Ready to Start Learning?
          </h3>
          <p className={`mb-6 ${isDark ? "text-white/70" : "text-slate-600"}`}>
            Access all HSK learning materials and track your progress.
          </p>
          <button
            onClick={() => setCurrentView("hsk1")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span>Start Learning HSK 1</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>

      <footer
        className={`relative z-10 border-t ${isDark ? "border-emerald-500/20 bg-emerald-500/5" : "border-teal-200 bg-teal-50/50"} mt-12`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={ncwuLogo}
                alt="NCWU Logo"
                className="w-8 h-8 rounded-lg object-contain transition-transform duration-300 hover:scale-110"
              />
              <p
                className={`text-sm ${isDark ? "text-emerald-300/50" : "text-emerald-700"}`}
              >
                NCWU International Student Community
              </p>
            </div>
            <p
              className={`text-sm ${isDark ? "text-emerald-400/40" : "text-emerald-600"}`}
            >
              © 2024 NCWU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HSKPage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ncwu-theme">
      <HSKPageContent />
    </ThemeProvider>
  );
}
