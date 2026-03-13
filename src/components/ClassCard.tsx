import type { ClassSession } from '@/types/schedule';
import { Clock, MapPin, User, Calendar, Copy, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useTheme } from './ThemeProvider';

interface ClassCardProps {
  classSession: ClassSession;
  onShare?: (classSession: ClassSession) => void;
}

// Map light theme text colors to corresponding dark variants for readability
const lightThemeTextMap: Record<string, string> = {
  'text-orange-100': 'text-orange-800',
  'text-green-100': 'text-green-800',
  'text-teal-100': 'text-teal-800',
  'text-yellow-100': 'text-yellow-800',
  'text-indigo-100': 'text-indigo-800',
  'text-cyan-100': 'text-cyan-800',
  'text-blue-100': 'text-blue-800',
  'text-emerald-100': 'text-emerald-800',
  'text-amber-100': 'text-amber-800',
  'text-lime-800': 'text-lime-800',
  'text-fuchsia-800': 'text-fuchsia-800',
  'text-sky-800': 'text-sky-800',
  'text-rose-800': 'text-rose-800',
  'text-purple-800': 'text-purple-800',
  'text-pink-800': 'text-pink-800',
};

export function ClassCard({ classSession, onShare }: ClassCardProps) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  
  // Get appropriate text color based on theme
  // Dark theme: always use white text for consistency
  // Light theme: use darker color variants for readability
  const textColor = isDark ? 'text-white' : (lightThemeTextMap[classSession.text] || 'text-gray-800');

  const handleCopy = async () => {
    const info = `${classSession.subject}
📅 ${classSession.day}, Week ${classSession.week}
⏰ ${classSession.startTime} - ${classSession.endTime}
👤 ${classSession.instructor}
📍 ${classSession.room}
🕐 ${classSession.shift} Shift`;
    try {
      await navigator.clipboard.writeText(info);
      setCopied(true);
      toast.success('Class info copied!', { duration: 2000 });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  const handleShare = () => {
    onShare?.(classSession);
  };

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl border backdrop-blur-xl
        transition-all duration-300 ease-out
        hover:scale-[1.02] active:scale-[0.98]
        ${classSession.bg} ${classSession.border}
        shadow-lg ${classSession.glow}
      `}
    >
      {/* Glass shimmer effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${isDark ? 'from-white/20 via-transparent to-white/5' : 'from-white/40 via-transparent to-white/10'} pointer-events-none`} />

      {/* Content */}
      <div className="relative p-4 sm:p-5">
        {/* Header with subject and actions */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className={`font-bold text-base sm:text-lg leading-tight ${textColor}`}>
            {classSession.subject}
          </h3>
          <div className="flex gap-1.5 shrink-0">
            <button
              onClick={handleCopy}
              className={`
                p-2 rounded-xl backdrop-blur-md transition-all duration-200
                ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/30 hover:bg-white/50'} active:scale-95
                ${textColor}
              `}
              title="Copy"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={handleShare}
              className={`
                p-2 rounded-xl backdrop-blur-md transition-all duration-200
                ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/30 hover:bg-white/50'} active:scale-95
                ${textColor}
              `}
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <div className={`flex items-center gap-2.5 text-sm ${textColor}`}>
            <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/10' : 'bg-white/30'} flex items-center justify-center shrink-0`}>
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="font-medium">
              {classSession.startTime} - {classSession.endTime}
            </span>
          </div>

          <div className={`flex items-center gap-2.5 text-sm ${textColor}`}>
            <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/10' : 'bg-white/30'} flex items-center justify-center shrink-0`}>
              <User className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">{classSession.instructor}</span>
          </div>

          <div className={`flex items-center gap-2.5 text-sm ${textColor}`}>
            <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/10' : 'bg-white/30'} flex items-center justify-center shrink-0`}>
              <MapPin className="w-3.5 h-3.5" />
            </div>
            <span className="truncate">{classSession.room}</span>
          </div>

          <div className={`flex items-center gap-2.5 text-sm ${textColor}`}>
            <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/10' : 'bg-white/30'} flex items-center justify-center shrink-0`}>
              <Calendar className="w-3.5 h-3.5" />
            </div>
            <span>Week {classSession.week} • {classSession.shift}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
