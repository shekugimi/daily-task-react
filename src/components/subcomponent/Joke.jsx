import React, { useState, useEffect } from 'react'
import "./subcomponent.css"

const Joke = () => {

    let [joke, setJoke] = useState("");


    const fetchJoke = () => {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist,explicit&type=single")
            .then(response => response.json())
            .then(response => {
                if (response.joke !== undefined)
                    setJoke(response.joke);
                else
                    fetchJoke();
            })
            // .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchJoke();
    }, [])


    return (
        <>
            <div className="card-main">
                <p className='joke'>{joke}</p>
                <button className="btn" onClick={fetchJoke}>New Joke</button>
            </div>


        </>
    )
}

export default Joke