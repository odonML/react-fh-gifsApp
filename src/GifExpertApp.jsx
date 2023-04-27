import { useState } from "react";
import {List, FormAdd} from "./components";


function GifExpertApp() {
	const [categories, setCategories] = useState(["one pounch", "dragon ball"]);

	const onAddCategori = (newCategori) => {
        if(categories.includes(newCategori)) return; 
		setCategories([...categories, newCategori]);
	};

	return (
		<>
			<h1>Hola mundo</h1>
			<FormAdd onAddCategori={onAddCategori} />
			<List categories={categories}></List>
		</>
	);
}

export default GifExpertApp;
