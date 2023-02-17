import { ethers } from "ethers";

const TOKEN_ADDRESS = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c'
const LOOKUP_ADDRESSES = [
  '0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'
]

const provider = new ethers.JsonRpcProvider('https://bsc-dataseed.binance.org/')

// function to get token Holders return [address, balance]
const getSwthHolders = async (holder:string): Promise<{address: string, balance: string}> => {
    // get the contract
    const tokenContract = new ethers.Contract(TOKEN_ADDRESS,[
    'function balanceOf(address) view returns (uint256)',
    ],provider)

    // get the balance of the holder
    const holder_balance = await tokenContract.balanceOf(holder);
    const result = {address:holder, balance:ethers.formatUnits(holder_balance,18)}
    return result    
}
// call getSwtHolder() for each holder
const getAllHolderBalance = async (holders:string[]) =>{
    holders.map(async holder=>{
        const tokenHolder = await getSwthHolders(holder)
        console.log(`${tokenHolder.address} ${tokenHolder.balance}`);
    })
}
 getAllHolderBalance(LOOKUP_ADDRESSES)
