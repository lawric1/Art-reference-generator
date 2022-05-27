import { CardHeader } from "./CardHeader";
import { CardImages } from "./CardImages";

import "./Card.css";

export function Card(props) {
	return (
		<section key={props.name} className="Card">
			<CardHeader name={props.name} images={props.images}></CardHeader>
			<CardImages name={props.name} images={props.images}></CardImages>
		</section>
	);
}
