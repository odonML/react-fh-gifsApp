import { useState } from 'react';

function FormAdd({onAddCategori}) {
    const [inpitValue, setInpitValue] = useState("");

    const onInputChange = ({target}) => {
        setInpitValue(target.value)
    }
    const addCategori = (event) =>{
        event.preventDefault();
        if(inpitValue.trim().length < 1) return;
        onAddCategori(inpitValue)
        setInpitValue("")
    }
	return (
		<form onSubmit={addCategori}>
			<input type="text" placeholder="Buscar Gifs" value={inpitValue} onChange={ onInputChange}/>
		</form>
	);
}


export default FormAdd;