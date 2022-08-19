import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { artist, track } = req.query;

  if (typeof artist !== 'string' || typeof track !== 'string') {
    return res.json({
      success: false,
      message: 'Invalid parameters'
    });
  }

  res.json({
    success: true,
    data: ['lyric']
  });
}
