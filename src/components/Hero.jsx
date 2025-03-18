// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/components/_hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Sébastien Duvivier</h1>
                <TypeAnimation
                    sequence={[
                        'Développeur Web Full-Stack',
                        1000,
                        'Développeur Front-End',
                        1000,
                        'Développeur Back-End',
                        1000,
                    ]}
                    wrapper="h2"
                    speed={50}
                    repeat={Infinity}
                />
                <p>Passionné par la création d'expériences web innovantes</p>
            </motion.div>
        </section>
    );
};

export default Hero; 