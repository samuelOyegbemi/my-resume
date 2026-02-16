import resumeData from '@/data/resume.json';
import type { Resume } from '@/types/resume';

export function getResumeData(): Resume {
  return resumeData as Resume;
}

export function getBasics() {
  return resumeData.basics;
}

export function getWorkExperience() {
  return resumeData.work;
}

export function getEducation() {
  return resumeData.education;
}

export function getSkills() {
  return resumeData.skills;
}

export function getProjects() {
  return resumeData.projects;
}

export function getVolunteer() {
  return resumeData.volunteer || [];
}

export function getLanguages() {
  return resumeData.languages || [];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
