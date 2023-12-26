import React from 'react';
import { Link } from "react-router-dom";
import { socialLinks } from '../constants'; // Make sure this is the correct path

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Like what you see? <br className='sm:block hidden' />
        Let's get in touch!
      </p>
      <div className='flex items-center'> {/* Flex container */}
        <Link to='/contact' className='btn'>
          Contact
        </Link>
        <div className='social-links flex'> {/* Flex container for social links */}
          {socialLinks.map((link, index) => (
            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className='ml-4'>
              <img src={link.iconUrl} alt={link.name} className='social-icon' />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;