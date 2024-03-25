import React from 'react'
import '../styles/home.css';

const Home = () => {
  return (
    <div className='container'>
      <div className="navbar">
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/explore">Explore</a></li>
        <li><a href="/notifications">Notifications</a></li>
        <li><a href="/messages">Messages</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/settings">Settings</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Home
