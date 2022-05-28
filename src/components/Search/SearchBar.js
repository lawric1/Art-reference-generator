import { useState } from "react";

import "./Search.css";

export function SearchBar(props) {
	const [input, setInput] = useState("");

	function updateInput(event) {
		setInput(event.target.value);
	}

	function handleSubmit(event) {
		if (!input) {
			event.preventDefault();
			return;
		}

		// callback function is "getSearchResults" from the App component.
		let queries = input.split(",");
		props.callback({ items: queries });
		// preventDefault is used so the page don't reload when the submit button is clicked.
		event.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit} className="SearchBar">
			<input
				className="inputField"
				type="text"
				placeholder="split words by comma: rock, tree, water"
				onChange={updateInput}
				spellCheck="false"
			/>
		</form>
	);
}
