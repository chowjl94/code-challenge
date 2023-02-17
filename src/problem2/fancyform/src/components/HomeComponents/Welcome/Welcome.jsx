import React, { useState } from "react";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "../../../utils/Loader";
import FormInput from "./Input";

const gridstyle =
	"min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const inputs = [
	{
		id: 1,
		name: "addressTo",
		label: "Recipient Address",
		placeholder: "Recipient Address",
		errorMessage: "Enter the address of receiver",
		required: true,
	},
	{
		id: 2,
		name: "amount",
		type: "number",
		label: "Amount",
		placeholder: "Amount",
		errorMessage: "Enter the amount you wish to send",
		required: true,
	},
];

const Welcome = () => {
	const [isConnected, setIsConnected] = useState(false);
	const [account, setAccount] = useState("");
	const [isTrxLoading, setIsTrxLoading] = useState(false);
	const [formData, setFormData] = useState({
		addressTo: "",
		amount: "",
	});

	const connect = () => {
		const connecting = () => {
			setAccount("0xb4371da53140417cbb3362055374b10d97e420bb");
			setIsConnected(true);
		};
		setTimeout(connecting, 3000);
		console.log(isConnected);
	};

	const handleChange = (e, name) => {
		setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
		console.log(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsTrxLoading(true);
		const submited = () => {
			setIsTrxLoading(false);
			alert("Transaction Successful");
		};
		setTimeout(submited, 2000);
	};

	return (
		<div className='flex w-full justify-center items-center'>
			<div className='flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4'>
				<div className='flex flex-1 justify-start flex-col px-5 md:mr-10'>
					<h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
						<div>
							Crypto transactions
							<br></br>
							Anywhere , Anytime
						</div>
					</h1>
					<br></br>
					<p className='text-left mt-0.5 text-white font-light md:w-9/12 w-11/12 text-base'>
						Make peer to peer transactions anytime, anywhere with anyone
					</p>

					{account ? (
						<div className='hover:default flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3'>
							<p className='text-white text-base font-semibold '>
								Wallet Connected
							</p>
						</div>
					) : (
						<button
							type='button'
							onClick={connect}
							className='flex flex-row justify-center items-center my-5 bg-[#2952e3] rounded-full p-3 cursor-pointer hover:bg-[#2546bd]'>
							<p className='text-white text-base font-semibold '>
								Connect Wallet
							</p>
						</button>
					)}

					<div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
						<div className={`rounded-tl-2xl ${gridstyle}`}>Peer to Peer</div>
						<div className={`${gridstyle}`}>Secure</div>
						<div className={`rounded-tr-2xl ${gridstyle}`}>World Wide</div>
						<div className={`rounded-bl-2xl ${gridstyle}`}>ETH</div>
						<div className={`${gridstyle}`}>BTC</div>
						<div className={`rounded-br-2xl ${gridstyle}`}>SWTH</div>
					</div>
				</div>

				<div className='flex flex-col'>
					<div className='flex flex-col flex-1 px-5 items-center justify-center w-full md:mt-0 mt-10'>
						<div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
							<div className='flex justify-between flex-col w-full h-full'>
								<div className='flex justify-between items-start'>
									<div className='w-10 h-10 rounded-full border-2 border-black flex justify-center items-center '>
										<SiEthereum></SiEthereum>
									</div>
									{account ? (
										<a
											href={`https://etherscan.io/token/${account}`}
											target='_blank'
											rel='noreferrer'>
											<BsInfoCircle></BsInfoCircle>
										</a>
									) : (
										<BsInfoCircle></BsInfoCircle>
									)}
								</div>

								{account ? (
									<p className='font-semibold text-sm'>
										Meta Mask Account :<br></br>
										{`${account.slice(0, 5)} ... ${account.slice(
											account.length - 5
										)}`}
									</p>
								) : (
									<p className='font-semibold text-sm'>
										Meta Mask Account :<br></br>_ _ _ _ _
									</p>
								)}
							</div>
						</div>
					</div>

					<div className='p-5 sm:w-96 flex flex-col justify-start items-center blue-glassmorphism'>
						<form>
							{inputs.map((input) => (
								<FormInput
									key={input.id}
									{...input}
									value={formData[input.name]}
									onChange={handleChange}
								/>
							))}

							<div className='h-[2px] w-full bg-gray-400 my-2'></div>

							{isTrxLoading ? (
								<Loader></Loader>
							) : (
								<button
									type='button'
									onClick={handleSubmit}
									className='text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-[#2546bd]'>
									{" "}
									Send Now
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
