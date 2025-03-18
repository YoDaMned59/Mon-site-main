import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero__title">
            Développeur <span>Full-Stack</span><br />
            Créateur d'expériences numériques
          </h1>
          <p className="hero__subtitle">
            Je conçois et développe des applications web modernes et performantes,
            en accordant une attention particulière à l'expérience utilisateur.
          </p>
          <div className="hero__cta">
            <Link to="/projects" className="btn btn--primary btn--large">
              Voir mes projets
            </Link>
            <Link to="/contact" className="btn btn--secondary btn--large">
              Me contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
