import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Calendar,
  BookOpen,
  Users,
  Globe,
  ArrowRight,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";
import ncwuLogo from "@/assets/ncwu-logo.png";

function HomePageContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    document.title = "NCWU International - Student Community";
  }, []);

  const sections = [
    {
      title: "Computer Science 2023",
      description:
        "Computer Science class schedules, resources, and academic information for the 2023 batch.",
      icon: BookOpen,
      link: "/cst",
      color: "from-cyan-500 to-blue-500",
      stats: "2023 Batch",
    },
    {
      title: "Economics 2025",
      description:
        "Economics department schedules and resources for the 2025 academic year.",
      icon: Calendar,
      link: "/economics-2025",
      color: "from-purple-500 to-pink-500",
      stats: "2025 Batch",
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Class Schedules",
      description: "View and manage your class schedules with ease",
    },
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow international students",
    },
    {
      icon: Globe,
      title: "Resources",
      description: "Access academic resources and information",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Stay informed with the latest schedule changes",
    },
  ];

  return (
    <div
      className={`min-h-screen chinese-pattern-bg chinese-wave-bg bg-gradient-to-br ${isDark ? "from-slate-900 via-red-950/30 to-slate-900" : "from-slate-50 via-amber-50/30 to-slate-50"}`}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-sky-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-sky-500/5 to-cyan-500/5 rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-cyan-500/5 to-sky-500/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <header
        className={`relative z-50 sticky top-0 backdrop-blur-xl ${isDark ? "bg-slate-900/80 border-red-500/20" : "bg-white/80 border-amber-200/50"} border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img
                src={ncwuLogo}
                alt="NCWU Logo"
                className="w-10 h-10 rounded-xl object-contain transition-transform duration-300 hover:scale-110"
              />
              <div>
                <h1 className={`text-lg font-bold chinese-gradient-text`}>
                  NCWU International
                </h1>
                <p
                  className={`text-xs font-medium ${isDark ? "text-sky-300/60" : "text-sky-700"}`}
                >
                  Student Community
                </p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="relative z-10 dragon-phoenix-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div
                className={`p-4 rounded-2xl ${isDark ? "bg-gradient-to-br from-red-500/20 to-amber-500/20 border border-red-500/30" : "bg-gradient-to-br from-red-100 to-amber-100 border border-red-200"} shadow-xl transition-transform duration-300 hover:scale-105`}
              >
                <GraduationCap
                  className={`w-16 h-16 ${isDark ? "text-red-400" : "text-red-600"}`}
                />
              </div>
            </div>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Welcome to NCWU
              <span className="block chinese-red-gold-text">
                International Student Community
              </span>
            </h1>
            <p
              className={`text-lg sm:text-xl max-w-3xl mx-auto mb-8 ${isDark ? "text-white/70" : "text-slate-600"}`}
            >
              Your central hub for class schedules, academic resources, and
              community connections. Navigate through departments and access all
              the information you need for your academic journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/cst"
                className="btn-chinese inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white shadow-lg"
              >
                <span>View CST Schedule</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/economics-2025"
                className={`btn-chinese inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium ${
                  isDark
                    ? "bg-white/10 hover:bg-white/20 text-white border border-red-500/30"
                    : "bg-white hover:bg-amber-50 text-slate-900 border border-red-200 shadow-md"
                }`}
              >
                <span>Economics 2025</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16 stagger-animation">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link
                  key={index}
                  to={section.link}
                  className={`card-chinese group relative overflow-hidden rounded-2xl p-6 ${
                    isDark
                      ? "bg-gradient-to-br from-red-500/5 to-amber-500/5 hover:from-red-500/10 hover:to-amber-500/10 border border-red-500/20"
                      : "bg-gradient-to-br from-white to-amber-50/50 hover:shadow-xl border border-red-100 shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${section.color} text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                        >
                          {section.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDark
                              ? "bg-white/10 text-white/70"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {section.stats}
                        </span>
                      </div>
                      <p
                        className={`text-sm ${isDark ? "text-white/60" : "text-slate-600"}`}
                      >
                        {section.description}
                      </p>
                    </div>
                    <ArrowRight
                      className={`w-5 h-5 ${isDark ? "text-white/40 group-hover:text-white/70" : "text-slate-400 group-hover:text-slate-600"} transition-colors`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mb-16">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-center mb-8 chinese-gradient-text`}
            >
              Everything You Need
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`card-chinese p-6 rounded-2xl ${
                      isDark
                        ? "bg-gradient-to-br from-red-500/5 to-amber-500/5 border border-red-500/20"
                        : "bg-gradient-to-br from-white to-amber-50/50 border border-red-100 shadow-md"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl w-fit mb-4 transition-transform duration-300 hover:scale-110 ${
                        isDark
                          ? "bg-gradient-to-br from-red-500/20 to-amber-500/20"
                          : "bg-gradient-to-br from-red-100 to-amber-100"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${isDark ? "text-red-400" : "text-red-600"}`}
                      />
                    </div>
                    <h3
                      className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-white/60" : "text-slate-600"}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`card-chinese rounded-2xl p-8 ${isDark ? "bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/20" : "bg-gradient-to-br from-white to-amber-50/50 border border-red-100 shadow-md"}`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-xl transition-transform duration-300 hover:scale-110 ${isDark ? "bg-gradient-to-br from-red-500/20 to-amber-500/20" : "bg-gradient-to-br from-red-100 to-amber-100"}`}
              >
                <MapPin
                  className={`w-6 h-6 ${isDark ? "text-red-400" : "text-red-600"}`}
                />
              </div>
              <div>
                <h3
                  className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  North China University of Water Resources and Electric Power
                </h3>
                <p
                  className={`text-sm ${isDark ? "text-white/60" : "text-slate-600"}`}
                >
                  Located in Zhengzhou, Henan Province, China. NCWU welcomes
                  international students from around the world, offering quality
                  education in engineering, economics, and various other
                  disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        className={`relative z-10 border-t ${isDark ? "border-red-500/20 bg-red-500/5" : "border-amber-200 bg-amber-50/50"} mt-12`}
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
                className={`text-sm ${isDark ? "text-red-300/50" : "text-red-700"}`}
              >
                NCWU International Student Community
              </p>
            </div>
            <p
              className={`text-sm ${isDark ? "text-red-400/40" : "text-red-600"}`}
            >
              © 2024 NCWU. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HomePage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ncwu-theme">
      <HomePageContent />
    </ThemeProvider>
  );
}
