/**
 * Image utility functions for the resume website
 */

/**
 * Generate a placeholder avatar URL using UI Avatars API
 * @param text - Text to display in the avatar (usually a name)
 * @param bg - Background color (hex without #)
 * @param fg - Foreground/text color (hex without #)
 * @returns URL string for the placeholder image
 */
export function getPlaceholderDataUrl(
  text: string,
  bg: string = '667eea',
  fg: string = 'ffffff'
): string {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(text)}&background=${bg}&color=${fg}&size=400&bold=true`;
}

/**
 * Get the path to a technology logo based on the technology name
 * Maps technology names to their corresponding SVG logo paths
 * @param techName - Name of the technology
 * @returns Path to the technology logo SVG file
 */
export function getTechLogoUrl(techName: string): string {
  const logoMap: Record<string, string> = {
    // Backend
    'node.js': '/images/tech/nodejs.svg',
    'nodejs': '/images/tech/nodejs.svg',
    'typescript': '/images/tech/typescript.svg',
    'javascript': '/images/tech/javascript.svg',
    'python': '/images/tech/python.svg',
    'python3': '/images/tech/python.svg',
    'flask': '/images/tech/flask.svg',
    'express.js': '/images/tech/express.svg',
    'express': '/images/tech/express.svg',

    // Frontend
    'react': '/images/tech/react.svg',
    'react.js': '/images/tech/react.svg',
    'reactjs': '/images/tech/react.svg',
    'next.js': '/images/tech/nextjs.svg',
    'nextjs': '/images/tech/nextjs.svg',
    'vue': '/images/tech/vue.svg',
    'vue.js': '/images/tech/vue.svg',
    'vuejs': '/images/tech/vue.svg',
    'redux': '/images/tech/redux.svg',
    'css': '/images/tech/css3.svg',
    'html': '/images/tech/html5.svg',
    'tailwind': '/images/tech/tailwindcss.svg',
    'tailwindcss': '/images/tech/tailwindcss.svg',

    // Mobile
    'flutter': '/images/tech/flutter.svg',
    'dart': '/images/tech/dart.svg',
    'android': '/images/tech/android.svg',
    'ios': '/images/tech/swift.svg',

    // Databases
    'mongodb': '/images/tech/mongodb.svg',
    'postgresql': '/images/tech/postgresql.svg',
    'mysql': '/images/tech/mysql.svg',
    'redis': '/images/tech/redis.svg',

    // Cloud & DevOps
    'aws': '/images/tech/aws.svg',
    'aws ec2': '/images/tech/aws.svg',
    'aws rds': '/images/tech/aws.svg',
    'aws ecs': '/images/tech/aws.svg',
    'aws vpc': '/images/tech/aws.svg',
    'aws iam': '/images/tech/aws.svg',
    'aws cloudfront': '/images/tech/aws.svg',
    'aws lambda': '/images/tech/aws.svg',
    'aws lambda@edge': '/images/tech/aws.svg',
    'gcp': '/images/tech/googlecloud.svg',
    'terraform': '/images/tech/terraform.svg',
    'docker': '/images/tech/docker.svg',
    'kubernetes': '/images/tech/kubernetes.svg',

    // CI/CD
    'github actions': '/images/tech/githubactions.svg',
    'gitlab ci': '/images/tech/gitlab.svg',
    'jenkins': '/images/tech/jenkins.svg',
    'circle ci': '/images/tech/circleci.svg',
    'circleci': '/images/tech/circleci.svg',

    // Tools
    'git': '/images/tech/git.svg',
    'github': '/images/tech/github.svg',
    'gitlab': '/images/tech/gitlab.svg',
    'npm': '/images/tech/npm.svg',
    'bash': '/images/tech/gnubash.svg',
    'linux': '/images/tech/linux.svg',
    'firebase': '/images/tech/firebase.svg',
    'jest': '/images/tech/jest.svg',
    'eslint': '/images/tech/eslint.svg',
    'vite': '/images/tech/vite.svg',
    'vuetify': '/images/tech/vuetify.svg',

    // Protocols & Standards
    'oauth2': '/images/tech/oauth.svg',
    'jwt': '/images/tech/jsonwebtokens.svg',
    'graphql': '/images/tech/graphql.svg',

    // Other
    'microservices': '/images/tech/docker.svg', // Using Docker as fallback for microservices
    'progressive web application': '/images/tech/pwa.svg',
    'pwa': '/images/tech/pwa.svg',
    'iac': '/images/tech/terraform.svg',
  };

  return logoMap[techName.toLowerCase()] || '/images/tech/default.svg';
}

/**
 * Get optimized image URL with width parameter
 * @param path - Original image path
 * @param width - Desired width (optional)
 * @returns Optimized image URL
 */
export function getOptimizedImageUrl(path: string, width?: number): string {
  // Next.js Image component handles optimization automatically
  // This function is here for potential future use with external image services
  return path;
}
