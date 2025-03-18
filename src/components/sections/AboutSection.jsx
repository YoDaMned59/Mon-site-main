import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Utilisation de l'image dans le dossier public
const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <motion.div
          className="about__content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about__title">À propos</h2>
          <div className="about__grid">
            <div className="about__text">
              <p>
                Passionné par le développement web, je crée des solutions numériques qui allient performance, esthétique et facilité d'utilisation. Grâce à mes compétences, je mets en place des sites web intuitifs,
                réactifs et optimisés pour offrir une expérience utilisateur exceptionnelle.
                Mon approche combine créativité et rigueur technique pour donner vie à des projets web innovants qui répondent aux besoins spécifiques de chaque client.
                Que ce soit pour une entreprise en démarrage ou une PME établie, je m'engage à comprendre votre vision et à créer une solution numérique sur mesure qui reflète votre identité et vos valeurs.
              </p>
              <p>
                Je me spécialise dans l'accompagnement des auto-entrepreneurs et des PME, en les aidant à améliorer leur visibilité en ligne grâce à des stratégies web efficaces et adaptées à leurs objectifs. Du développement de sites vitrine modernes à la mise en place de solutions e-commerce performantes,
                je suis là pour vous aider à atteindre votre public cible et à vous démarquer de la concurrence.
                Mon travail ne s'arrête pas à la création du site. Je propose également des services de maintenance continue, vous assurant une présence web fiable et à jour. Ainsi, vous pouvez vous concentrer sur votre cœur de métier, tout en ayant l’assurance que votre site fonctionne de manière optimale,
                en toute sécurité et avec des mises à jour régulières pour maintenir votre compétitivité.
              </p>
            </div>
            <div className="about__image">
              {/* Affichage de l'image à partir du dossier public */}
              <img src="/images/Linkedin.jpg" alt="LinkedIn Profile" />
            </div>
          {/*}  <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">Débutant(e)</span>
                <span className="about__stat-label">Années d'expérience</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">10+</span>
                <span className="about__stat-label">Projets réalisés</span>
              </div>
              <div className="about__stat">
                <span className="about__stat-number">100%</span>
                <span className="about__stat-label">Clients satisfaits</span>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
