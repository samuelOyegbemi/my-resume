'use client';

import { Section } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import type { Skill } from '@/types/resume';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((skill, index) => (
          <AnimatedSection key={index}>
            <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                {skill.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.keywords.map((keyword, i) => (
                  <Badge key={i}>{keyword}</Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </motion.div>
    </Section>
  );
}
