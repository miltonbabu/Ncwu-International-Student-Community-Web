import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { Search, Volume2, ChevronDown, BookOpen, X } from "lucide-react";
import type { VocabularyWord } from "@/data/hsk1Vocabulary";

interface VocabularyListProps {
  words: VocabularyWord[];
  title: string;
  onClose?: () => void;
}

function HighlightedSentence({ 
  sentence, 
  highlight, 
  isDark 
}: { 
  sentence: string; 
  highlight: string; 
  isDark: boolean;
}) {
  const parts = sentence.split(new RegExp(`(${highlight})`, 'gi'));
  
  return (
    <span>
      {parts.map((part, index) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span
            key={index}
            className={`font-bold ${
              isDark 
                ? "text-amber-400 bg-amber-500/20 px-1 rounded" 
                : "text-amber-600 bg-amber-100 px-1 rounded"
            }`}
          >
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
}

export function VocabularyList({ words, title, onClose }: VocabularyListProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedWord, setExpandedWord] = useState<number | null>(null);

  const filteredWords = words.filter(
    (word) =>
      word.chinese.includes(searchTerm) ||
      word.pinyin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.english.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpand = (id: number) => {
    setExpandedWord(expandedWord === id ? null : id);
  };

  const speakWord = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "zh-CN";
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getPartOfSpeechColor = (pos: string) => {
    const colors: Record<string, string> = {
      verb: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      noun: "bg-green-500/20 text-green-300 border-green-500/30",
      adjective: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      pronoun: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      number: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      adverb: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      particle: "bg-slate-500/20 text-slate-300 border-slate-500/30",
      phrase: "bg-teal-500/20 text-teal-300 border-teal-500/30",
      "measure word": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      preposition: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      conjunction: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      "proper noun": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      "verb phrase": "bg-violet-500/20 text-violet-300 border-violet-500/30",
      interjection: "bg-red-500/20 text-red-300 border-red-500/30",
    };
    return colors[pos] || "bg-slate-500/20 text-slate-300 border-slate-500/30";
  };

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              {title}
            </h2>
            <p className={`text-sm ${isDark ? "text-white/60" : "text-slate-500"}`}>
              {filteredWords.length} words
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-slate-100 hover:bg-slate-200 text-slate-900"
            }`}
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
        )}
      </div>

      <div className="relative mb-6">
        <Search
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
            isDark ? "text-white/40" : "text-slate-400"
          }`}
        />
        <input
          type="text"
          placeholder="Search by Chinese, Pinyin, or English..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 rounded-xl text-base transition-all ${
            isDark
              ? "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-emerald-500/50"
              : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-emerald-500"
          } border focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full ${
              isDark
                ? "text-white/40 hover:text-white/70 hover:bg-white/10"
                : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="grid gap-3">
        {filteredWords.map((word) => (
          <div
            key={word.id}
            className={`rounded-xl overflow-hidden transition-all duration-300 ${
              isDark
                ? "bg-white/5 border-white/10 hover:bg-white/10"
                : "bg-white border-slate-200 hover:shadow-lg"
            } border`}
          >
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleExpand(word.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      isDark
                        ? "bg-gradient-to-br from-emerald-500/30 to-teal-500/30 text-emerald-300"
                        : "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
                    }`}
                  >
                    {word.id}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakWord(word.chinese);
                    }}
                    className={`p-2 rounded-lg transition-all flex-shrink-0 ${
                      isDark
                        ? "bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400"
                        : "bg-emerald-100 hover:bg-emerald-200 text-emerald-600"
                    }`}
                    title="Listen to pronunciation"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span
                        className={`text-2xl font-bold ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {word.chinese}
                      </span>
                      <span
                        className={`text-lg ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        {word.pinyin}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-medium rounded-full border ${
                          isDark
                            ? getPartOfSpeechColor(word.partOfSpeech)
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {word.partOfSpeech}
                      </span>
                    </div>
                    <p
                      className={`text-base mt-1 ${
                        isDark ? "text-white/70" : "text-slate-600"
                      }`}
                    >
                      {word.english}
                    </p>
                  </div>
                </div>
                <div
                  className={`transition-transform duration-300 flex-shrink-0 ${
                    expandedWord === word.id ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      isDark ? "text-white/40" : "text-slate-400"
                    }`}
                  />
                </div>
              </div>
            </div>

            {expandedWord === word.id && (
              <div
                className={`px-4 pb-4 pt-0 border-t ${
                  isDark ? "border-white/10" : "border-slate-100"
                }`}
              >
                <div className="mt-4 space-y-3">
                  {word.exampleSentence && (
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                          isDark ? "text-emerald-400" : "text-emerald-600"
                        }`}
                      >
                        Example Sentence
                      </p>
                      <p
                        className={`text-base ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        <HighlightedSentence 
                          sentence={word.exampleSentence} 
                          highlight={word.chinese} 
                          isDark={isDark}
                        />
                      </p>
                      {word.examplePinyin && (
                        <p
                          className={`text-sm mt-1 ${
                            isDark ? "text-emerald-400/70" : "text-emerald-600"
                          }`}
                        >
                          {word.examplePinyin}
                        </p>
                      )}
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/60" : "text-slate-500"
                        }`}
                      >
                        {word.exampleTranslation}
                      </p>
                    </div>
                  )}

                  {word.notes && (
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                          isDark ? "text-amber-400" : "text-amber-600"
                        }`}
                      >
                        Notes
                      </p>
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/70" : "text-slate-600"
                        }`}
                      >
                        {word.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredWords.length === 0 && (
        <div
          className={`text-center py-12 ${
            isDark ? "text-white/50" : "text-slate-500"
          }`}
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg">No words found matching "{searchTerm}"</p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-4 text-emerald-500 hover:text-emerald-400 font-medium"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}
