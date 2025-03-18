import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Utilisation du hook useLocation pour détecter les changements de route

  useEffect(() => {
    // Lorsqu'il y a un changement de route, scroll en haut
    window.scrollTo(0, 0);
  }, [location]); // Le hook useEffect se déclenche chaque fois que l'URL change

  return null;
};

export default ScrollToTop;
