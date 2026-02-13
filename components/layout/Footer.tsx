import { Github, Linkedin, Mail } from 'lucide-react';
import type { Basics } from '@/types/resume';

interface FooterProps {
  basics: Basics;
}

export function Footer({ basics }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (network: string) => {
    switch (network) {
      case 'GitHub':
        return <Github className="h-5 w-5" />;
      case 'GitLab':
        return <Github className="h-5 w-5" />;
      case 'LinkedIn':
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} {basics.name}. All rights reserved.
          </p>

          <div className="flex gap-4">
            {basics.profiles.map((profile) => (
              <a
                key={profile.network}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label={profile.network}
              >
                {getSocialIcon(profile.network)}
              </a>
            ))}
            <a
              href={`mailto:${basics.email}`}
              className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
