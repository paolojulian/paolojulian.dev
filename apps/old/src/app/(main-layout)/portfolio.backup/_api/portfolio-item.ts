import contentfulGQLClient from "@/_lib/contentful-graphql";
import { NotFoundError } from "@/_utils/error-handler";
import { IPortfolioItem } from "@/app/(main-layout)/portfolio.backup/_contentful";
import { redirect } from "next/navigation";

export async function getPortfolioItems() {
  const query = `
    query GetAllPortfolioItem {
      portfolioItemCollection(order: sys_firstPublishedAt_ASC) {
          items {
            name
            content
            description
            role
            tags
            image {
              url
            }
          }
      }
    }
  `;
  try {
    const res = await contentfulGQLClient.query({ query });
    if (!res.ok) {
      if (res.status === 404) {
        throw new NotFoundError();
      }
      throw res
    }
    const { data } = await res.json();
    return data.portfolioItemCollection.items as IPortfolioItem[];
  } catch (e) {
    console.error(e);

    redirect('/404')
  }

}
