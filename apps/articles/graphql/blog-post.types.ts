export interface LatestBlogPost {
  blogPostCollection: {
    items: BlogPost[];
  };
}

export interface BlogPost {
  sys: {
    id: string;
    publishedAt: string;
  };
  banner: {
    url: string;
    title: string;
  },
  title: string;
}
