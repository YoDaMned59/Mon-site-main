import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import '../styles/services.scss'; // Assure-toi d'ajouter ce fichier pour le style

const Services = () => {
  return (
    <motion.div
      className="services"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="services__header">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mes Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          En tant qu'intégrateur web, je vous propose des solutions adaptées à vos besoins, alliant design et performance pour offrir la meilleure expérience utilisateur.
        </motion.p>
      </div>

      <div className="services__list">
        {/* Service 1 */}
        <motion.div
          className="service"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Création de Sites Web Responsives</h2>
          <p>
            Je conçois des sites web modernes et adaptatifs. Grâce à ma maîtrise des technologies HTML, CSS et JavaScript, je crée des interfaces qui s'adaptent à tous les types d'appareils, que ce soit un ordinateur, une tablette ou un smartphone.
          </p>
          <p><strong>Bénéfices :</strong> Une expérience utilisateur optimale, quelle que soit la taille de l'écran.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="service-btn"
          >
            Demander un devis
          </motion.button>
        </motion.div>

        {/* Service 2 */}
        <motion.div
          className="service"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Développement Front-End</h2>
          <p>
            En utilisant les dernières technologies front-end comme React, Sass, et Bootstrap, je développe des interfaces dynamiques et interactives. Je m'assure que chaque projet respecte les meilleures pratiques de développement.
          </p>
          <p><strong>Bénéfices :</strong> Des interfaces réactives, rapides et interactives, avec un code propre et maintenable.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="service-btn"
          >
            Demander un devis
          </motion.button>
        </motion.div>

        {/* Service 3 */}
        <motion.div
          className="service"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2>Intégration de maquettes</h2>
          <p>
            Vous avez une maquette ? Je m'occupe de l'intégration HTML/CSS/JavaScript avec une attention particulière à la précision, aux détails et à l’optimisation des performances. Je garantis des pages web fidèle à vos designs.
          </p>
          <p><strong>Bénéfices :</strong> Un résultat fidèle à vos maquettes, avec des performances optimisées et un code SEO-friendly.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="service-btn"
          >
            Demander un devis
          </motion.button>
        </motion.div>

        {/* Service 4 */}
        <motion.div
          className="service"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          <h2>Optimisation de Performances Web</h2>
          <p>
            Je m'assure que vos pages se chargent rapidement en optimisant le code, les images, et en utilisant les bonnes pratiques comme le lazy loading et le minification des ressources. Un site rapide est essentiel pour le SEO et l'expérience utilisateur.
          </p>
          <p><strong>Bénéfices :</strong> Une navigation fluide, des pages web qui se chargent plus vite et une meilleure position dans les résultats de recherche.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="service-btn"
          >
            Demander un devis
          </motion.button>
        </motion.div>
      </div>

      <div className="services__cta">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Prêt à réaliser votre projet ?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          N'hésitez pas à me contacter pour discuter de vos besoins et obtenir un devis personnalisé.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="cta-btn"
        >
          Contactez-moi
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Services;
