import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import nextConnect from "next-connect";
import prisma from "../../../lib/prisma";

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

// Exclude keys from user
const exclude = (user, keys) => {
  for (let key of keys) {
    delete user[key];
  }
  return user;
};

apiRoute.get(async (req, res) => {
  // Get User Session
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session.user && session.user.email) {
    // Get User
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        profile: true,
      },
    });

    if (user) {
      const userWithoutPassword = exclude(user, ["password"]);
      res.status(200).json({ status: "success", user: userWithoutPassword });
    } else {
      res.status(200).json({ status: "false" });
    }
  }
  res.status(200).json({ status: "false" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: true,
  },
};
