'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Badge } from '@/components/ui/Badge';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/animations';
import type { Project } from '@/types/resume';
import { ExternalLink, Star, GitFork, Code, Users, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';
import { getTechLogoUrl } from '@/lib/image-utils';

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
            <Card className="relative overflow-hidden">
              {/* Featured Badge */}
              {project.featured && (
                <Badge className="absolute right-4 top-4 z-10 bg-yellow-500 text-white">
                  Featured
                </Badge>
              )}

              {/* Project Image */}
              {project.image && (
                <div className="relative mb-4 h-48 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

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
                    aria-label={`Visit ${project.name}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                )}
              </div>

              {/* GitHub Stats */}
              {project.github && (
                <div className="mb-3 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {project.github.stars || 0}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {project.github.forks || 0}
                  </span>
                  {project.github.language && (
                    <span className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      {project.github.language}
                    </span>
                  )}
                </div>
              )}

              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Metrics */}
              {project.metrics && (
                <div className="mb-4 grid grid-cols-3 gap-2 rounded-lg bg-gray-50 p-3 dark:bg-gray-800">
                  {project.metrics.users && (
                    <div className="text-center">
                      <Users className="mx-auto h-4 w-4 text-primary-600" />
                      <div className="mt-1 text-xs font-medium text-gray-900 dark:text-white">
                        {project.metrics.users}
                      </div>
                    </div>
                  )}
                  {project.metrics.performance && (
                    <div className="text-center">
                      <TrendingUp className="mx-auto h-4 w-4 text-green-600" />
                      <div className="mt-1 text-xs font-medium text-gray-900 dark:text-white">
                        {project.metrics.performance}
                      </div>
                    </div>
                  )}
                  {project.metrics.impact && (
                    <div className="text-center">
                      <Zap className="mx-auto h-4 w-4 text-blue-600" />
                      <div className="mt-1 text-xs font-medium text-gray-900 dark:text-white">
                        {project.metrics.impact}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.highlights.length > 0 && (
                <ul className="mb-4 space-y-1">
                  {project.highlights.slice(0, 3).map((highlight, i) => (
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

              {/* Technology Logos */}
              {project.technologies && project.technologies.length > 0 ? (
                <div className="mb-4 flex flex-wrap gap-3">
                  {project.technologies
                    .flatMap((cat) => cat.items)
                    .slice(0, 6)
                    .map((tech, i) => (
                      <div
                        key={i}
                        className="group relative"
                        title={tech}
                      >
                        <Image
                          src={getTechLogoUrl(tech)}
                          alt={tech}
                          width={24}
                          height={24}
                          className="transition-all grayscale hover:grayscale-0"
                        />
                      </div>
                    ))}
                </div>
              ) : (
                // Fallback to keyword badges if no technologies array
                <div className="flex flex-wrap gap-2">
                  {project.keywords.slice(0, 5).map((keyword, i) => (
                    <Badge key={i}>{keyword}</Badge>
                  ))}
                </div>
              )}
            </Card>
          </AnimatedSection>
        ))}
      </motion.div>
    </Section>
  );
}
