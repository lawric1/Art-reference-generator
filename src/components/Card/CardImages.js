import "./Card.css";

export function CardImages(props) {
	let imageLinks = props.images;
	let selectedLinks = [];

	while (selectedLinks.length !== 6) {
		let link = imageLinks[Math.floor(Math.random() * imageLinks.length)];

		console.log(link);
		if (!selectedLinks.includes(link)) {
			selectedLinks.push(link);
		}
	}

	return (
		<section className="CardImages">
			{selectedLinks.map((link) => {
				return <img src={"https://" + link} alt={props.name}></img>;
			})}
		</section>
	);
}
