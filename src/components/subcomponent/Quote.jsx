import React, { useState, useEffect } from 'react'

const Quote = () => {

    const [quote, setQuote] = useState("");

    const fetchQuote = () => {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                setQuote(data.content);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchQuote();
    }, [])



    return (
        <div className="card-main">
            <p className='joke'>{quote}</p>
            <button className="btn" onClick={fetchQuote}>New Quote</button>
        </div>
    )
}

export default Quote