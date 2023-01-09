import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import nextConnect from "next-connect";
import prisma from "../../../../lib/prisma";

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get(async (req, res) => {
  const { tokenId } = req.query;
  try {
    const asset = await prisma.asset.findFirst({
      where: {
        tokenId: {
          path: ["hex"],
          equals: tokenId,
        },
      },
    });
    const bids = await prisma.bid.findMany({
      where: {
        assetId: asset.id,
      },
    });
    res
      .status(200)
      .json({ status: "success", data: { bids, assetCreator: asset.userId } });
  } catch (e) {
    res.status(200).json({ status: "false" });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: true,
  },
};
