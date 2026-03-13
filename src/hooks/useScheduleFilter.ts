import { useMemo } from 'react';
import type { ClassSession, FilterState } from '@/types/schedule';

export function useScheduleFilter(classes: ClassSession[], filters: FilterState): ClassSession[] {
  return useMemo(() => {
    return classes.filter((classSession) => {
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchesSearch = 
          classSession.subject.toLowerCase().includes(searchLower) ||
          classSession.instructor.toLowerCase().includes(searchLower) ||
          classSession.room.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Week filter
      if (filters.week !== 'all' && classSession.week !== filters.week) {
        return false;
      }

      // Shift filter
      if (filters.shift !== 'all' && classSession.shift !== filters.shift) {
        return false;
      }

      // Day filter
      if (filters.day !== 'all' && classSession.day !== filters.day) {
        return false;
      }

      return true;
    });
  }, [classes, filters]);
}
