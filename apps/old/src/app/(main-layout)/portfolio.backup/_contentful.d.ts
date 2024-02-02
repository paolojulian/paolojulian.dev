export interface IPortfolioItem {
  name: string;
  description: string;
  content: string;
  image: {
    url: string
  }
  tags: string[]
  role?: string;
}

export interface IPortfolio {
  address: string[];
  availability: string[];
  support: string[];
  about: string;
  resume: {
    url: string;
  }
}