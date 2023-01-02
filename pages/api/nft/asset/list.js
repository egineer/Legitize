import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import nextConnect from "next-connect";
import multer from "multer";
import prisma from "../../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { createArt } from "../../../../nft/scripts/generate_nft";
import { now } from "next-auth/client/_utils";

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
  const { itemId } = req.body;
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session.user && session.user.email) {
    // Get User
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    // Get Asset From Database
    const asset = await prisma.asset.findUnique({
      where: {
        id: parseInt(itemId),
      },
    });

    if (asset) {
      // Update Token Id
      const result = await prisma.asset.update({
        where: {
          id: parseInt(itemId),
        },
        data: {
          status: "listed",
        },
      });
    }

    res.status(200).json({ status: "success" });
  } else {
    res.status(401).json({ status: "failed" });
  }
});

export default apiRoute;
