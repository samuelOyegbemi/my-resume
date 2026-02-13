'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import type { Project } from '@/types/resume';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section id="projects" title="Projects">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <AnimatedSection key={index}>
            <Card>
              <div className="mb-3 flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {project.highlights.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {project.highlights.map((highlight, i) => (
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

              <div className="flex flex-wrap gap-2">
                {project.keywords.map((keyword, i) => (
                  <Badge key={i}>{keyword}</Badge>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </motion.div>
    </Section>
  );
}
