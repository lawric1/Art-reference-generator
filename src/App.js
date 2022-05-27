import { NavBar } from "./components/NavBar/NavBar";
import { SearchBar } from "./components/Search/SearchBar";
import { CardContainer } from "./components/Card/CardContainer";
import { Card } from "./components/Card/Card";

import { useState } from "react";

import "./App.css";

function App() {
	const [searchResults, setSearchResults] = useState([]);

	async function getSearchResults(input) {
		const response = await fetch(
			"https://image-scraper-api.herokuapp.com/post",
			{
				method: "POST",
				body: JSON.stringify(input),
			}
		);

		let data = await response.json();
		// Change data structure in the api
	}

	return (
		<div className="App">
			<NavBar></NavBar>
			<main>
				<SearchBar callback={getSearchResults} />
				<CardContainer>
					{searchResults.map((result) => {
						return (
							<Card
								key={result.key}
								name={result.key}
								images={result.value}
							/>
						);
					})}
				</CardContainer>
			</main>
		</div>
	);
}

export default App;
