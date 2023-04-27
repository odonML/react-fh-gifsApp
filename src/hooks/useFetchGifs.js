import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (categori) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
	const getImages = async () => {
		const imgs = await getGifs(categori);
		setImages(imgs);
        setIsLoading(false)
	};
	
	useEffect(() => {
		getImages();
	}, []);

    return {
        images,
        isLoading
    }
}