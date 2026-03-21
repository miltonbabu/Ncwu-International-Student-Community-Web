import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSelector } from "./LanguageSelector";
import {
  Calendar,
  BookOpen,
  Globe,
  ChevronDown,
  Menu,
  X,
  MapPin,
  AlertTriangle,
  Bell,
  Smartphone,
  Car,
  CreditCard,
  FileText,
  ChevronRight,
} from "lucide-react";
import ncwuLogo from "@/assets/ncwu-logo.png";

interface NavItem {
  label: string;
  icon?: React.ElementType;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

export function Navigation() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdown, setOpenSubDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems: NavItem[] = [
    {
      label: t("nav.departments", "Departments"),
      icon: BookOpen,
      children: [
        {
          label: t("nav.cst", "Computer Science"),
          icon: BookOpen,
          children: [
            {
              label: t("nav.cstSchedule", "Class Schedule"),
              icon: Calendar,
              href: "/cst/class-schedule",
            },
          ],
        },
        {
          label: t("nav.economics", "Economics"),
          icon: Calendar,
          children: [
            {
              label: t("nav.economicsSchedule", "Class Schedule"),
              icon: Calendar,
              href: "/economics-2025/class-schedule",
            },
          ],
        },
      ],
    },
    {
      label: t("nav.learning", "Learning"),
      icon: Globe,
      children: [
        { label: t("nav.hsk", "HSK Chinese"), href: "/hsk" },
        {
          label: t("nav.hskApp", "HSK App"),
          href: "https://xuetong-chinese-learning-app.onrender.com/",
          external: true,
        },
        {
          label: t("nav.studentGuides", "Student Guides"),
          href: "/student-guides",
        },
      ],
    },
    {
      label: t("nav.resources", "Resources"),
      icon: FileText,
      children: [
        {
          label: t("nav.essentialApps", "Essential Apps"),
          icon: Smartphone,
          href: "/apps-guide",
        },
        {
          label: t("nav.transportation", "Transportation"),
          icon: Car,
          href: "/transportation",
        },
        {
          label: t("nav.paymentGuide", "Payment Guide"),
          icon: CreditCard,
          href: "/payment-guide",
        },
      ],
    },
    {
      label: t("nav.campus", "Campus"),
      icon: MapPin,
      children: [
        {
          label: t("nav.campusMap", "Campus Map"),
          icon: MapPin,
          href: "/campus-map",
        },
        { label: t("nav.events", "Events"), icon: Bell, href: "/events" },
        {
          label: t("nav.emergency", "Emergency"),
          icon: AlertTriangle,
          href: "/emergency",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const openDropdownMenu = (label: string) => {
    setOpenDropdown(label);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  const isDropdownActive = (children?: NavItem[]) => {
    if (!children) return false;
    return children.some((child) => child.href && isActive(child.href));
  };

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        isDark
          ? "bg-slate-900/90 border-slate-700"
          : "bg-white/90 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={ncwuLogo}
              alt="NCWU Logo"
              className="w-10 h-10 rounded-xl object-contain transition-transform duration-300 hover:scale-110"
            />
            <div className="hidden sm:block">
              <h1
                className={`text-lg font-bold ${
                  isDark
                    ? "bg-gradient-to-r from-red-400 to-amber-400 bg-clip-text text-transparent"
                    : "text-slate-900"
                }`}
              >
                NCWU International
              </h1>
              <p
                className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}
              >
                Student Community
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const hasChildren = item.children && item.children.length > 0;
              const isItemActive = item.href
                ? isActive(item.href)
                : isDropdownActive(item.children);
              const isDropdownOpen = openDropdown === item.label;

              if (hasChildren) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDropdownMenu(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isItemActive
                          ? isDark
                            ? "bg-red-500/20 text-red-400"
                            : "bg-red-50 text-red-600"
                          : isDark
                            ? "text-slate-300 hover:text-white hover:bg-slate-800"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute top-full left-0 mt-0 pt-2 w-56 rounded-xl shadow-xl border transition-all duration-200 origin-top ${
                        isDropdownOpen
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      } ${
                        isDark
                          ? "bg-slate-800 border-slate-700"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <div className="py-2">
                        {item.children?.map((child) => {
                          const ChildIcon = child.icon;
                          const childActive = child.href
                            ? isActive(child.href)
                            : false;
                          const isExternal = child.href?.startsWith("http");
                          const hasNestedChildren = child.children && child.children.length > 0;
                          const isSubOpen = openSubDropdown === child.label;

                          if (hasNestedChildren) {
                            return (
                              <div
                                key={child.label}
                                className="relative"
                                onMouseEnter={() => setOpenSubDropdown(child.label)}
                                onMouseLeave={() => setOpenSubDropdown(null)}
                              >
                                <button
                                  className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                                    isDark
                                      ? "text-slate-300 hover:text-white hover:bg-slate-700"
                                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    {ChildIcon && <ChildIcon className="w-4 h-4" />}
                                    {child.label}
                                  </div>
                                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isSubOpen ? "rotate-90" : ""}`} />
                                </button>

                                <div
                                  className={`absolute top-0 left-full ml-1 w-48 rounded-xl shadow-xl border transition-all duration-200 origin-left ${
                                    isSubOpen
                                      ? "opacity-100 scale-100"
                                      : "opacity-0 scale-95 pointer-events-none"
                                  } ${
                                    isDark
                                      ? "bg-slate-800 border-slate-700"
                                      : "bg-white border-slate-200"
                                  }`}
                                >
                                  <div className="py-2">
                                    {child.children?.map((nestedChild) => {
                                      const NestedIcon = nestedChild.icon;
                                      const nestedActive = nestedChild.href
                                        ? isActive(nestedChild.href)
                                        : false;

                                      return (
                                        <Link
                                          key={nestedChild.label}
                                          to={nestedChild.href || "#"}
                                          className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                            nestedActive
                                              ? isDark
                                                ? "bg-red-500/20 text-red-400"
                                                : "bg-red-50 text-red-600"
                                              : isDark
                                                ? "text-slate-300 hover:text-white hover:bg-slate-700"
                                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                          }`}
                                        >
                                          {NestedIcon && <NestedIcon className="w-4 h-4" />}
                                          {nestedChild.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          if (isExternal) {
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                  isDark
                                    ? "text-slate-300 hover:text-white hover:bg-slate-700"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                }`}
                              >
                                {ChildIcon && <ChildIcon className="w-4 h-4" />}
                                {child.label}
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={child.label}
                              to={child.href || "#"}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                                childActive
                                  ? isDark
                                    ? "bg-red-500/20 text-red-400"
                                    : "bg-red-50 text-red-600"
                                  : isDark
                                    ? "text-slate-300 hover:text-white hover:bg-slate-700"
                                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                              }`}
                            >
                              {ChildIcon && <ChildIcon className="w-4 h-4" />}
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href || "#"}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isItemActive
                      ? isDark
                        ? "bg-red-500/20 text-red-400"
                        : "bg-red-50 text-red-600"
                      : isDark
                        ? "text-slate-300 hover:text-white hover:bg-slate-800"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSelector isDark={isDark} />
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isDark
                  ? "text-slate-300 hover:text-white hover:bg-slate-800"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden border-t transition-all duration-300 overflow-hidden ${
          isDark ? "border-slate-700" : "border-slate-200"
        } ${mobileMenuOpen ? "max-h-[600px] overflow-y-auto" : "max-h-0"}`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children && item.children.length > 0;
            const isItemActive = item.href
              ? isActive(item.href)
              : isDropdownActive(item.children);
            const isDropdownOpen = openDropdown === item.label;

            return (
              <div key={item.label}>
                {hasChildren ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isItemActive
                          ? isDark
                            ? "bg-red-500/20 text-red-400"
                            : "bg-red-50 text-red-600"
                          : isDark
                            ? "text-slate-300 hover:text-white hover:bg-slate-800"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {Icon && <Icon className="w-4 h-4" />}
                        {item.label}
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isDropdownOpen ? "max-h-96 mt-1" : "max-h-0"
                      }`}
                    >
                      <div
                        className={`ml-4 pl-3 border-l ${
                          isDark ? "border-slate-700" : "border-slate-200"
                        }`}
                      >
                        {item.children?.map((child) => {
                          const ChildIcon = child.icon;
                          const childActive = child.href
                            ? isActive(child.href)
                            : false;
                          const hasNestedChildren = child.children && child.children.length > 0;
                          const isSubOpen = openSubDropdown === child.label;

                          if (hasNestedChildren) {
                            return (
                              <div key={child.label}>
                                <button
                                  onClick={() => setOpenSubDropdown(isSubOpen ? null : child.label)}
                                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                                    isDark
                                      ? "text-slate-400 hover:text-white hover:bg-slate-800"
                                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                  }`}
                                >
                                  <div className="flex items-center gap-2">
                                    {ChildIcon && <ChildIcon className="w-4 h-4" />}
                                    {child.label}
                                  </div>
                                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isSubOpen ? "rotate-90" : ""}`} />
                                </button>
                                <div
                                  className={`overflow-hidden transition-all duration-200 ${
                                    isSubOpen ? "max-h-48" : "max-h-0"
                                  }`}
                                >
                                  <div className={`ml-4 pl-3 border-l ${isDark ? "border-slate-700" : "border-slate-200"}`}>
                                    {child.children?.map((nestedChild) => {
                                      const NestedIcon = nestedChild.icon;
                                      const nestedActive = nestedChild.href
                                        ? isActive(nestedChild.href)
                                        : false;

                                      return (
                                        <Link
                                          key={nestedChild.label}
                                          to={nestedChild.href || "#"}
                                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                            nestedActive
                                              ? isDark
                                                ? "bg-red-500/20 text-red-400"
                                                : "bg-red-50 text-red-600"
                                              : isDark
                                                ? "text-slate-500 hover:text-white hover:bg-slate-800"
                                                : "text-slate-400 hover:text-slate-900 hover:bg-slate-100"
                                          }`}
                                        >
                                          {NestedIcon && <NestedIcon className="w-4 h-4" />}
                                          {nestedChild.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={child.label}
                              to={child.href || "#"}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                childActive
                                  ? isDark
                                    ? "bg-red-500/20 text-red-400"
                                    : "bg-red-50 text-red-600"
                                  : isDark
                                    ? "text-slate-400 hover:text-white hover:bg-slate-800"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                              }`}
                            >
                              {ChildIcon && <ChildIcon className="w-4 h-4" />}
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href || "#"}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isItemActive
                        ? isDark
                          ? "bg-red-500/20 text-red-400"
                          : "bg-red-50 text-red-600"
                        : isDark
                          ? "text-slate-300 hover:text-white hover:bg-slate-800"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
}
