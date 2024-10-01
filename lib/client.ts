import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const ENV = process.env.CONTENTFUL_ENV;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const GRAPHQL_URI = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENV}?access_token=${TOKEN}`;
// const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN;

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: GRAPHQL_URI,
    }),
  });
});
