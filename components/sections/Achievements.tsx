'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Trophy, Github, DollarSign, Award } from 'lucide-react';
import type { Achievement } from '@/types/resume';
import { formatDate } from '@/lib/resume-data';

const iconMap = {
  trophy: Trophy,
  github: Github,
  'dollar-sign': DollarSign,
  award: Award,
};

interface AchievementsProps {
  achievements?: Achievement[];
}

export function Achievements({ achievements }: AchievementsProps) {
  if (!achievements || achievements.length === 0) return null;

  return (
    <Section id="achievements" title="Key Achievements">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.icon as keyof typeof iconMap] || Award;
          return (
            <AnimatedSection key={index}>
              <Card className="flex gap-4 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                  <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-gray-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  {achievement.date && (
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                      {formatDate(achievement.date)}
                    </p>
                  )}
                </div>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
}
