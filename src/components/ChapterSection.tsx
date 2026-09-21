import React from 'react';
import { Chapter } from '../types';
import { LessonItemView } from './LessonItemView';

interface ChapterSectionProps {
  chapter: Chapter;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({ chapter }) => {
  const displayTitle = chapter.category
    ? `${chapter.category} — ${chapter.title}`
    : chapter.title;

  return (
    <section id={`section-${chapter.id}`} className="space-y-4">
      <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-2">
        {displayTitle}
      </h2>
      {chapter.lessons.length > 0 ? (
        <div className="space-y-3">
          {chapter.lessons.map((lesson) => (
            <LessonItemView key={lesson.id} lesson={lesson} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-8 sm:p-10 text-center max-w-lg mx-auto space-y-3 shadow-xs">
          <p className="text-stone-500 dark:text-stone-400 text-sm">
            Chưa có nội dung. Nội dung sẽ được cập nhật sau.
          </p>
        </div>
      )}
    </section>
  );
};
