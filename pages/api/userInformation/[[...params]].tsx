import type { NextApiRequest, NextApiResponse } from "next";
import console from "console";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    IP,
    language,
    mobile,
    browser,
    screenSize,
    browserSize,
    cookiesAccepted,
  } = req.body as any;
  try {
    console.log(
      IP,
      language,
      mobile,
      browser,
      screenSize,
      browserSize,
      cookiesAccepted
    );

    res.status(201);
  } catch (err) {
    console.log(err);
  } finally {
  }
};
