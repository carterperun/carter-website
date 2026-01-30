import logo from './kirby.png';
import './About.css';

function About() {
    return(
    <div className="About">
        <header className="about-header">
            <img src={logo} className="About-logo" alt="logo" />
            <p>
                This is the About Page.
            </p>
        </header>
    </div>
    )
};

export default About;
    