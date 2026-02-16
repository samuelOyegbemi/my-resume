import type { Basics, Work } from '@/types/resume';

interface StructuredDataProps {
  basics: Basics;
  work?: Work[];
}

export function StructuredData({ basics, work }: StructuredDataProps) {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: basics.name,
    jobTitle: basics.label,
    email: basics.email,
    telephone: basics.phone,
    url: 'https://samueloyegbemi.vercel.app',
    image: basics.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: basics.location.city,
      addressCountry: basics.location.countryCode,
      addressRegion: basics.location.region,
    },
    sameAs: basics.profiles.map((p) => p.url),
    knowsAbout: [
      'Software Engineering',
      'Node.js',
      'TypeScript',
      'AWS',
      'Terraform',
      'DevOps',
      'Microservices',
      'React',
      'Backend Development',
    ],
    worksFor: work && work[0] ? {
      '@type': 'Organization',
      name: work[0].name,
    } : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
