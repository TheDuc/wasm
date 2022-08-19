import { NextApiRequest, NextApiResponse } from 'next';

import { Client } from '../../youtubei';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { artist, track } = req.query;

  if (typeof artist !== 'string' || typeof track !== 'string') {
    return res.json({
      success: false,
      message: 'Invalid parameters'
    });
  }

  const client = new Client();
  const result = await client.search(`${artist} - ${track}`);

  console.log(result.items[0]);

  res.json({
    success: true,
    data: ['lyric']
  });
}
