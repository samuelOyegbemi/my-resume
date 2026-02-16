'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Clock, Briefcase, Code } from 'lucide-react';
import Image from 'next/image';
import type { Basics } from '@/types/resume';
import { getPlaceholderDataUrl } from '@/lib/image-utils';

interface HeroProps {
  basics: Basics;
}

export function Hero({ basics }: HeroProps) {
  const scrollToAbout = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getSocialIcon = (network: string) => {
    switch (network) {
      case 'GitHub':
        return <Github className="h-6 w-6" />;
      case 'GitLab':
        return <Github className="h-6 w-6" />;
      case 'LinkedIn':
        return <Linkedin className="h-6 w-6" />;
      default:
        return null;
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4 pt-16">
      <div className="container mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-primary-500 shadow-2xl">
              <Image
                src={basics.image || getPlaceholderDataUrl(basics.name)}
                alt={basics.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 192px, 192px"
              />
            </div>
          </div>

          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white md:text-7xl">
            {basics.name}
          </h1>

          <p className="mb-6 text-2xl text-gray-600 dark:text-gray-300 md:text-3xl">
            {basics.label}
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {basics.summary}
          </p>

          {/* Metrics Counter */}
          {basics.metrics && (
            <div className="mb-8 flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary-600 dark:text-primary-500">
                  <Clock className="h-8 w-8" />
                  <span>{basics.metrics.yearsOfExperience}+</span>
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary-600 dark:text-primary-500">
                  <Briefcase className="h-8 w-8" />
                  <span>{basics.metrics.projectsCompleted}+</span>
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-4xl font-bold text-primary-600 dark:text-primary-500">
                  <Code className="h-8 w-8" />
                  <span>{basics.metrics.technologiesUsed}+</span>
                </div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">Technologies</div>
              </div>
            </div>
          )}

          {/* Social Links */}
          <div className="mb-12 flex justify-center gap-4">
            {basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-gray-100 p-3 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label={profile.network}
              >
                {getSocialIcon(profile.network)}
              </a>
            ))}
            <a
              href={`mailto:${basics.email}`}
              className="rounded-lg bg-gray-100 p-3 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <motion.button
            onClick={scrollToAbout}
            className="mx-auto flex items-center gap-2 text-gray-600 dark:text-gray-400"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-6 w-6" />
            <span>Scroll to explore</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
