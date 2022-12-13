import React from 'react'
import Joke from './subcomponent/Joke'
import Meme from './subcomponent/Meme'
import "./Home.css"
import Quote from './subcomponent/Quote'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="wrap">
                    <Joke />
                    <Quote />
                    <Meme />
                </div>
            </div>

        </>
    )
}

export default Home