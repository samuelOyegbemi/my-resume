import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { StructuredData } from '@/components/seo/StructuredData';
import { getResumeData } from '@/lib/resume-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://my-resume-aqpigdhel-samuel-oyegbemis-projects.vercel.app'),
  title: {
    default: 'Samuel Oyegbemi - Senior Software Engineer | Node.js, AWS, DevOps',
    template: '%s | Samuel Oyegbemi',
  },
  description: 'Senior Software Engineer with 8+ years of experience specializing in Node.js, microservices, AWS cloud infrastructure, Terraform, and DevOps. Expert in building scalable backend systems and leading technical teams.',
  keywords: [
    'Samuel Oyegbemi',
    'Software Engineer',
    'Senior Developer',
    'Node.js Developer',
    'AWS Solutions Architect',
    'DevOps Engineer',
    'Terraform Expert',
    'Microservices Architecture',
    'Backend Development',
    'Full Stack Developer',
    'TypeScript',
    'React',
    'Lagos Nigeria',
    'Remote Work',
    'Technical Lead',
  ],
  authors: [{ name: 'Samuel Oyegbemi', url: 'https://github.com/samuelOyegbemi' }],
  creator: 'Samuel Oyegbemi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://my-resume-aqpigdhel-samuel-oyegbemis-projects.vercel.app',
    title: 'Samuel Oyegbemi - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in Node.js, microservices, AWS cloud infrastructure, and DevOps practices.',
    siteName: 'Samuel Oyegbemi Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Samuel Oyegbemi - Senior Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Oyegbemi - Senior Software Engineer',
    description: 'Senior Software Engineer specializing in Node.js, AWS, microservices, and DevOps',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resume = getResumeData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash script - runs BEFORE page render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

                  if (isDark) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  console.error('Theme initialization failed:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <StructuredData basics={resume.basics} work={resume.work} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
