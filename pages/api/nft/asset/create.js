import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";
import nextConnect from "next-connect";
import multer from "multer";
import prisma from "../../../../lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { createArt } from "../../../../nft/scripts/generate_nft";

let uuid = uuidv4();
uuid = uuid.replace(/-/g, "");

console.log("uuid", uuid);

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/img/nfts/originals",
    filename: (req, file, cb) => {
      const ext = file.originalname.split(".").pop();
      const newFileName = `${uuid}.${ext}`;
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
apiRoute.use(uuid);
apiRoute.post(upload.single("image"), async (req, res) => {
  // Get User Session
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session.user && session.user.email) {
    // Get User
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    // Create Art
    if (req.file && req.file.filename) {
      const { path } = req.file;
      try {
        // Create Asset in Database
        const { name, description, price } = req.body;
        const asset = await prisma.asset.create({
          data: {
            artId: uuid,
            image: "/img/nfts/originals/" + req.file.filename,
            imagePath: path,
            userId: user.id,
            name,
            description,
            price,
          },
        });
        console.log("asset", asset);
        res.status(200).json({ status: "success", itemId: asset.id });
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
