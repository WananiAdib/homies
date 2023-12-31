import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import "../Styles/Home.css";

function Home() {
	return (
		<div className="home">
			<h1>Home</h1>
			<div className="links-wrapper">
				<Link className="page-link" to={"/house"}>
					<BsFillHouseFill
						style={{
							fill: "black",
							backgroundColor: "transparent",
						}}
						size={80}
					/>
				</Link>
				<div className="inner-links-wrapper">
					<Link className="page-link" to={"/create-house"}>
						Create House
					</Link>
					<Link className="page-link" to={"/join-house"}>
						Join House
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
