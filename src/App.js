import { NavBar } from "./components/NavBar/NavBar";
import { SearchBar } from "./components/Search/SearchBar";
import { CardContainer } from "./components/Card/CardContainer";
import { Card } from "./components/Card/Card";

import { useState } from "react";
import "./App.css";

function App() {
	const [searchResults, setSearchResults] = useState([]);

	async function getSearchResults(input) {
		const response = await fetch("www.google.com/post", {
			method: "POST",
			body: JSON.stringify({ input }),
		});
	}

	return (
		<div className="App">
			<NavBar></NavBar>
			<main>
				<SearchBar callback={getSearchResults} />
				<CardContainer>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</CardContainer>
			</main>
		</div>
	);
}

export default App;
