require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/LtGknINl0fsKBaACrvqDuy1Ium_hSS9W",
			accounts: [
				"d4d302969073b93a10bedfbc808d913a11f0091d742ba87b0c2697c09e078f4f",
			],
		},
	},
};
