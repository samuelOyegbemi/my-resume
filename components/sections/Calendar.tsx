'use client';

import { Section } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CalendarDays } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Calendar() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <Section id="calendar" title="Schedule a Meeting">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <CalendarDays className="mx-auto mb-4 h-12 w-12 text-primary-600" />
            <p className="text-gray-600 dark:text-gray-400">
              Want to discuss a project or opportunity? Book a time that works for you.
            </p>
          </div>

          {/* Calendly Inline Widget */}
          <div
            className="calendly-inline-widget rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm"
            data-url="https://calendly.com/samueloyegbemi/30min?hide_gdpr_banner=1&primary_color=2563eb"
            style={{ minWidth: '320px', height: '700px' }}
          />

          {!isCalendlyLoaded && (
            <div className="flex items-center justify-center h-[700px] border border-gray-200 dark:border-gray-800 rounded-lg">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading calendar...</p>
              </div>
            </div>
          )}

          {/* Fallback link */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Having trouble with the calendar?{' '}
            <a
              href="https://calendly.com/samueloyegbemi/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline dark:text-primary-500 dark:hover:text-primary-400"
            >
              Open in new window
            </a>
          </p>
        </div>
      </AnimatedSection>
    </Section>
  );
}
