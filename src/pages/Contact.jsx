import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import contactData from '../data/contact.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const getIconForType = (type) => {
    switch (type) {
      case 'email':
        return faEnvelope;
      case 'phone':
        return faPhone;
      case 'location':
        return faLocationDot;
      default:
        return faEnvelope;
    }
  };

  const getIconForPlatform = (platform) => {
    switch (platform) {
      case 'linkedin':
        return faLinkedin;
      case 'github':
        return faGithub;
      case 'facebook':
        return faFacebook;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      await emailjs.send(
        "service_lsyr9n9",
        "template_v16ubxk",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "j3KClCUAj9anQTH9k"
      );

      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: "Une erreur s'est produite. Veuillez réessayer."
      });
    }
  };

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact__header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Contactez-moi
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Discutons de votre projet et voyons comment je peux vous aider à le réaliser.
        </motion.p>
      </div>

      <div className="contact__grid">
        <motion.div
          className="contact__form-container"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" />
            </div>

            <motion.button
              type="submit"
              className={`btn btn--primary ${formStatus.isSubmitting ? 'btn--loading' : ''}`}
              disabled={formStatus.isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {formStatus.isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </motion.button>

            {formStatus.isSubmitted && (
              <motion.div className="form-success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                Votre message a été envoyé avec succès !
              </motion.div>
            )}

            {formStatus.error && (
              <motion.div className="form-error" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                {formStatus.error}
              </motion.div>
            )}
          </form>
        </motion.div>

        <motion.div className="contact__info" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
          <div className="contact__info-container">
            <h2>Informations de contact</h2>
            <div className="contact__info-list">
              {contactData.contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="contact__info-item" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={getIconForType(info.type)} />
                  <div>
                    <span className="contact__info-label">{info.label}</span>
                    <span className="contact__info-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact__social">
              <h3>Suivez-moi</h3>
              <div className="contact__social-links">
                {contactData.socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="contact__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={getIconForPlatform(social.platform)} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
