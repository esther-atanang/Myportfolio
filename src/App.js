import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import light_github from  './Images/mark.png'
import dark_github from  './Images/mark (2).png'
import linkedin from './Images/linkedin (1).png'
import twitter from "./Images/twitter.png"
import light_close from "./Images/close (1).png"
import dark_close from "./Images/close.png"
import './Styles/style.css'
import {useState, useEffect} from 'react'
import About from "./Components/About"
import Error from "./Components/Error"
import Project from "./Components/Project";
import Home from "./Components/Home"
import Resume from "./Images/resume2.pdf"
import {Link, Routes, Route} from "react-router-dom"
function App() {
const[mode, setMode] = useState(false)
const[isOpen, setOpen] = useState(false)
const[screen, setScreen] = useState(window.innerWidth)
  function handleClick(){
    setMode(value=>!value)
}

function handleOpen(){
  setOpen(value=>true);
}
function handleClose(){
  setOpen(value=>false);
}
useEffect(()=>{
  window.addEventListener('resize',(e)=>{
      setScreen(e.target.innerWidth)
  })
},[])

  return (
    <>
    <div className="app" data-theme={ mode ? "dark" : "light"}>
    
    <Navbar onMode={handleClick} onOpen={handleOpen} value={mode} screenSize={screen}/>
    <Routes>
           <Route path="/" element={<Home themode={mode}/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/project" element={<Project/>}/>
           <Route path="*" element={<Error/>}/>
    </Routes>
    
    <div className={isOpen ? "opened" : "closed"}>
        <div>
        <div onClick={handleClose}><img className="close" src={mode ? light_close : dark_close} alt="close"/></div>
        <div className="switch" onClick={handleClick}>
                  {mode ? <h2>LIGHT</h2> : <h2>DARK</h2>}
               </div>
               
        </div>
        
         <div>
            <ul className="top">
               <li><Link to="/about">About</Link></li>
               <li><Link to="/project">Projects</Link></li>
               <li><a href={Resume}>Resume</a></li>
            </ul>
            <ul className="bottom">
               <li><img src={mode ? dark_github : light_github} alt="github"/></li>
               <li><img src={linkedin} alt="linkedin"/></li>
               <li><img src={twitter} alt="twitter"/></li>
           </ul>
         </div>
    </div>
  </div>
      
   
    </>
   
  );
}

export default App;
