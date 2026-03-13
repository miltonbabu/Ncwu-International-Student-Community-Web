import type { FilterState } from "@/types/schedule";
import { DAYS, SHIFTS } from "@/types/schedule";
import { Filter, X, Calendar, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "./ThemeProvider";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalWeeks: number;
}

export function FilterBar({
  filters,
  onFilterChange,
  totalWeeks,
}: FilterBarProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const activeFiltersCount = [
    filters.search,
    filters.week !== "all",
    filters.shift !== "all",
    filters.day !== "all",
  ].filter(Boolean).length;

  const clearFilters = () => {
    onFilterChange({
      search: "",
      week: "all",
      shift: "all",
      day: "all",
    });
  };

  const hasActiveFilters = activeFiltersCount > 0;

  return (
    <div
      className={`backdrop-blur-xl ${isDark ? "bg-slate-900/50 border-white/10" : "bg-white/80 border-slate-200"} rounded-2xl border overflow-hidden shadow-lg`}
    >
      <div className="p-2 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Filter
              className={`w-4 h-4 ${isDark ? "text-indigo-400" : "text-indigo-600"}`}
            />
            <span
              className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}
            >
              Filters
            </span>
            <span
              className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}
            >
              • Filter by week, shift, and day
            </span>
            {activeFiltersCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full bg-indigo-500 text-xs font-medium text-white">
                {activeFiltersCount}
              </span>
            )}
          </div>
        </div>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className={`text-xs ${isDark ? "text-white/70 hover:text-white hover:bg-white/10" : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"} rounded-lg h-7 px-2`}
          >
            <X className="w-3 h-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div
        className={`px-2 sm:px-3 pb-2 sm:pb-3 border-t ${isDark ? "border-white/10" : "border-slate-200"} pt-2 sm:pt-3`}
      >
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1">
            <label
              className={`flex items-center gap-1 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              <Calendar className="w-3 h-3" />
              Week
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={`h-8 w-full justify-between rounded-lg text-xs font-normal ${isDark ? "bg-white/5 border-white/10 text-white hover:bg-white/10" : "bg-white border-slate-200 text-slate-900 hover:bg-slate-50"}`}
                >
                  {filters.week === "all"
                    ? "All Weeks"
                    : `Week ${filters.week}`}
                  <ChevronDown className="w-3 h-3 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className={`w-56 p-1.5 ${isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200"}`}
                align="start"
              >
                <div className="grid grid-cols-2 gap-1">
                  <button
                    onClick={() => onFilterChange({ ...filters, week: "all" })}
                    className={`px-2 py-1 text-xs text-left rounded-md transition-colors ${filters.week === "all" ? "bg-indigo-500 text-white" : isDark ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-slate-900"}`}
                  >
                    All Weeks
                  </button>
                  {Array.from({ length: totalWeeks }, (_, i) => i + 1).map(
                    (week) => (
                      <button
                        key={week}
                        onClick={() => onFilterChange({ ...filters, week })}
                        className={`px-2 py-1 text-xs text-left rounded-md transition-colors ${filters.week === week ? "bg-indigo-500 text-white" : isDark ? "hover:bg-white/10 text-white" : "hover:bg-slate-100 text-slate-900"}`}
                      >
                        Week {week}
                      </button>
                    ),
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-1">
            <label
              className={`flex items-center gap-1 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              <Clock className="w-3 h-3" />
              Shift
            </label>
            <Select
              value={filters.shift}
              onValueChange={(value) =>
                onFilterChange({
                  ...filters,
                  shift: value as FilterState["shift"],
                })
              }
            >
              <SelectTrigger
                className={`h-8 rounded-lg text-xs ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"}`}
              >
                <SelectValue placeholder="All Shifts" />
              </SelectTrigger>
              <SelectContent
                className={`${isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200"}`}
              >
                <SelectItem value="all">All Shifts</SelectItem>
                {SHIFTS.map((shift) => (
                  <SelectItem key={shift} value={shift}>
                    {shift}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <label
              className={`flex items-center gap-1 text-xs font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              <Calendar className="w-3 h-3" />
              Day
            </label>
            <Select
              value={filters.day}
              onValueChange={(value) =>
                onFilterChange({
                  ...filters,
                  day: value as FilterState["day"],
                })
              }
            >
              <SelectTrigger
                className={`h-8 rounded-lg text-xs ${isDark ? "bg-white/5 border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"}`}
              >
                <SelectValue placeholder="All Days" />
              </SelectTrigger>
              <SelectContent
                className={`${isDark ? "bg-slate-900 border-white/10" : "bg-white border-slate-200"}`}
              >
                <SelectItem value="all">All Days</SelectItem>
                {DAYS.map((day) => (
                  <SelectItem key={day} value={day}>
                    {day}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="px-2 sm:px-3 pb-2 sm:pb-3 flex flex-wrap gap-1">
          {filters.search && (
            <Badge
              className={`flex items-center gap-1 px-2 py-0.5 text-xs ${isDark ? "bg-slate-800 text-white border-white/10" : "bg-slate-100 text-slate-900 border-slate-200"} border rounded-md`}
            >
              "{filters.search}"
              <button
                onClick={() => onFilterChange({ ...filters, search: "" })}
                className="ml-0.5 hover:opacity-70"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {filters.week !== "all" && (
            <Badge
              className={`flex items-center gap-1 px-2 py-0.5 text-xs ${isDark ? "bg-slate-800 text-white border-white/10" : "bg-slate-100 text-slate-900 border-slate-200"} border rounded-md`}
            >
              Week {filters.week}
              <button
                onClick={() => onFilterChange({ ...filters, week: "all" })}
                className="ml-0.5 hover:opacity-70"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {filters.shift !== "all" && (
            <Badge
              className={`flex items-center gap-1 px-2 py-0.5 text-xs ${isDark ? "bg-slate-800 text-white border-white/10" : "bg-slate-100 text-slate-900 border-slate-200"} border rounded-md`}
            >
              {filters.shift}
              <button
                onClick={() => onFilterChange({ ...filters, shift: "all" })}
                className="ml-0.5 hover:opacity-70"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {filters.day !== "all" && (
            <Badge
              className={`flex items-center gap-1 px-2 py-0.5 text-xs ${isDark ? "bg-slate-800 text-white border-white/10" : "bg-slate-100 text-slate-900 border-slate-200"} border rounded-md`}
            >
              {filters.day}
              <button
                onClick={() => onFilterChange({ ...filters, day: "all" })}
                className="ml-0.5 hover:opacity-70"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
