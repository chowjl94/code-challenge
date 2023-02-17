const main = async () => {
	const Retrieve = await hre.ethers.getContractFactory("RetrieveBal");
	const retrieve = await Retrieve.deploy();

	await retrieve.deployed();

	console.log("Transactions deployed to: ", retrieve.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

runMain();
