const ENV = process.env.CONTENTFUL_ENV;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENV}`;
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  'Content-Type': 'application/json'
}

interface IQueryParams {
  query: string;
  variables?: Record<string, unknown>;
  tags?: string[];
  preview?: boolean;
}

const contentfulGQLClient = {
  query: ({ query, variables = undefined, tags = [], preview = false }: IQueryParams) => {
    return fetch(URL, {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: preview === true ? `Bearer ${PREVIEW_TOKEN}` : headers.Authorization
      },
      body: JSON.stringify({ query, variables }),
      cache: preview ? 'no-cache' : undefined,
      next: preview ? undefined : { tags }
    })
  },
}

export default contentfulGQLClient