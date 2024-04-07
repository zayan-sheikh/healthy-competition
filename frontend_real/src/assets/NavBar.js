
import React from 'react';
import addFriends from './addfriends.png';
import statsIcon from './stats.png';
import leaderboardIcon from './leaderboard.png';
import homeIcon from './home-icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='icon'><img src={homeIcon} alt="Leaderboard" /></Link>
        <p>|</p>
        <Link to='/stats' className='icon'><img src={statsIcon} alt="Insights" /></Link>
        <p>|</p>
        <Link to='/leaderboard' className='icon'><img src={leaderboardIcon} alt="Leaderboard" /></Link>
        <p>|</p>
        <Link to='/addfriends' className='icon'><img src={addFriends} alt="Add Friends" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;