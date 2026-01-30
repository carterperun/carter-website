import logo from './kirby.png';
import './About.css';
import { AnimatePresence } from 'motion/react';

function About() {
    return(
    <AnimatePresence>
        <div className="About">
            <header className="about-header">
                <img src={logo} className="About-logo" alt="logo" />
                <p>
                    This is the About Page.
                </p>
            </header>
        </div>
     </AnimatePresence>
    )
};

export default About;
    