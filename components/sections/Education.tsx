'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import type { Education as EducationType } from '@/types/resume';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <Section id="education" title="Education">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <AnimatedSection key={index}>
            <Card>
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary-100 p-3 dark:bg-primary-900/30">
                  <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="mb-2 text-gray-600 dark:text-gray-400">
                    {edu.studyType} in {edu.area}
                  </p>
                  {edu.score && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      GPA: {edu.score}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
