import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
// import { ConnectWallet } from "@thirdweb-dev/react";
import logo from "../../../images/logo.png";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<nav className='w-full flex md:justify-center justify-between items-center py-4'>
			<div className='md:flex-[0.5] flex-intial justify-center items-center '>
				<a href={"/"}>
					<img src={logo} alt='logo' className='w-32 cursor-pointer'></img>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
