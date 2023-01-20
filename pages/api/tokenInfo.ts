import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if(req.method === 'GET'){
    res.status(200).json(process.env.INFO_TOKEN)
    
  } else if ( req.method === 'POST') {
    process.env.INFO_TOKEN = JSON.stringify(req.body)
    res.status(201).json(process.env.INFO_TOKEN)
  }
}