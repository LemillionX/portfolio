import './Home.css';
import Banner from './Banner';
import ContactThumbnail from './ContactThumbnail';
import file from '../contact/contact.json';

const Contact = () => (
    <div >
      <Banner/>
      <div className="portfolio-bio">
        <div className='bio-description'>
        I absolutely love coding and creating all sorts of cool stuff with computer graphics and science!
        Whether it's whipping up mind-blowing 2D and 3D animations, developing physics simulations that'll knock your socks off, or exploring the wild and wonderful world of computer science and math,
        I am always up for a challenge. I'm constantly learning new skills and looking for ways to bring my ideas to life,
        and I'd be thrilled to connect with anyone who shares my passion for this awesome field.
        </div>
        <div className='portfolio-contact'>
            {file.elements.map( (section) => 
                <ContactThumbnail key={section.id}
                    imageUrl={section.thumbnail}
                    title={section.name}
                    linkUrl={section.url}
                    />
                )}
            </div>
        </div>
    </div>

);


export default Contact;