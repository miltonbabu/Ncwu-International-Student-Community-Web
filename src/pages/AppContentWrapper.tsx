import { useState, useEffect } from 'react';
import type { FilterState } from '@/types/schedule';
import { scheduleData, totalWeeks } from '@/data/scheduleData';
import { useScheduleFilter } from '@/hooks/useScheduleFilter';
import { FilterBar } from '@/components/FilterBar';
import { ScheduleGrid } from '@/components/ScheduleGrid';
import { SubjectsSection } from '@/components/SubjectsSection';
import { ShareDialog } from '@/components/ShareDialog';
import { SharedClassPopup } from '@/components/SharedClassPopup';
import { useTheme } from '@/components/ThemeProvider';
import { TodaySchedule } from '@/components/TodaySchedule';
import { BookOpen } from 'lucide-react';
import type { ClassSession } from '@/types/schedule';

export default function AppContentWrapper() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    week: 'all',
    shift: 'all',
    day: 'all',
  });
  const [showSubjects, setShowSubjects] = useState(false);
  const { resolvedTheme } = useTheme();
  
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedClassForShare, setSelectedClassForShare] = useState<ClassSession | null>(null);
  
  const [sharedClassPopupOpen, setSharedClassPopupOpen] = useState(false);
  const [sharedClass, setSharedClass] = useState<ClassSession | null>(null);

  const filteredClasses = useScheduleFilter(scheduleData, filters);
  const isDark = resolvedTheme === 'dark';

  const uniqueSubjects = Array.from(new Set(scheduleData.map(c => c.subject)));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const classId = params.get('class');
    
    if (classId) {
      const foundClass = scheduleData.find(c => c.id === classId);
      if (foundClass) {
        setSharedClass(foundClass);
        setSharedClassPopupOpen(true);
      }
    }
  }, []);

  const handleSubjectClick = (subject: string) => {
    setFilters({ ...filters, search: subject });
    setShowSubjects(false);
  };

  const handleShare = (classSession: ClassSession) => {
    setSelectedClassForShare(classSession);
    setShareDialogOpen(true);
  };

  const handleCloseSharedPopup = () => {
    setSharedClassPopupOpen(false);
    const url = new URL(window.location.href);
    url.searchParams.delete('class');
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {showSubjects ? (
        <SubjectsSection onSubjectClick={handleSubjectClick} />
      ) : (
        <>
          <div className="mb-6">
            <FilterBar 
              filters={filters} 
              onFilterChange={setFilters} 
              totalWeeks={totalWeeks} 
            />
          </div>
          {!filters.search && filters.week === 'all' && filters.shift === 'all' && filters.day === 'all' && <TodaySchedule />}

          <button
            onClick={() => setShowSubjects(true)}
            className={`sm:hidden w-full mb-6 p-4 rounded-2xl backdrop-blur-xl ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'} border flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <BookOpen className={`w-5 h-5 ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`} />
              <span className="font-medium">Browse Subjects</span>
            </div>
            <span className={isDark ? 'text-white/50' : 'text-slate-500'}>{uniqueSubjects.length} courses</span>
          </button>

          <ScheduleGrid classes={filteredClasses} onShare={handleShare} />
        </>
      )}

      <ShareDialog
        isOpen={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
        classSession={selectedClassForShare}
      />

      <SharedClassPopup
        isOpen={sharedClassPopupOpen}
        onClose={handleCloseSharedPopup}
        classSession={sharedClass}
      />
    </main>
  );
}
