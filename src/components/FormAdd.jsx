import PropTypes from 'prop-types'
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
		<form onSubmit={addCategori} aria-label='form'>
			<input type="text" placeholder="Buscar Gifs" value={inpitValue} onChange={ onInputChange}/>
		</form>
	);
}

FormAdd.propTypoes = {
    onAddCategori: PropTypes.func.isRequired,
}


export default FormAdd;