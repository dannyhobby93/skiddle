import { Link } from "react-router-dom";
import logo from "../assets/skiddle-logo-white-landscape.png";
import SearchBar from "./SearchBar";

const Header = () => {
	return (
		<div className='px-6 py-10 text-center bg-teal-500 text-neutral-100'>
			<div className='logo'>
				<Link to={"/"}>
					<img src={logo} />
				</Link>
			</div>
			<SearchBar />
		</div>
	);
};

export default Header;
