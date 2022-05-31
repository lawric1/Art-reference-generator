// import { BiDownload } from "react-icons/bi";

import "./Card.css";

export function CardHeader(props) {
	return (
		<header className="CardHeader">
			<p className="Name">{props.name}</p>
			{/* <a href={require("")} download>
				<BiDownload size={32} className="Download"></BiDownload>
			</a> */}
		</header>
	);
}
