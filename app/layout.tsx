import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Samuel Oyegbemi - Senior Software Engineer',
  description: 'Senior Software Engineer with 8+ years of experience in Node.js, React, AWS, microservices architecture, and DevOps. Available for new opportunities.',
  keywords: ['software engineer', 'full stack developer', 'node.js', 'react', 'aws', 'devops', 'microservices', 'typescript', 'samuel oyegbemi'],
  authors: [{ name: 'Samuel Oyegbemi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://samuel-oyegbemi.vercel.app',
    title: 'Samuel Oyegbemi - Senior Software Engineer',
    description: 'Senior Software Engineer with 8+ years of experience specializing in backend development, microservices, and cloud infrastructure.',
    siteName: 'Samuel Oyegbemi Resume',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Oyegbemi - Senior Software Engineer',
    description: 'Senior Software Engineer with 8+ years of experience in Node.js, React, AWS, and microservices.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
