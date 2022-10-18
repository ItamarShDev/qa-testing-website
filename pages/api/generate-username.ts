// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!req.query.name || !req.query.lastName) {
    res.status(200).json({ username: "" });
    return;
  }
  const id = Math.random().toString(36).substring(7);
  const userName = `${req.query.name}-${req.query.lastName}-${id}`;
  res.status(200).json({ username: userName });
}
