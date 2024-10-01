/**
 * These are the links to the different apps
 */
export const ExternalLinks = {
  articles: process.env.NEXT_PUBLIC_ARTICLES_URL ?? 'http://localhost:3002',
};

export const Routes = {
  Home: '/',
  About: '/about-me',
  Apps: '/apps',
  Articles: ExternalLinks.articles,
  Contact: '/contact',
} satisfies Record<string, string>;
