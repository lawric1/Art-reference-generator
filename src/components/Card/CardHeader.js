import "./Card.css";

export function CardHeader(props) {
	return (
		<header className="CardHeader">
			<p>{props.name}</p>
			<button>Download</button>
		</header>
	);
}
