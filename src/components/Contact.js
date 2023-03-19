import './Home.css';
import Banner from './Banner';
import ContactThumbnail from './ContactThumbnail';
import file from '../contact/contact.json';

const Contact = () => (
    <div >
      <Banner/>
      <div className="portfolio-bio">
        <div className='bio-description'>
        As an engineering student, I am deeply interested in software development and the powerful tools it provides to bring ideas to life.
        My passion for computer graphics and the art of crafting engaging animations in 2D and 3D, as well as my fascination with the world of computer science and mathematics,
        drive me to constantly seek out new challenges and opportunities to hone my skills. I am excited to continue exploring the endless possibilities of these fields and bring
        my ideas to the world. If you share my passion for these exciting disciplines, I would be thrilled to connect with you!
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