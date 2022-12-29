import prisma from "../../lib/prisma";
const spawner = require("child_process").spawn;

//The user passes the images
//The images is saved to a directory

export async function createArt(nft_url, nft_id, userId) {
  //Run the python script passing in the dir variable
  const python_process = spawner("python", [
    "nft/scripts/generate_nft.py",
    nft_url,
    nft_id,
  ]);
  let data_received;
  let obj = {};

  //Receiver the result from python#
  python_process.stdout.on("data", async (data) => {
    data_received = await data.toString();
    const obj = JSON.parse(data_received);
    console.log("NFT Link:", obj[0], "\nCode Link:", obj[1], "\nCode:", obj[2]);
    // Create Asset in database
    const result = await prisma.asset.create({
      data: {
        artId: nft_id,
        image: obj[0],
        userId,
      },
    });
    // extractData(data_received);
  });
}

//Returns the NFT link, the code link, and the Code coordinates to be saved to the database.
export function extractData(dir) {
  const obj = JSON.parse(dir);
  //console.log("NFT Link:", obj[0], "\nCode Link:", obj[1], "\nCode:", obj[2], "\n70Thumb Link:", obj[3]);
  return obj;
}

// const nft_url = "public\\img\\login.jpg";
// const nft_id = "Diamond";

// createArt(nft_url, nft_id);
