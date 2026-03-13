import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ChevronRight,
  Home,
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  Users,
} from "lucide-react";
import { Toaster } from "sonner";
import ncwuLogo from "@/assets/ncwu-logo.png";

// Placeholder data - will be updated later
const scheduleData = [
  {
    id: "econ-mon-1",
    day: "Monday",
    subject: "Principles of Economics",
    teacher: "Dr. Zhang Wei",
    room: "Room 201",
    startTime: "08:00",
    endTime: "09:40",
    week: "1-16",
    shift: "Morning",
    type: "Lecture",
  },
  {
    id: "econ-mon-2",
    day: "Monday",
    subject: "Microeconomics",
    teacher: "Prof. Li Ming",
    room: "Room 305",
    startTime: "10:00",
    endTime: "11:40",
    week: "1-16",
    shift: "Morning",
    type: "Lecture",
  },
  {
    id: "econ-tue-1",
    day: "Tuesday",
    subject: "Macroeconomics",
    teacher: "Dr. Wang Fang",
    room: "Room 102",
    startTime: "08:00",
    endTime: "09:40",
    week: "1-16",
    shift: "Morning",
    type: "Lecture",
  },
  {
    id: "econ-tue-2",
    day: "Tuesday",
    subject: "Statistics for Economics",
    teacher: "Prof. Chen Hong",
    room: "Lab 301",
    startTime: "14:00",
    endTime: "15:40",
    week: "1-16",
    shift: "Afternoon",
    type: "Lab",
  },
  {
    id: "econ-wed-1",
    day: "Wednesday",
    subject: "International Economics",
    teacher: "Dr. Liu Yang",
    room: "Room 201",
    startTime: "10:00",
    endTime: "11:40",
    week: "1-16",
    shift: "Morning",
    type: "Lecture",
  },
  {
    id: "econ-thu-1",
    day: "Thursday",
    subject: "Econometrics",
    teacher: "Prof. Zhao Lei",
    room: "Room 405",
    startTime: "08:00",
    endTime: "09:40",
    week: "1-16",
    shift: "Morning",
    type: "Lecture",
  },
  {
    id: "econ-thu-2",
    day: "Thursday",
    subject: "Economic Policy Analysis",
    teacher: "Dr. Zhang Wei",
    room: "Room 201",
    startTime: "14:00",
    endTime: "15:40",
    week: "1-16",
    shift: "Afternoon",
    type: "Seminar",
  },
  {
    id: "econ-fri-1",
    day: "Friday",
    subject: "Development Economics",
    teacher: "Prof. Li Ming",
    room: "Room 305",
    startTime: "10:00",
    endTime: "11:40",
    week: "1-16",
    shift: "Morning",
    type: "Lecture",
  },
];

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const SHIFTS = ["Morning", "Afternoon", "Evening"];

function EconomicsScheduleContent() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    document.title = "Economics 2025 Class Schedule - NCWU";
  }, []);

  const [filters, setFilters] = useState({
    day: "all",
    shift: "all",
  });

  const filteredSchedule = scheduleData.filter((item) => {
    if (filters.day !== "all" && item.day !== filters.day) return false;
    if (filters.shift !== "all" && item.shift !== filters.shift) return false;
    return true;
  });

  const scheduleByDay = DAYS.reduce(
    (acc, day) => {
      acc[day] = filteredSchedule.filter((item) => item.day === day);
      return acc;
    },
    {} as Record<string, typeof scheduleData>,
  );

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
        <div
          className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-amber-500/5 to-red-500/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
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
                <p
                  className={`text-xs font-medium ${isDark ? "text-red-300/60" : "text-red-700"}`}
                >
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
              <Link to="/" className="nav-link-chinese hidden sm:block text-sm">
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
            <Link to="/" className="nav-link-chinese flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight
              className={`w-4 h-4 ${isDark ? "text-red-500/40" : "text-amber-400"}`}
            />
            <Link to="/economics-2025" className="nav-link-chinese">
              Economics 2025
            </Link>
            <ChevronRight
              className={`w-4 h-4 ${isDark ? "text-red-500/40" : "text-amber-400"}`}
            />
            <span
              className={`font-medium ${isDark ? "text-red-300" : "text-red-900"}`}
            >
              Class Schedule
            </span>
          </nav>
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div
          className={`mb-8 p-6 rounded-2xl card-chinese ${isDark ? "bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/20" : "bg-gradient-to-br from-white to-amber-50/50 border border-red-100 shadow-md"}`}
        >
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label
                className={`block text-sm font-medium mb-2 ${isDark ? "text-red-300" : "text-red-700"}`}
              >
                Filter by Day
              </label>
              <select
                value={filters.day}
                onChange={(e) =>
                  setFilters({ ...filters, day: e.target.value })
                }
                className={`w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800 border-red-500/30 text-white focus:border-red-400"
                    : "bg-white border-red-300 text-slate-900 focus:border-red-500"
                } border focus:outline-none focus:ring-2 focus:ring-red-500/50`}
              >
                <option value="all">All Days</option>
                {DAYS.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label
                className={`block text-sm font-medium mb-2 ${isDark ? "text-red-300" : "text-red-700"}`}
              >
                Filter by Shift
              </label>
              <select
                value={filters.shift}
                onChange={(e) =>
                  setFilters({ ...filters, shift: e.target.value })
                }
                className={`w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDark
                    ? "bg-slate-800 border-red-500/30 text-white focus:border-red-400"
                    : "bg-white border-red-300 text-slate-900 focus:border-red-500"
                } border focus:outline-none focus:ring-2 focus:ring-red-500/50`}
              >
                <option value="all">All Shifts</option>
                {SHIFTS.map((shift) => (
                  <option key={shift} value={shift}>
                    {shift}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {DAYS.map((day) => {
            const daySchedule = scheduleByDay[day];
            if (daySchedule.length === 0) return null;

            return (
              <div key={day}>
                <h2 className={`text-xl font-bold mb-4 chinese-gradient-text`}>
                  {day}
                </h2>
                <div className="grid gap-4 stagger-animation">
                  {daySchedule.map((item) => (
                    <div
                      key={item.id}
                      className={`card-chinese p-6 rounded-2xl ${
                        isDark
                          ? "bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/20"
                          : "bg-gradient-to-br from-white to-amber-50/50 border border-red-100 shadow-md"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className={`text-xs font-mono px-2 py-1 rounded ${
                                isDark
                                  ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                  : "bg-red-100 text-red-700 border border-red-200"
                              }`}
                            >
                              {item.type}
                            </span>
                            <span
                              className={`text-sm ${isDark ? "text-red-300/50" : "text-red-600"}`}
                            >
                              Week {item.week}
                            </span>
                          </div>
                          <h3
                            className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                          >
                            {item.subject}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span
                              className={`flex items-center gap-1 ${isDark ? "text-red-100/60" : "text-slate-600"}`}
                            >
                              <Users className="w-4 h-4" />
                              {item.teacher}
                            </span>
                            <span
                              className={`flex items-center gap-1 ${isDark ? "text-red-100/60" : "text-slate-600"}`}
                            >
                              <MapPin className="w-4 h-4" />
                              {item.room}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div
                            className={`flex items-center gap-2 px-3 py-1 rounded-lg ${
                              isDark ? "bg-red-500/20" : "bg-red-100"
                            }`}
                          >
                            <Clock
                              className={`w-4 h-4 ${isDark ? "text-red-300" : "text-red-600"}`}
                            />
                            <span
                              className={`text-sm font-medium ${isDark ? "text-red-300" : "text-red-700"}`}
                            >
                              {item.startTime} - {item.endTime}
                            </span>
                          </div>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              item.shift === "Morning"
                                ? isDark
                                  ? "bg-yellow-500/20 text-yellow-300"
                                  : "bg-yellow-100 text-yellow-700"
                                : item.shift === "Afternoon"
                                  ? isDark
                                    ? "bg-orange-500/20 text-orange-300"
                                    : "bg-orange-100 text-orange-700"
                                  : isDark
                                    ? "bg-indigo-500/20 text-indigo-300"
                                    : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            {item.shift}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {filteredSchedule.length === 0 && (
          <div
            className={`text-center py-12 ${isDark ? "text-red-300/60" : "text-red-600"}`}
          >
            <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No classes found for the selected filters</p>
          </div>
        )}

        <div
          className={`mt-8 p-6 rounded-2xl card-chinese ${isDark ? "bg-gradient-to-br from-red-500/10 to-amber-500/10 border border-red-500/20" : "bg-gradient-to-br from-white to-amber-50/50 border border-red-100 shadow-md"}`}
        >
          <div className="flex items-start gap-4">
            <BookOpen
              className={`w-6 h-6 ${isDark ? "text-red-400" : "text-red-600"} flex-shrink-0`}
            />
            <div>
              <h3
                className={`font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Schedule Information
              </h3>
              <p
                className={`text-sm ${isDark ? "text-red-100/60" : "text-slate-600"}`}
              >
                This is a placeholder schedule for the Economics 2025 batch. The
                actual class schedule data will be updated soon. Please check
                back later for the complete and accurate schedule information.
              </p>
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

export default function EconomicsSchedulePage() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ncwu-theme">
      <EconomicsScheduleContent />
    </ThemeProvider>
  );
}
