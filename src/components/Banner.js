import '../styles/Banner.css'
import logo from '../assets/logo.png'


function Banner() {
    return (
    <div className="portfolio-banner">
        <img src={logo} alt='My Portfolio' className='portfolio-logo'  ></img>
        <h1> My Portfolio  </h1>
    </div>
    )
}

export default Banner