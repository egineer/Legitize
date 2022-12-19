require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./nft/artifacts",
    sources: "./nft/contracts",
    cache: "./nft/cache",
    tests: "./nft/test",
  },
  networks: {
    goerli: {
      url: process.env.RPCURL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
