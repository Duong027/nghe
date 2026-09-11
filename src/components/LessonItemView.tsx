import React, { useState, useEffect } from 'react';
import { LessonItem } from '../types';
import { translateGermanToVietnamese } from '../services/translate';

interface LessonItemViewProps {
  lesson: LessonItem;
}

export const LessonItemView: React.FC<LessonItemViewProps> = ({ lesson }) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [translations, setTranslations] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hasText = Boolean(lesson.text && lesson.text.trim().length > 0);
  const hasLines = Boolean(lesson.lines && lesson.lines.length > 0);
  const hasContent = hasText || hasLines;

  // Tách text thành các dòng/câu dựa trên dấu xuống dòng \n
  const rawLines = hasText ? lesson.text!.split('\n') : [];

  const handleToggleTranslate = async () => {
    // Nếu đang hiển thị rồi thì bấm để ẩn đi
    if (showTranslation) {
      setShowTranslation(false);
      return;
    }

    // Nếu đã dịch rồi thì chỉ việc bật lên
    if (Object.keys(translations).length > 0) {
      setShowTranslation(true);
      return;
    }

    // Thực hiện gọi API dịch song song các câu qua Promise.all
    setIsLoading(true);
    const newTranslations: Record<number, string> = {};

    if (hasText) {
      const promises = rawLines.map(async (lineStr, i) => {
        const line = lineStr.trim();
        if (line) {
          const translated = await translateGermanToVietnamese(line);
          if (translated) {
            newTranslations[i] = translated;
          }
        }
      });
      await Promise.all(promises);
    } else if (hasLines && lesson.lines) {
      const promises = lesson.lines.map(async (item, i) => {
        if (item.vi) {
          newTranslations[i] = item.vi;
        } else if (item.de) {
          const translated = await translateGermanToVietnamese(item.de);
          if (translated) {
            newTranslations[i] = translated;
          }
        }
      });
      await Promise.all(promises);
    }

    setTranslations(newTranslations);
    setIsLoading(false);
    setShowTranslation(true);
  };

  return (
    <div id={`lesson-${lesson.id}`} className="p-4 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl shadow-xs space-y-3.5 animate-fade-in">
      {/* Tiêu đề bài học */}
      <div className="font-semibold text-stone-800 dark:text-stone-200 text-base">
        {lesson.title}
      </div>

      {/* Audio player gốc của trình duyệt */}
      <div className="w-full max-w-lg">
        <audio
          id={`audio-${lesson.id}`}
          controls
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          className="w-full h-11 focus:outline-none"
          src={lesson.audioSrc || undefined}
        >
          Trình duyệt của bạn không hỗ trợ thẻ audio.
        </audio>
      </div>

      {/* Phần văn bản và nút dịch */}
      {hasContent && (
        <div className="space-y-2.5 pt-1">
          {/* Nút bấm dịch sang tiếng Việt ở trên đoạn text */}
          <div className="flex items-center">
            <button
              id={`translate-btn-${lesson.id}`}
              type="button"
              onClick={handleToggleTranslate}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 dark:bg-stone-800 dark:hover:bg-stone-750 dark:text-stone-200 dark:border-stone-700 transition-colors border border-stone-300 cursor-pointer disabled:opacity-50"
            >
              <span>
                {isLoading
                  ? 'Đang dịch...'
                  : showTranslation
                  ? 'Ẩn bản dịch tiếng Việt'
                  : 'Dịch sang tiếng Việt'}
              </span>
              {isLoading && (
                <span className="inline-block w-3 h-3 border-2 border-stone-600 dark:border-stone-400 border-t-transparent rounded-full animate-spin"></span>
              )}
            </button>
          </div>

          {/* Vùng hiển thị văn bản tiếng Đức và bản dịch từng dòng ngay bên dưới */}
          <div
            id={`text-${lesson.id}`}
            className="text-stone-850 dark:text-stone-200 text-sm leading-relaxed bg-stone-50 dark:bg-stone-950/60 p-3.5 rounded-lg border border-stone-200 dark:border-stone-800 space-y-2.5 font-normal"
          >
            {hasText ? (
              rawLines.map((line, idx) => {
                const trimmed = line.trim();
                if (!trimmed) {
                  return <div key={idx} className="h-2" />;
                }
                return (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-stone-900 dark:text-stone-100">{line}</div>
                    {showTranslation && translations[idx] && (
                      <div className="text-stone-500 dark:text-stone-400 text-xs pl-2 border-l-2 border-amber-400 dark:border-amber-500">
                        {translations[idx].replace(/[↑↓↗↘←→▲▼]/g, '').trim()}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              lesson.lines?.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="text-stone-900 dark:text-stone-100">{item.de}</div>
                  {showTranslation && translations[idx] && (
                    <div className="text-stone-500 dark:text-stone-400 text-xs pl-2 border-l-2 border-amber-400 dark:border-amber-500">
                      {translations[idx].replace(/[↑↓↗↘←→▲▼]/g, '').trim()}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
