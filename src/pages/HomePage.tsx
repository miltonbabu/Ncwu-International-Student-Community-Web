import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { NewsSection } from "@/components/NewsSection";
import { EidPopup } from "@/components/EidPopup";
import { useRTL } from "@/hooks/useRTL";
import {
  Calendar,
  BookOpen,
  Users,
  Globe,
  ArrowRight,
  Clock,
  MapPin,
  AlertTriangle,
  Bell,
  Smartphone,
  Car,
  CreditCard,
} from "lucide-react";
import ncwuLogo from "@/assets/ncwu-logo.png";
import heroImage from "@/assets/hero-image.jpg";

function HomePageContent() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  useRTL();

  useEffect(() => {
    document.title = "NCWU International - Student Community";
  }, []);

  const sections = [
    {
      title: t("home.cstTitle", "Computer Science & Technology"),
      description: t(
        "home.cstDesc",
        "CST class schedules, resources, and academic information. Access your course timetables, lab sessions, and department announcements.",
      ),
      icon: BookOpen,
      link: "/cst",
      color: "from-blue-500 to-cyan-500",
      stats: "Undergraduate • 2023",
      bgColor: isDark
        ? "bg-blue-600 hover:bg-blue-500 border-blue-400"
        : "bg-blue-500 hover:bg-blue-600 border-blue-400",
      iconBg: "from-blue-400 to-cyan-400",
    },
    {
      title: t("home.economicsTitle", "Economics"),
      description: t(
        "home.economicsDesc",
        "Economics department schedules and resources. View your class timetables, exam schedules, and academic materials.",
      ),
      icon: Calendar,
      link: "/economics-2025",
      color: "from-purple-500 to-pink-500",
      stats: "Undergraduate • 2025",
      bgColor: isDark
        ? "bg-purple-600 hover:bg-purple-500 border-purple-400"
        : "bg-purple-500 hover:bg-purple-600 border-purple-400",
      iconBg: "from-purple-400 to-pink-400",
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: t("home.featureSchedules", "Class Schedules"),
      description: t(
        "home.featureSchedulesDesc",
        "View and manage your class schedules with ease",
      ),
    },
    {
      icon: Users,
      title: t("home.featureCommunity", "Community"),
      description: t(
        "home.featureCommunityDesc",
        "Connect with fellow international students",
      ),
    },
    {
      icon: Globe,
      title: t("home.featureResources", "Resources"),
      description: t(
        "home.featureResourcesDesc",
        "Access academic resources and information",
      ),
    },
    {
      icon: Clock,
      title: t("home.featureUpdates", "Real-time Updates"),
      description: t(
        "home.featureUpdatesDesc",
        "Stay informed with the latest schedule changes",
      ),
    },
  ];

  return (
    <div
      className={`min-h-screen chinese-pattern-bg chinese-wave-bg bg-gradient-to-br ${isDark ? "from-slate-900 via-red-950/30 to-slate-900" : "from-slate-50 via-amber-50/30 to-slate-50"}`}
    >
      <EidPopup />
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

      <NewsSection />

      <Navigation />

      <main className="relative z-10 dragon-phoenix-hero">
        <HeroSection
          backgroundImage={heroImage}
          subtitle={t("home.subtitle", "Welcome Home")}
          title={
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              {t("home.welcome", "Welcome to NCWU")}
              <span className="block chinese-red-gold-text">
                {t("home.community", "International Student Community")}
              </span>
            </h1>
          }
          description={t(
            "home.description",
            "A helpful hub for class schedules, academic resources, and community connections. Explore departments and find information to support your studies and campus life at NCWU.",
          )}
          primaryButtonText={t("home.cstBtn", "CST Schedule")}
          primaryButtonLink="/cst/class-schedule"
          secondaryButtonText={t("home.econBtn", "Economics 25 Schedule")}
          secondaryButtonLink="/economics-2025/class-schedule"
          tertiaryButtonText={t("home.hskBtn", "HSK Chinese")}
          tertiaryButtonLink="/hsk"
          quaternaryButtonText={t("home.hskAppBtn", "HSK App")}
          quaternaryButtonLink="https://xuetong-chinese-learning-app.onrender.com/"
          quinaryButtonText={t("home.aiBtn", "Huashui AI")}
          quinaryButtonLink="https://huashuaii.com/"
          senaryButtonText={t("home.guidesBtn", "Student Guides")}
          senaryButtonLink="/student-guides"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2
                className={`text-2xl sm:text-3xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {t("home.academicDepartments", "Academic Departments")}
              </h2>
              <p
                className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                {t(
                  "home.selectDepartment",
                  "Select your department to access class schedules and resources",
                )}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={index}
                    to={section.link}
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01] ${
                      index === 0
                        ? "bg-blue-100 hover:bg-blue-200 border-2 border-blue-300"
                        : "bg-purple-100 hover:bg-purple-200 border-2 border-purple-300"
                    }`}
                  >
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color}`}
                    />
                    <div className="p-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`text-lg font-bold text-slate-800`}>
                              {section.title}
                            </h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              index === 0
                                ? "bg-blue-200 text-blue-700"
                                : "bg-purple-200 text-purple-700"
                            }`}>
                              {section.stats}
                            </span>
                          </div>
                          <p className={`text-xs text-slate-600`}>
                            {section.description}
                          </p>
                        </div>
                        <ArrowRight className={`w-5 h-5 flex-shrink-0 ${
                          index === 0
                            ? "text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1"
                            : "text-purple-600 group-hover:text-purple-700 group-hover:translate-x-1"
                        } transition-all`} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mb-16">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-center mb-8 chinese-gradient-text`}
            >
              {t("home.everythingYouNeed", "Everything You Need")}
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

          <div className="mb-16">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-center mb-8 chinese-gradient-text`}
            >
              {t("home.studentResources", "Student Resources")}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                to="/apps-guide"
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 hover:from-green-500/30 hover:to-emerald-500/30"
                    : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:from-green-100 hover:to-emerald-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t("home.essentialApps", "Essential Apps")}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {t("home.mustHaveApps", "Must-have apps in China")}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/transportation"
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 hover:from-teal-500/30 hover:to-cyan-500/30"
                    : "bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 hover:from-teal-100 hover:to-cyan-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                    <Car className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t("home.transportation", "Transportation")}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {t("home.gettingAround", "Getting around Zhengzhou")}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/payment-guide"
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 hover:from-amber-500/30 hover:to-yellow-500/30"
                    : "bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 hover:from-amber-100 hover:to-yellow-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white shadow-lg">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t("home.paymentGuide", "Payment Guide")}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {t("home.wechatAlipay", "WeChat Pay, Alipay & banking")}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-16">
            <h2
              className={`text-2xl sm:text-3xl font-bold text-center mb-8 chinese-gradient-text`}
            >
              {t("home.quickLinks", "Quick Links")}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                to="/emergency"
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 hover:from-red-500/30 hover:to-orange-500/30"
                    : "bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 hover:from-red-100 hover:to-orange-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t("home.emergencyContacts", "Emergency Contacts")}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {t(
                        "home.importantNumbers",
                        "Important numbers & safety tips",
                      )}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/campus-map"
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30"
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 hover:from-blue-100 hover:to-cyan-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t("home.campusMap", "Campus Map")}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {t("home.findYourWay", "Find your way around campus")}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/events"
                className={`group rounded-2xl p-6 transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:from-purple-500/30 hover:to-pink-500/30"
                    : "bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 hover:from-purple-100 hover:to-pink-100 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                    <Bell className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                    >
                      {t("home.eventsAnnouncements", "Events & Announcements")}
                    </h3>
                    <p
                      className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                    >
                      {t("home.stayUpdated", "Stay updated with campus news")}
                    </p>
                  </div>
                </div>
              </Link>
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

      <Footer />
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
