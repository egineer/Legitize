import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../../auth/[...nextauth]";
import nextConnect from "next-connect";
import multer from "multer";
import prisma from "../../../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/img/nfts/proofs",
    filename: (req, file, cb) => {
      let uniqueId = uuidv4();
      uniqueId = uniqueId.replace(/-/g, "");
      const ext = file.originalname.split(".").pop();
      const newFileName = `${uniqueId}.${ext}`;
      return cb(null, newFileName);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

console.log("what's going on here?");

apiRoute.post(upload.array("proofs", 5), async (req, res) => {
  const { itemId } = req.body;
  console.log("req", req);
  // Get User Session
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session.user && session.user.email) {
    // Get User
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (req.files && req.files.length) {
      try {
        const proofs = [];
        for (let i = 0; i < req.files.length; i++) {
          const file = req.files[i];
          proofs.push({
            path: "/img/nfts/proofs/" + file.filename,
          });
        }
        // Update Asset
        const result = await prisma.asset.update({
          where: {
            id: parseInt(itemId),
          },
          data: {
            proofs,
          },
        });

        res.status(200).json({ status: "success" });
      } catch (error) {
        throw error;
      }
    }
  } else {
    res.status(401).json({ status: "failed" });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
