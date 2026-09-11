import React from 'react';
import { Chapter } from '../types';
import { LessonItemView } from './LessonItemView';

interface ChapterSectionProps {
  chapter: Chapter;
}

export const ChapterSection: React.FC<ChapterSectionProps> = ({ chapter }) => {
  return (
    <section id={`section-${chapter.id}`} className="space-y-4">
      <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 border-b border-stone-200 dark:border-stone-800 pb-2">
        {chapter.title}
      </h2>
      <div className="space-y-3">
        {chapter.lessons.map((lesson) => (
          <LessonItemView key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
};
