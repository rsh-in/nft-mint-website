//SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract NFT is ERC721,Ownable {
    uint256 public mintPrice;
    uint256 public totalSupply; //current no. of mints
    uint256 public maxSupply; //total that can be minted
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet; //to withdraw the money that goes into this contract
    mapping (address => uint256) public walletMints; //to keep track of how many each wallet has minted

    constructor() payable ERC721('NFT', 'nft'){
        mintPrice = 0.02 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw wallet address
    }
    
}

