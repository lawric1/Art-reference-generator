import { useState } from "react";

import "./Search.css";

function filterInput(input, itemLimit) {
	let items = input.split(",");
	items = items.map((item) => item.trim());
	items = items.filter((item) => item.length > 0);

	return items.slice(0, itemLimit);
}

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
		let queries = filterInput(input, 4);
		props.callback({ items: queries });

		// preventDefault is used so the page don't reload when the submit event trigger.
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
