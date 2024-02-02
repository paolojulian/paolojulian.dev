import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors({
  methods: ['POST']
})


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (req: NextApiRequest, res: NextApiResponse, callback: (result: unknown) => void) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  const secret = req.query.secret;
  const tag = req.query.tag

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (typeof tag !== 'string') {
    return res.status(400).json({ message: 'Tag is required.' })
  }
  try {
    await fetch('/api/revalidate', {
      method: 'POST'
    })
    // await fetch('http://localhost:3000/api/revalidate', {
    //   method: 'POST'
    // })
    // await res.revalidate('/')
  } catch (e) {
    console.error('Unable to revalidate', e);
    throw e;
  }

  return res.json({ revalidated: true, date: Date.now() })
}