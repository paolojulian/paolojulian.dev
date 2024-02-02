import contentfulGQLClient from "@/_lib/contentful-graphql";
import { IPortfolio } from "../_contentful";
import { NotFoundError } from "@/_utils/error-handler";
import { redirect } from "next/navigation";

export async function getPortfolio() {
  const query = `
    query GetPortfolio {
      portfolioCollection(limit: 1) {
          items {
            about
            address
            availability
            support
            resume {
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
      throw res;
    }

    const { data } = await res.json();

    if (data.portfolioCollection.items.length === 0) {
      throw new Error('not-found');
    }

    return data.portfolioCollection.items[0] as IPortfolio;
  } catch (e) {
    redirect('/404')
  }
}
