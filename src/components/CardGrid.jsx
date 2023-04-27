import { useFetchGifs } from "../hooks/useFetchGifs";
import Card from "./Card";

function CardGrid({ categori }) {
	const {images, isLoading} = useFetchGifs(categori);	

	return (
		<>
			<h3>{categori}</h3>
			{
				isLoading && <h2>Cargando...</h2>
			}
			<div className="card-grid">
				{images.map((img) => (
					<Card key={img.id} {...img} />
				))}
			</div>
		</>
	);
}

export default CardGrid;
