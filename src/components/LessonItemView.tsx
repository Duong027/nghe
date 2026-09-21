import React, { useState, useEffect, useRef } from 'react';
import { LessonItem } from '../types';
import { translateGermanToVietnamese } from '../services/translate';

interface LessonItemViewProps {
  lesson: LessonItem;
}

const SPEED_OPTIONS = [0.25, 0.5, 0.75, 1];

export const LessonItemView: React.FC<LessonItemViewProps> = ({ lesson }) => {
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [translations, setTranslations] = useState<Record<number, string>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSetSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const hasText = Boolean(lesson.text && lesson.text.trim().length > 0);
  const hasLines = Boolean(lesson.lines && lesson.lines.length > 0);
  const hasContent = hasText || hasLines;

  // Tách text thành các dòng/câu dựa trên dấu xuống dòng \n
  const rawLines = hasText ? lesson.text!.split('\n') : [];

  // Helper để hiển thị text, nếu có phần nằm trong dấu [...] thì làm nổi bật bằng chữ màu xanh lá và khung viền màu xanh lá
  const renderFormattedLine = (lineText: string): React.ReactNode => {
    if (!lineText.includes('[') || !lineText.includes(']')) {
      return lineText;
    }

    const parts = lineText.split(/(\[[^\]]+\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        const highlighted = part.slice(1, -1);
        return (
          <span
            key={index}
            className="inline-block px-1.5 py-0.5 mx-0.5 rounded border border-emerald-500 dark:border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium leading-tight shadow-2xs"
          >
            {highlighted}
          </span>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

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
        const line = lineStr.replace(/[\[\]]/g, '').trim();
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
          const cleanDe = item.de.replace(/[\[\]]/g, '').trim();
          const translated = await translateGermanToVietnamese(cleanDe);
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
      {/* Tiêu đề bài học và các nút chỉnh tốc độ phát */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-semibold text-stone-800 dark:text-stone-200 text-base">
          {lesson.title}
        </div>

        {/* Các nút chỉnh tốc độ phát 0.25x, 0.5x, 0.75x, 1x (chỉ hiển thị khi có file audio) */}
        {lesson.audioSrc && (
          <div className="flex items-center gap-1.5" role="group" aria-label="Tốc độ phát audio">
            <span className="text-xs text-stone-400 dark:text-stone-500 font-medium mr-0.5">Tốc độ:</span>
            {SPEED_OPTIONS.map((rate) => {
              const isActive = playbackRate === rate;
              return (
                <button
                  key={rate}
                  id={`speed-${lesson.id}-${rate}`}
                  type="button"
                  onClick={() => handleSetSpeed(rate)}
                  className={`px-2 py-0.5 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-2xs font-semibold ring-1 ring-emerald-600 dark:bg-emerald-500 dark:text-stone-950 dark:ring-emerald-400'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-600 dark:bg-stone-800 dark:hover:bg-stone-750 dark:text-stone-300 border border-stone-200 dark:border-stone-700'
                  }`}
                  title={`Phát ở tốc độ ${rate}x`}
                >
                  {rate}x
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Tiêu đề phụ / nhãn (ví dụ: 'Beispiel', 'Nummer 1') hiển thị ở trên audio */}
      {lesson.subTitle && (
        <div className="pt-0.5">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-sm font-bold text-stone-900 dark:text-stone-100">
            {lesson.subTitle}
            {showTranslation && lesson.subTitle.toLowerCase() === 'beispiel' && (
              <span className="text-xs text-stone-500 dark:text-stone-400 font-normal italic">
                (Ví dụ)
              </span>
            )}
            {showTranslation && lesson.subTitle.toLowerCase().startsWith('nummer') && (
              <span className="text-xs text-stone-500 dark:text-stone-400 font-normal italic">
                (Câu {lesson.subTitle.replace(/[^0-9]/g, '')})
              </span>
            )}
          </span>
        </div>
      )}

      {/* Audio player gốc của trình duyệt */}
      {lesson.audioSrc ? (
        <div className="w-full max-w-lg">
          <audio
            ref={audioRef}
            id={`audio-${lesson.id}`}
            controls
            controlsList="nodownload"
            onContextMenu={(e) => e.preventDefault()}
            onError={() => {
              if (lesson.altAudioSrc && audioRef.current && audioRef.current.src !== window.location.origin + lesson.altAudioSrc) {
                audioRef.current.src = lesson.altAudioSrc;
              }
            }}
            onPlay={() => {
              if (audioRef.current && audioRef.current.playbackRate !== playbackRate) {
                audioRef.current.playbackRate = playbackRate;
              }
            }}
            onRateChange={() => {
              if (audioRef.current && audioRef.current.playbackRate !== playbackRate) {
                setPlaybackRate(audioRef.current.playbackRate);
              }
            }}
            className="w-full h-11 focus:outline-none"
            src={lesson.audioSrc}
          >
            Trình duyệt của bạn không hỗ trợ thẻ audio.
          </audio>
        </div>
      ) : !hasContent ? (
        <p className="text-xs text-stone-400 dark:text-stone-500 italic">
          Nội dung và file nghe sẽ được cập nhật sau.
        </p>
      ) : null}

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
                    <div className="text-stone-900 dark:text-stone-100">{renderFormattedLine(line)}</div>
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
                  <div className="text-stone-900 dark:text-stone-100">{renderFormattedLine(item.de)}</div>
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
