import './home.scss'
import React from 'react'

function Home() {
    return (
        <div className="wrapper">
            <div className="navbar">
                <a href="#bird">Birds</a>
                <a href="#footer">Contact</a>
            </div>
            <div className="name">
                <h2><span>B</span>ird<br/><span>&nbsp;&nbsp;&nbsp;&nbsp;D</span>iaries</h2>
            </div>
        </div>
    )
}

export default Home
