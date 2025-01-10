import React from "react";
import { Link}  from 'react-router-dom';

const Header = ({bannerImg}) => {
  return(
    <header className='header'>
    <section>
       {/* banner texts */}
       <div className='banner'>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking"> <button aria-label="on Click">Reserve Table</button> </Link>
       </div>
       {/* banner image */}
       <div className='banner-img'>
          <img src={bannerImg} alt='bannerImg' />
       </div>
    </section>
  </header>
  );
};

export default Header;