require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
  networks: {
    rinkeby:{
      url: process.env.REACT_APP_RINKEBY_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    },
    mumbai: {
      url:process.env.REACT_APP_MUMBAI_RPC_URL,
      accounts: [process.env.REACT_APP_PRIVATE_KEY]
    }
  },
  etherscan:{
    apiKey: process.env.REACT_APP_POLYGONSCAN_KEY
  }
};
