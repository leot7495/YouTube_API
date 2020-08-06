import React from 'react'

import VideosList from '../../components/Videos/VideoList'

import './Home.css'

function Home () {
    return (
        <>
            <div className="videos">
                <div className="container">
                    <VideosList />
                </div>
            </div>
        </>
    )
}
export default Home;