import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
const Games = () => {

  return (
    <div>
      {/*Header section*/}
      <div className="header">
        <div className="image">
        <img src="../images/logofinal.png" alt="" />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/games">Games</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>



      <div className='game-container' >
        <div className="wrapper">
          <Link to="/rock">

            <div className="game-card">
              <img src="../images/r-p-s.jpg" alt="" />
              <div className="overlay">

                <h2>Rock-Paper-Seizer</h2>
                <p>Play and Learn</p>

              </div>
            </div>
          </Link>
          <Link to="/rock">

            <div className="game-card">
              <img src="../images/r-p-s.jpg" alt="" />
              <div className="overlay">

                <h2>Rock-Paper-Seizer</h2>
                <p>Play and Learn</p>

              </div>
            </div>
          </Link>
          <Link to="/rock">

            <div className="game-card">
              <img src="../images/r-p-s.jpg" alt="" />
              <div className="overlay">

                <h2>Rock-Paper-Seizer</h2>
                <p>Play and Learn</p>

              </div>
            </div>
          </Link>
          <Link to="/rock">

            <div className="game-card">
              <img src="../images/r-p-s.jpg" alt="" />
              <div className="overlay">

                <h2>Rock-Paper-Seizer</h2>
                <p>Play and Learn</p>

              </div>
            </div>
          </Link>
          <Link to="/rock">

            <div className="game-card">
              <img src="../images/r-p-s.jpg" alt="" />
              <div className="overlay">

                <h2>Rock-Paper-Seizer</h2>
                <p>Play and Learn</p>

              </div>
            </div>
          </Link>
          <Link to="/rock">

            <div className="game-card">
              <img src="../images/r-p-s.jpg" alt="" />
              <div className="overlay">

                <h2>Rock-Paper-Seizer</h2>
                <p>Play and Learn</p>

              </div>
            </div>
          </Link>

        </div>



      </div>
    </div>
  )

}

export default Games
