const { ethers } = require("hardhat");

async function main(){
  const Arcane = await ethers.getContractFactory("Arcane") //reference to our contract
  const arcane = await Arcane.deploy()
  await arcane.setBaseTokenURI("https://ipfs.io/ipfs/QmYHNiQr5cuzQgisuV1cVzjNhaoUL4B8Hx6XQg7tzGBfRF") //passing in the URI of the metadata json

  try{
    await arcane.deployed()
    console.log(`Contract successfully deployed to ${arcane.address}`)
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
