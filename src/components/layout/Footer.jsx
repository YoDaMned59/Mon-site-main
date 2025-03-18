import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import socialData from '../../data/social.json';

const Footer = () => {
  const getIconForPlatform = (platform) => {
    switch (platform) {
      case 'github':
        return faGithub;
      case 'linkedin':
        return faLinkedinIn;
      case 'facebook':
        return faFacebook;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <h3 className="footer__title">SDuvivierTech</h3>
            <p className="footer__description">
              Création de solutions web innovantes et performantes
            </p>
            <div className="footer__contact">
              <div className="footer__contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:${socialData.contactInfo.email}`}>
                  {socialData.contactInfo.email}
                </a>
              </div>
              <div className="footer__contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <a href={`tel:${socialData.contactInfo.phone.replace(/\s/g, '')}`}>
                  {socialData.contactInfo.phone}
                </a>
              </div>
              <div className="footer__contact-item">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{socialData.contactInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__social">
              {socialData.socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="footer__social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={getIconForPlatform(link.icon)} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} SDuvivierTech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 