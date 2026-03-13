import type { ClassSession } from '@/types/schedule';
import { DAYS } from '@/types/schedule';
import { ClassCard } from './ClassCard';
import { Calendar, AlertCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface ScheduleGridProps {
  classes: ClassSession[];
  onShare?: (classSession: ClassSession) => void;
}

export function ScheduleGrid({ classes, onShare }: ScheduleGridProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Group classes by day
  const classesByDay = DAYS.reduce((acc, day) => {
    acc[day] = classes.filter(c => c.day === day);
    return acc;
  }, {} as Record<string, ClassSession[]>);

  // Sort classes within each day by start time
  Object.keys(classesByDay).forEach(day => {
    classesByDay[day].sort((a, b) => a.startTime.localeCompare(b.startTime));
  });

  const hasClasses = classes.length > 0;

  if (!hasClasses) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className={`w-20 h-20 rounded-full ${isDark ? 'bg-white/10' : 'bg-slate-100'} backdrop-blur-xl flex items-center justify-center mb-4`}>
          <AlertCircle className={`w-10 h-10 ${isDark ? 'text-white/40' : 'text-slate-400'}`} />
        </div>
        <h3 className={`text-xl font-semibold ${isDark ? 'text-white/80' : 'text-slate-700'} mb-2`}>No classes found</h3>
        <p className={`${isDark ? 'text-white/50' : 'text-slate-500'} text-center max-w-md`}>
          Try adjusting your filters or search terms
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results summary */}
      <div className="flex items-center justify-between px-1">
        <p className={`${isDark ? 'text-white/60' : 'text-slate-600'} text-sm`}>
          Showing <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{classes.length}</span> class{classes.length !== 1 ? 'es' : ''}
        </p>
      </div>

      {/* Schedule by day */}
      <div className="space-y-4">
        {DAYS.map((day) => {
          const dayClasses = classesByDay[day];
          if (dayClasses.length === 0) return null;

          return (
            <div key={day} className={`backdrop-blur-xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'} rounded-3xl border overflow-hidden`}>
              {/* Day header */}
              <div className={`bg-gradient-to-r ${isDark ? 'from-indigo-500/20 to-purple-500/20 border-white/10' : 'from-indigo-100 to-purple-100 border-slate-200'} px-4 sm:px-6 py-4 border-b`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-white/10' : 'bg-white'} backdrop-blur-md flex items-center justify-center shrink-0`}>
                    <Calendar className={`w-5 h-5 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`} />
                  </div>
                  <div className="min-w-0">
                    <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{day}</h2>
                    <p className={`text-sm ${isDark ? 'text-white/50' : 'text-slate-500'}`}>{dayClasses.length} class{dayClasses.length !== 1 ? 'es' : ''}</p>
                  </div>
                </div>
              </div>

              {/* Classes grid */}
              <div className="p-3 sm:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {dayClasses.map((classSession) => (
                    <ClassCard
                      key={classSession.id}
                      classSession={classSession}
                      onShare={onShare}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
