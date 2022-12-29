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

apiRoute.post(async (req, res) => {
  const { artId } = req.body;

  try {
    const result = await prisma.asset.findUnique({
      where: {
        artId: artId,
      },
    });
    res.status(200).json({ status: "success", artData: result });
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
