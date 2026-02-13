'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { formatDate, calculateDuration } from '@/lib/utils';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import type { Work } from '@/types/resume';
import { Briefcase, MapPin } from 'lucide-react';

interface ExperienceProps {
  work: Work[];
}

export function Experience({ work }: ExperienceProps) {
  return (
    <Section id="experience" title="Work Experience">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="space-y-8"
      >
        {work.map((job, index) => (
          <AnimatedSection key={index}>
            <Card>
              <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                    {job.position}
                  </h3>
                  <div className="mb-2 flex items-center gap-2 text-primary-600 dark:text-primary-400">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-medium">{job.name}</span>
                  </div>
                  {job.location && (
                    <div className="mb-2 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                  )}
                  {job.summary && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{job.summary}</p>
                  )}
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div>{formatDate(job.startDate)} - {formatDate(job.endDate)}</div>
                  <div className="text-xs">{calculateDuration(job.startDate, job.endDate)}</div>
                </div>
              </div>

              {job.highlights.length > 0 && (
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="text-primary-600">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </AnimatedSection>
        ))}
      </motion.div>
    </Section>
  );
}
