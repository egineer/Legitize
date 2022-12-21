const spawner = require('child_process').spawn;

//The user passes the images
//The images is saved to a directory

function createArt(nft_url, nft_id){
    //Run the python script passing in the dir variable
    const python_process = spawner('python', ['nft/scripts/generate_nft.py', nft_url, nft_id]);
    let data_received;

    //Receiver the result from python#
    python_process.stdout.on('data', async (data) => {
        data_received = await data.toString()
        extractData(data_received)
    });
}

//Returns the NFT link, the code link, and the Code coordinates to be saved to the database.
function extractData(dir){
    const obj = JSON.parse(dir);
    console.log('NFT Link:', obj[0], '\nCode Link:', obj[1], '\nCode:', obj[2]);
    return(obj[0], obj[1], obj[2])
}

const nft_url = "public\\img\\nfts\\originals\\item_6.jpg";
const nft_id = "Farel";

createArt(nft_url, nft_id)
