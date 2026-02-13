import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';
import { getResumeData } from '@/lib/resume-data';

export default function HomePage() {
  const resume = getResumeData();

  return (
    <>
      <Header />
      <main className="bg-white dark:bg-gray-950">
        <Hero basics={resume.basics} />
        <Experience work={resume.work} />
        <Skills skills={resume.skills} />
        <Projects projects={resume.projects} />
        <Education education={resume.education} />
        <Contact />
      </main>
      <Footer basics={resume.basics} />
    </>
  );
}
