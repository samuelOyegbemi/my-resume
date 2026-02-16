import fs from 'fs/promises';
import path from 'path';
import https from 'https';

const TECH_LOGOS = [
  'nodejs', 'typescript', 'javascript', 'python', 'flask', 'express',
  'react', 'redux', 'css3', 'html5', 'tailwindcss', 'vuedotjs',
  'flutter', 'dart', 'android', 'swift',
  'mongodb', 'postgresql', 'mysql', 'redis',
  'amazonaws', 'googlecloud', 'terraform', 'docker', 'kubernetes',
  'githubactions', 'gitlab', 'jenkins', 'circleci',
  'git', 'github', 'npm', 'gnubash', 'linux', 'firebase',
  'jest', 'eslint', 'vite', 'vuetify',
  'oauth', 'jsonwebtokens', 'graphql', 'pwa'
];

const OUTPUT_DIR = 'public/images/tech';
// Use JSDelivr CDN which mirrors Simple Icons GitHub repo
const CDN_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';

async function downloadLogo(slug) {
  const url = `${CDN_BASE}/${slug}.svg`;
  const outputPath = path.join(OUTPUT_DIR, `${slug}.svg`);

  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${slug}: ${res.statusCode}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', async () => {
        try {
          await fs.writeFile(outputPath, data);
          console.log(`✓ Downloaded ${slug}.svg`);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  console.log(`Downloading ${TECH_LOGOS.length} technology logos...`);

  // Download all logos with rate limiting
  for (const slug of TECH_LOGOS) {
    try {
      await downloadLogo(slug);
      await new Promise(resolve => setTimeout(resolve, 100)); // Rate limit
    } catch (error) {
      console.error(`✗ Failed ${slug}:`, error.message);
    }
  }

  // Create default.svg fallback
  const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
</svg>`;
  await fs.writeFile(path.join(OUTPUT_DIR, 'default.svg'), defaultSvg);

  console.log('\n✓ All logos downloaded successfully!');
}

main().catch(console.error);
