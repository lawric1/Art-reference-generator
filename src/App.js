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

		let results = [];
		let data = await response.json();

		for (let [key, value] of Object.entries(data)) {
			results.push([key, value]);
		}

		setSearchResults(results);
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
								key={result[0]}
								name={result[0]}
								images={result[1]}
							/>
						);
					})}
				</CardContainer>
			</main>
		</div>
	);
}

export default App;
