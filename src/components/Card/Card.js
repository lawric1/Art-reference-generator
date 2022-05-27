import { CardHeader } from "./CardHeader";
import { CardImages } from "./CardImages";

import "./Card.css";

export function Card() {
	return (
		<section className="Card">
			<CardHeader></CardHeader>
			<CardImages></CardImages>
		</section>
	);
}
