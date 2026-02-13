import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-16 px-4 md:py-24 scroll-mt-16',
        className
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
