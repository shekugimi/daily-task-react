import React, { useState, useEffect } from 'react'

const Meme = () => {

    const [image, setImage] = useState("");

    const fetchMeme = () => {
        fetch("https://meme-api.com/gimme")
            .then(response => response.json())
            .then(data => {
                setImage(data.preview[data.preview.length - 1]);
                // console.log(data.preveiw[data.preveiw.length - 1]);
                // console.log(data.preview);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchMeme();
    },[])

    return (
        <div className=" card-main card-main-meme">
            <img className='card-img' src={image} alt="just-meme" />
            <button className="btn" onClick={fetchMeme}>New Meme</button>
        </div>
    )
}

export default Meme