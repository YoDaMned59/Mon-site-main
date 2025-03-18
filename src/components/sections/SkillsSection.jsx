import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skillsData';

const SkillsSection = () => {
  return (
    <section className="skills">
      <div className="container">
        <motion.div 
          className="skills__content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="skills__title">Compétences</h2>
          <div className="skills__grid">
            {skillsData.categories.map((category, index) => (
              <motion.div 
                key={category.name}
                className="skills__card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="skills__card-title">{category.name}</h3>
                <ul className="skills__list">
                  {category.items.map((item) => (
                    <li key={item} className="skills__item">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection; 