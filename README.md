# Samuel Oyegbemi - Professional Resume Website

A modern, responsive resume website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Theme toggle with persistence
- **Smooth Animations**: Framer Motion for professional animations
- **Contact Form**: Functional contact form with validation
- **PDF Download**: Downloadable resume in PDF format
- **SEO Optimized**: Meta tags for search engines and social sharing
- **Fast Performance**: Built with Next.js for optimal speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes
- **Icons**: lucide-react

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/samuelOyegbemi/resume-website.git
cd resume-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Resume Data

Edit the resume data in `data/resume.json` to customize the content.

### Replace PDF

Replace `public/Samuel_Oyegbemi_Resume.pdf` with your own PDF resume.

### Configure Contact Form

Update the Formspree endpoint in `components/sections/Contact.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
});
```

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com). Every push to the main branch triggers an automatic deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samuelOyegbemi/resume-website)

## 📄 License

MIT License - feel free to use this template for your own resume website!

## 👤 Author

**Samuel Oyegbemi**
- GitHub: [@samuelOyegbemi](https://github.com/samuelOyegbemi)
- GitLab: [@samueloyegbemi](https://gitlab.com/samueloyegbemi)
- LinkedIn: [samuel-oyegbemi](https://linkedin.com/in/samuel-oyegbemi)

---

Built with ❤️ using Next.js and Tailwind CSS
