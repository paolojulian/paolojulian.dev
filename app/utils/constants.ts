/**
 * These are the links to the different apps
 */
export const ExternalLinks = {
  articles: process.env.NEXT_PUBLIC_ARTICLES_URL ?? 'http://localhost:3002',
  oldApp: process.env.NEXT_PUBLIC_OLD_APP_URL ?? '',
};

export const Routes = {
  Home: '/',
  About: '/about-me',
  Apps: '/apps',
  Articles: `${ExternalLinks.oldApp}/blogs`,
  Contact: `${ExternalLinks.oldApp}/contact`,
} satisfies Record<string, string>;

export const DynamicRoutes = {
  ArticleItem: (slug: string) => `${ExternalLinks.articles}/blogs/${slug}`,
};
