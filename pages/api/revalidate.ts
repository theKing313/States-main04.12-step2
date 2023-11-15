import { NextApiRequest, NextApiResponse } from 'next'

// e.g a webhook to `homesapp.ru/api/revalidate?secret=supersecret&path=/`
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // return NextResponse.json({ hi: 3 }, { status: 200 })
  const secret = req.query.secret
  // const tag = request.nextUrl.searchParams.get('tag')
  let path = req.query.path
  if (Array.isArray(path)) path = path[0]

  if (secret !== 'supersecret') {
    return res.status(401).json({ message: 'Invalid token' })
  }
  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await res.revalidate(path || '/')
    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
