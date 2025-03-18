import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';
import { Cards } from '../components/Cards';
import { ProjectModal } from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (projectId) => {
    const project = projectsData.projects.find(p => p.id === projectId);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <motion.div
      className="projets"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Mes Projets
        </motion.h1>

        <motion.div
          className="projects-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {/* Animation des cartes de projet */}
          <Cards data={projectsData.projects} openModal={openModal} />
        </motion.div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        closeModal={closeModal}
      />
    </motion.div>
  );
};

export default Projects;
