import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { X, Sparkles, Moon, Star } from "lucide-react";

export function EidPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("eid-popup-seen");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("eid-popup-seen", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div
        className={`relative max-w-md w-full rounded-3xl p-8 shadow-2xl transform animate-scale-in ${
          isDark
            ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 border border-amber-500/30"
            : "bg-gradient-to-br from-white via-amber-50 to-white border border-amber-200"
        }`}
      >
        <button
          onClick={handleClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            isDark
              ? "hover:bg-white/10 text-white/60 hover:text-white"
              : "hover:bg-black/5 text-slate-400 hover:text-slate-600"
          }`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Moon className={`w-6 h-6 ${isDark ? "text-amber-400" : "text-amber-500"}`} />
            <Star className={`w-5 h-5 ${isDark ? "text-yellow-400" : "text-yellow-500"}`} />
            <Moon className={`w-6 h-6 ${isDark ? "text-amber-400" : "text-amber-500"}`} />
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold mb-2 ${
              isDark
                ? "bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 bg-clip-text text-transparent"
            }`}
          >
            Eid Mubarak!
          </h2>

          <p
            className={`text-lg mb-4 ${isDark ? "text-amber-300" : "text-amber-600"}`}
          >
            عيد الفطر مبارك
          </p>

          <div className="flex justify-center mb-6">
            <Sparkles className={`w-8 h-8 ${isDark ? "text-yellow-400 animate-pulse" : "text-yellow-500 animate-pulse"}`} />
          </div>

          <p
            className={`text-base leading-relaxed mb-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Wishing you and your loved ones a blessed Eid ul-Fitr. May this
            special day bring peace, happiness, and prosperity to your life.
          </p>

          <div
            className={`p-4 rounded-2xl mb-6 ${
              isDark ? "bg-emerald-500/10 border border-emerald-500/30" : "bg-emerald-50 border border-emerald-200"
            }`}
          >
            <p
              className={`text-sm italic ${
                isDark ? "text-emerald-300" : "text-emerald-700"
              }`}
            >
              "May Allah accept your fasting, prayers, and good deeds during the
              holy month of Ramadan."
            </p>
          </div>

          <button
            onClick={handleClose}
            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/30"
                : "bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:from-amber-600 hover:to-yellow-600 shadow-lg shadow-amber-500/30"
            }`}
          >
            Thank You! 🌙
          </button>
        </div>

        <div className="absolute -top-2 -left-2 w-4 h-4">
          <Star className={`w-4 h-4 ${isDark ? "text-yellow-400" : "text-yellow-500"} animate-pulse`} />
        </div>
        <div className="absolute -top-2 -right-2 w-4 h-4">
          <Star className={`w-4 h-4 ${isDark ? "text-yellow-400" : "text-yellow-500"} animate-pulse`} />
        </div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4">
          <Star className={`w-4 h-4 ${isDark ? "text-yellow-400" : "text-yellow-500"} animate-pulse`} />
        </div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4">
          <Star className={`w-4 h-4 ${isDark ? "text-yellow-400" : "text-yellow-500"} animate-pulse`} />
        </div>
      </div>
    </div>
  );
}
