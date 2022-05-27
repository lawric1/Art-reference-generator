import "./Card.css";

export function CardImages(props) {
	return (
		<section className="CardImages">
			{props.images.map((link) => {
				return <img src={link}></img>;
			})}
		</section>
	);
}
