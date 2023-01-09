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
  const { id } = req.query;
  // Get User Session
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session.user && session.user.email) {
    // Get User
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    try {
      if (id === "all") {
        const result = await prisma.asset.findMany({
          where: {
            userId: user.id,
          },
          include: {
            bids: true,
          },
        });
        res.status(200).json({ status: "success", data: result });
      } else {
        const result = await prisma.asset.findFirst({
          where: {
            tokenId: {
              path: ["hex"],
              equals: id,
            },
          },
          include: {
            bids: true,
          },
        });
        res.status(200).json({ status: "success", data: result });
      }
    } catch (e) {
      res.status(200).json({ status: "false" });
    }
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: true,
  },
};
