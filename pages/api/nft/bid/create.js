import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import nextConnect from "next-connect";
import prisma from "../../../../lib/prisma";
import { createArt } from "../../../../nft/scripts/generate_nft";

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

apiRoute.post(async (req, res) => {
  // Get User Session
  const { assetId, price } = req.body;
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session.user && session.user.email) {
    // Get User
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    // Get Asset From Database
    const bids = await prisma.bid.count({
      where: {
        assetId: parseInt(assetId),
        userId: user.id,
      },
    });
    console.log(bids);
    if (bids) {
      res.status(200).json({
        status: "failed",
        message: "You have already placed a bid for this asset!",
      });
    }

    const bid = await prisma.bid.create({
      data: {
        assetId: parseInt(assetId),
        userId: user.id,
        price,
      },
    });

    res.status(200).json({ status: "success", data: bid });
  } else {
    res.status(401).json({ status: "failed" });
  }
});

export default apiRoute;
