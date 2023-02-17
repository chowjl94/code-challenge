// import Navbar from "../../components/HomeComponents/NavbarHome/Navbar";
// import Welcome from "../../components/HomeComponents/Welcome/Welcome";
// import Services from "../../components/HomeComponents/Services/Services";
// import Transactions from "../../components/HomeComponents/Transactions/Transactions";
// import Information from "../../components/HomeComponents/Information/Information";
import Navbar from "../components/HomeComponents/NavbarHome/Navbar";
import Welcome from "../components/HomeComponents/Welcome/Welcome";
import Information from "../components/HomeComponents/Information/Information";

const Home = () => {
	return (
		<div className='min-h-screen'>
			<Navbar></Navbar>
			<Welcome></Welcome>
			{/* <Services></Services> */}
			<Information></Information>
		</div>
	);
};

export default Home;
