import algoliasearchConstants from "./algoliasearch-client.constants";
import algoliasearch from "algoliasearch";
import { createInMemoryCache } from '@algolia/cache-in-memory';
import { createNullCache } from "@algolia/cache-common";

const algoliasearchClient = algoliasearch(
  algoliasearchConstants.applicationId,
  algoliasearchConstants.searchAPIKey,
  {
    requestsCache: createNullCache(),
    responsesCache: createInMemoryCache({ serializable: false }),
  }
);

export default algoliasearchClient;