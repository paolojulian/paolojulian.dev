export interface IContentfulSearchItem {
  entityId: string;
  objectId: string;
  parameters: {
    title: string;
    description: string;
    tags: string[]
    slug: string;
  }
  spaceId: string;
}