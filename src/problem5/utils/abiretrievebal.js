const abi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "wallet",
				type: "address",
			},
			{
				internalType: "address[]",
				name: "tokens",
				type: "address[]",
			},
		],
		name: "getBalances",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "token",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "balance",
						type: "uint256",
					},
				],
				internalType: "struct RetrieveBal.TokenBalance[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];

export default abi;
