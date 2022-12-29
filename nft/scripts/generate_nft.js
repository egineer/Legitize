const spawner = require("child_process").spawn;

//The user passes the images
//The images is saved to a directory

async function createArt(nft_url, nft_id) {
  //Run the python script passing in the dir variable
  const python_process = spawner("python", [
    "nft/scripts/generate_nft.py",
    nft_url,
    nft_id,
  ]);
  let data_received;
  let obj = {}


  //Receive the result from python#    
    await python_process.stdout.on("data", async (data) => {
        data_received = await data.toString();
        obj = extractData(data_received);
        })

    return  obj;
}

//Returns the NFT link, the code link, and the Code coordinates to be saved to the database.
function extractData(dir) {
  const obj = JSON.parse(dir);
  //console.log("NFT Link:", obj[0], "\nCode Link:", obj[1], "\nCode:", obj[2], "\n70Thumb Link:", obj[3]);
  return obj;
}

const nft_url = "public\\img\\login.jpg";
const nft_id = "Diamond";
const obj = await createArt(nft_url, nft_id)
console.log(`obj`,obj)
