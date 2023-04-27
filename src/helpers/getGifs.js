export const getGifs =  async (categorie) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=jVuytu3vZtxBmK09jjLVsHYA91NmApsU&q=${categorie}&limit=5`
    const resp = await fetch(url);
    const { data } = await resp.json();
    console.log(data)
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}