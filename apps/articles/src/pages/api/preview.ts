import { getBlogPostBySlug } from "@/app/(main-layout)/blogs.v2/_api/blog-post";
import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  if (req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !req.query.secret) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (typeof req.query.slug !== 'string') {
    return res.status(400).json({ message: 'No slug' })
  }


  try {
    const blogPost = await getBlogPostBySlug(req.query.slug, true);

    if (!blogPost) {
      return res.status(404).json({ message: 'Slug not found' })
    }

    const path = `/blogs/${blogPost.slug}/preview`
    res
      .setPreviewData({}, {
        path
      })
      .redirect(307, path);
  } catch (e) {
    console.error(e)
    return res.status(500).json({ message: 'Error', e });
  }
}

export default handler