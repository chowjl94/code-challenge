const { ethers } = require("ethers");
const { abi } = require("../utils/RetrieveBal.json");

const ADDR = "0x26Fe2C6495d75fBbc64238E79524bE0B47D3aC19"; // your contract address
const ABI = [abi]; // your contract ABI

const ADDRESS = "0x45EC3601E7794755e80E20b1C695F658D481e081"; // some wallet address with token balance
const TOKENS = ["0x7af963cf6d228e564e2a0aa0ddbf06210b38615d "]; // goerli eth

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
	const contract = new ethers.Contract(ADDR, ABI, provider);

	const balances = await contract.getBalances(ADDRESS, TOKENS);

	return balances;
};

test().then(console.log);
