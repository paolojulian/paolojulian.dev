const SPACE = process.env.CONTENTFUL_SPACE_ID || '';
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || '';
const URL = `https://cdn.contentful.com/spaces/${SPACE}/entries?access_token=${TOKEN}`;

const contentfulRestClient = {
  getEntries: ({ content_type }: { content_type: string }) => {
    const queryParams = new URLSearchParams({
      content_type
    });
    return fetch(
      `${URL}&${queryParams.toString()}`
    )
  }
}

export default contentfulRestClient
