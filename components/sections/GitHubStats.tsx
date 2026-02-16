'use client';

import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Star, GitFork, Code2 } from 'lucide-react';
import type { Basics } from '@/types/resume';

interface GitHubStatsProps {
  githubStats: Basics['githubStats'];
}

export function GitHubStats({ githubStats }: GitHubStatsProps) {
  if (!githubStats) return null;

  return (
    <Section id="github-stats" title="GitHub Activity">
      <AnimatedSection>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-yellow-500" />
              <div>
                <div className="text-3xl font-bold">{githubStats.totalStars}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Stars</div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <GitFork className="h-8 w-8 text-blue-500" />
              <div>
                <div className="text-3xl font-bold">{githubStats.totalRepos}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Public Repos</div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center gap-3">
              <Code2 className="h-8 w-8 text-green-500" />
              <div>
                <div className="text-3xl font-bold">{githubStats.totalContributions}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Contributions</div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      {/* Language Distribution Chart */}
      <AnimatedSection>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Most Used Languages</h3>
          <div className="space-y-3">
            {githubStats.languages.map((lang) => (
              <div key={lang.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-gray-900 dark:text-gray-100">{lang.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{lang.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800">
                  <div
                    className="h-full rounded-full bg-primary-500 transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
