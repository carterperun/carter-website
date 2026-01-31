import logo from './kirby.png';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const location = useLocation();
  const pageAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.5 }
  }

  return(
    <div className="App">
      <Navbar/>
      <AnimatePresence mode="wait" inital={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div {...pageAnimation}>
          <div className="logoRow">
            <SpinningLogo speed={30}/>
            <TextBox/>
          </div>
          </motion.div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
      </AnimatePresence>
    </div>
  )
}

function SpinningLogo({ speed = 20})
{
return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{animationDuration: `${speed}s`}}/>
        <p>
          Spinning Kirby
        </p>
      </header>
)
}
function TextBox()
{
  return (
    <header className="App-header">
    <div>
      <p>
        This is test that will wrap around the edge of the screen and other elements of the webpage automatically due to being in a grid element.
      </p>
    </div>
    </header>
  )
}

export default App;
