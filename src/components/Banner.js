import '../styles/Banner.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'


function Banner() {
    return (
    <div className="portfolio-banner">
        <h1> Sammy Rasamimanana  </h1>
        <Link to="/" className='banner-item'> Home </Link>
        <Link to="/contact"  className='banner-item'> Contact </Link>
        <Link to="/toolbox"  className='banner-item'> Toolbox </Link>
    </div>
    )
}

export default Banner