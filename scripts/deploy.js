const { ethers } = require("hardhat");

async function main(){
  const Arcane = await ethers.getContractFactory("Arcane") //reference to our contract
  const arcane = await Arcane.deploy()

  try{
    await arcane.deployed()
    console.log(`Contract successfully deployed to ${arcane.address} arcaneee`)
    await arcane.setBaseTokenUri("https://ipfs.io/ipfs/QmZU4L6ud69SdDknTw7WFAWTGGy98fZFoaG217pgoZbh4u") //passing in the URI of the metadata json
    console.log(`Base token URI set`)
    // mintNFT()
  } catch(err){
    console.log(`Error: ${err.message}`)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
