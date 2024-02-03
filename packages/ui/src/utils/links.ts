const links = {
  base: process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000',
  about: process.env.NEXT_PUBLIC_ABOUT_URL ?? 'http://localhost:3002',
  articles: process.env.NEXT_PUBLIC_ARTICLES_URL ?? 'http://localhost:3002',
  apps: process.env.NEXT_PUBLIC_APPS_URL ?? 'http://localhost:3002',
};

export default links;
