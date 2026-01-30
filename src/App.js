import logo from './kirby.png';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return(
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <div className="logoRow">
            <SpinningLogo speed={30}/>
            <TextBox/>
          </div>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}
function SpinningLogo({ speed = 20})
{
return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{animationDuration: `${speed}s`}}/>
        <Link to="/about">
          test
        </Link>
      </header>
)
}
function TextBox()
{
  return (
    <header className="App-header">
    <div>
      <p>
        bruh testing to see if text wrapping works inside of this textbox function
      </p>
    </div>
    </header>
  )
}

export default App;
