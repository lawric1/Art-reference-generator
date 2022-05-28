import { FaGithub } from "react-icons/fa";

import "./NavBar.css";

export function NavBar() {
	function openGithub() {
		window.open("https://github.com/lawric1", "_blank");
	}

	return (
		<nav className="NavBar">
			<p className="Logo">Reference Pack Generator</p>
			<FaGithub
				onClick={openGithub}
				size={40}
				className="Github"
			></FaGithub>
		</nav>
	);
}
