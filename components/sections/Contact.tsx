'use client';

import { Section } from '@/components/ui/Section';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        reset();

        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result.error);
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <AnimatedSection>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <Mail className="mx-auto mb-4 h-12 w-12 text-primary-600" />
            <p className="text-gray-600 dark:text-gray-400">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                {...register('name')}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                {...register('email')}
                type="email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Subject
              </label>
              <input
                {...register('subject')}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                placeholder="Project Inquiry"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={6}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-600 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                placeholder="Your message here..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center dark:bg-green-900/20 dark:border-green-900">
                <p className="text-green-600 dark:text-green-400 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-center dark:bg-red-900/20 dark:border-red-900">
                <p className="text-red-600 dark:text-red-400 font-medium">
                  Failed to send message. Please try again or email me directly at{' '}
                  <a
                    href="mailto:samueloyegbemi@gmail.com"
                    className="underline hover:text-red-700 dark:hover:text-red-300"
                  >
                    samueloyegbemi@gmail.com
                  </a>
                </p>
              </div>
            )}
          </form>
        </div>
      </AnimatedSection>
    </Section>
  );
}
