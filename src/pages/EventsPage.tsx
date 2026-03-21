import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  Bell,
  Gift,
  BookOpen,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Star,
  AlertCircle,
  Info,
} from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  type: "holiday" | "event" | "exam" | "deadline";
  description: string;
  icon: React.ElementType;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  type: "important" | "info" | "reminder";
}

function EventsContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const events: Event[] = [
    {
      id: "spring-festival",
      title: "Spring Festival (Chinese New Year)",
      date: "2025-01-29",
      endDate: "2025-02-04",
      type: "holiday",
      description: "The most important Chinese festival. University will be closed.",
      icon: Gift,
    },
    {
      id: "lantern-festival",
      title: "Lantern Festival",
      date: "2025-02-12",
      type: "holiday",
      description: "Traditional Chinese festival marking the end of Spring Festival.",
      icon: Star,
    },
    {
      id: "qingming",
      title: "Qingming Festival",
      date: "2025-04-04",
      endDate: "2025-04-06",
      type: "holiday",
      description: "Tomb-Sweeping Day. Public holiday in China.",
      icon: Calendar,
    },
    {
      id: "labor-day",
      title: "Labor Day",
      date: "2025-05-01",
      endDate: "2025-05-05",
      type: "holiday",
      description: "International Workers' Day. Public holiday.",
      icon: Calendar,
    },
    {
      id: "dragon-boat",
      title: "Dragon Boat Festival",
      date: "2025-05-31",
      endDate: "2025-06-02",
      type: "holiday",
      description: "Traditional Chinese festival with dragon boat races.",
      icon: Calendar,
    },
    {
      id: "mid-autumn",
      title: "Mid-Autumn Festival",
      date: "2025-10-06",
      type: "holiday",
      description: "Traditional Chinese festival celebrating the harvest moon.",
      icon: Star,
    },
    {
      id: "national-day",
      title: "National Day",
      date: "2025-10-01",
      endDate: "2025-10-07",
      type: "holiday",
      description: "China's National Day. Golden Week holiday.",
      icon: Gift,
    },
    {
      id: "eid-fitr",
      title: "Eid al-Fitr",
      date: "2025-03-30",
      endDate: "2025-03-31",
      type: "holiday",
      description: "End of Ramadan. Important for Muslim students.",
      icon: Star,
    },
    {
      id: "midterm-exams",
      title: "Midterm Examinations",
      date: "2025-04-14",
      endDate: "2025-04-25",
      type: "exam",
      description: "Midterm exam period. Check your schedule for specific dates.",
      icon: BookOpen,
    },
    {
      id: "final-exams",
      title: "Final Examinations",
      date: "2025-06-16",
      endDate: "2025-06-27",
      type: "exam",
      description: "Final exam period. Prepare early and check your schedule.",
      icon: BookOpen,
    },
    {
      id: "registration",
      title: "Course Registration",
      date: "2025-02-17",
      type: "deadline",
      description: "Deadline for course registration for the new semester.",
      icon: Clock,
    },
  ];

  const announcements: Announcement[] = [
    {
      id: "1",
      title: "Welcome New Students!",
      date: "2025-02-15",
      content: "Welcome to NCWU! Please check the Student Guides section for important information about campus life.",
      type: "important",
    },
    {
      id: "2",
      title: "HSK Test Registration Open",
      date: "2025-03-01",
      content: "Registration for HSK tests is now open. Contact the International Office for more information.",
      type: "info",
    },
    {
      id: "3",
      title: "Library Extended Hours",
      date: "2025-04-10",
      content: "During exam period, the library will have extended hours from 7:00 AM to 11:00 PM.",
      type: "info",
    },
    {
      id: "4",
      title: "Scholarship Application Deadline",
      date: "2025-05-15",
      content: "Remember to submit your scholarship applications before the deadline. Check requirements in Student Guides.",
      type: "reminder",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "holiday":
        return "from-red-500 to-orange-500";
      case "exam":
        return "from-purple-500 to-violet-500";
      case "deadline":
        return "from-amber-500 to-yellow-500";
      case "event":
        return "from-blue-500 to-cyan-500";
      default:
        return "from-slate-500 to-slate-600";
    }
  };

  const getAnnouncementStyle = (type: string) => {
    switch (type) {
      case "important":
        return isDark
          ? "bg-red-500/10 border-red-500/30"
          : "bg-red-50 border-red-200";
      case "info":
        return isDark
          ? "bg-blue-500/10 border-blue-500/30"
          : "bg-blue-50 border-blue-200";
      case "reminder":
        return isDark
          ? "bg-amber-500/10 border-amber-500/30"
          : "bg-amber-50 border-amber-200";
      default:
        return isDark
          ? "bg-slate-500/10 border-slate-500/30"
          : "bg-slate-50 border-slate-200";
    }
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${isDark ? "from-slate-900 via-slate-800 to-slate-900" : "from-slate-50 via-white to-slate-50"}`}
    >
      <Navigation />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
            <Calendar className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">
              Events Calendar
            </span>
          </div>
          <h1
            className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            Campus Events & Announcements
          </h1>
          <p
            className={`text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}
          >
            Stay updated with important dates and university announcements
          </p>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              📢 Announcements
            </h2>
          </div>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className={`rounded-2xl p-5 border ${getAnnouncementStyle(announcement.type)}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      announcement.type === "important"
                        ? "bg-red-500/20 text-red-400"
                        : announcement.type === "info"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {announcement.type === "important" ? (
                      <AlertCircle className="w-5 h-5" />
                    ) : announcement.type === "info" ? (
                      <Info className="w-5 h-5" />
                    ) : (
                      <Bell className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
                      >
                        {announcement.title}
                      </h3>
                      <span
                        className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}
                      >
                        {announcement.date}
                      </span>
                    </div>
                    <p
                      className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}
                    >
                      {announcement.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2
              className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              📅 Important Dates
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={previousMonth}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-slate-700 text-slate-400"
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span
                className={`font-medium ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {getMonthName(currentMonth)}
              </span>
              <button
                onClick={nextMonth}
                className={`p-2 rounded-lg transition-colors ${
                  isDark
                    ? "hover:bg-slate-700 text-slate-400"
                    : "hover:bg-slate-100 text-slate-500"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.id}
                  className={`rounded-2xl overflow-hidden ${isDark ? "bg-slate-800/50 border border-slate-700" : "bg-white border border-slate-200 shadow-sm"}`}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${getTypeColor(event.type)}`}
                  />
                  <div className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getTypeColor(event.type)} flex items-center justify-center text-white shadow-lg`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-semibold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}
                        >
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar
                            className={`w-4 h-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}
                          />
                          <span
                            className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}
                          >
                            {event.date}
                            {event.endDate && ` - ${event.endDate}`}
                          </span>
                        </div>
                        <p
                          className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div
            className={`rounded-2xl p-5 ${isDark ? "bg-red-500/10 border border-red-500/30" : "bg-red-50 border border-red-200"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Gift className={`w-5 h-5 ${isDark ? "text-red-400" : "text-red-600"}`} />
              <span
                className={`font-semibold ${isDark ? "text-red-300" : "text-red-700"}`}
              >
                Holidays
              </span>
            </div>
            <p
              className={`text-sm ${isDark ? "text-red-200/80" : "text-red-600"}`}
            >
              Chinese national holidays and traditional festivals
            </p>
          </div>
          <div
            className={`rounded-2xl p-5 ${isDark ? "bg-purple-500/10 border border-purple-500/30" : "bg-purple-50 border border-purple-200"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className={`w-5 h-5 ${isDark ? "text-purple-400" : "text-purple-600"}`} />
              <span
                className={`font-semibold ${isDark ? "text-purple-300" : "text-purple-700"}`}
              >
                Exams
              </span>
            </div>
            <p
              className={`text-sm ${isDark ? "text-purple-200/80" : "text-purple-600"}`}
            >
              Midterm and final examination periods
            </p>
          </div>
          <div
            className={`rounded-2xl p-5 ${isDark ? "bg-amber-500/10 border border-amber-500/30" : "bg-amber-50 border border-amber-200"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className={`w-5 h-5 ${isDark ? "text-amber-400" : "text-amber-600"}`} />
              <span
                className={`font-semibold ${isDark ? "text-amber-300" : "text-amber-700"}`}
              >
                Deadlines
              </span>
            </div>
            <p
              className={`text-sm ${isDark ? "text-amber-200/80" : "text-amber-600"}`}
            >
              Important dates and registration deadlines
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function EventsPage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ncwu-theme">
      <EventsContent />
    </ThemeProvider>
  );
}
