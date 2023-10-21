import light_github from  '../Images/mark.png'
import dark_github from  '../Images/mark (2).png'
import linkedin from '../Images/linkedin (1).png'
import twitter from "../Images/twitter.png"
import twitter_light from "../Images/twitter (1).png"
import linkedin_light from "../Images/linkedin (3).png"
import resume from "../Images/esther's-final-resume.pdf"
import menu from "../Images/menu (2).png"
import dark_menu from "../Images/menu (3).png"
import '../Styles/style.css'
import {Link} from "react-router-dom"


const Navbar = ({onMode,onOpen,value, screenSize}) => {
   
   
  return (
    <nav>
      <div className="inner">
           <div className="logo-sec">
            <Link to="/"><h1 className='logo'>Esther<span>DEV</span></h1></Link>

        </div>
         <div className="links-nav">
            { screenSize < 1085 && <div onClick={onOpen}><img className='menu' src={value ? dark_menu : menu} alt="menu"/></div> } 
            {screenSize >= 1085 && <div className='btns'>
                <div>
                <ul>
                    <li><img src={value ? dark_github : light_github} alt="github"/></li>
                    <li><img src={linkedin} alt="linkedin"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                </ul>
            </div>
                <div className="switch" onClick={onMode}>
                   {value ? <h2>LIGHT</h2> : <h2>DARK</h2>}
                </div>   
                </div>}
         </div>
      </div>
   </nav>
  )
}

export default Navbar;
