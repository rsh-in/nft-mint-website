import { useState } from "react";
import {ethers, BigNumber} from 'ethers';
import NFT from './NFT.json';

const NFTAddress = "0xAec567Ac3a62ddE6aa3E56cc29cCe455BbF9dB5A"; //address of the deployed mint

const MainMint = ({ accounts, setAccounts }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();  //to sign the transaction
            const contract = new ethers.Contract(
                NFTAddress,
                NFT.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount),{
                    value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
                }); //calls mint function from the contract
                console.log('response: ',response);
            }catch (err) {
                console.log("error: ",err)
            }
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) 
            return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) 
            return;
        setMintAmount(mintAmount + 1);
    };

    return(
        <div>
            <h1>NFT</h1>
            <p>Mint NFTs to check them out.</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}>Mint Now</button>
                </div>
            ):(
                <p>You must be connected to Mint.</p>
            )}
        </div>
    )
}

export default MainMint;