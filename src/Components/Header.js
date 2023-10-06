import '../Styles/style.css'
import artist from '../Images/artist.png'
import development from '../Images/development.png'
import arrow from '../Images/up-right-arrow (1).png'
import resume from "../Images/resume2.pdf"
function Header(){
return(
    <div>
         <div className="inner-text">
                    <div className="text">
                        <h2 className='role'>React Frontend <span>developer</span>.</h2>
                          <p className='role-text'> Hey, I'm <span className="name">Esther Atanang</span>, I craft amazing web apps. If you’re looking for a developer that likes to get stuff done, let’s talk.</p>
                        
                        <div className="tech">
                            <h3 className='stack'>Tech stack</h3>
                            <ul>
                                <li>Html</li>
                                <li>Css</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                       
                        <a href={resume} className="btn animate__animated animate__shakeY">Resume</a>
                    </div>

                    <div className="more">
                        <div className='card'>
                            <div className="heading"><img src={artist} alt="artist"/></div>
                            <div><h3>Designer</h3></div>
                            <div><p>I really adore cute uncomplicated content layouts, neat design styles, and charming interactions!</p></div>
                        </div>
                        <div className='card'>
                            <div className="heading"><img src={development} alt="code"/></div>
                            <div><h3>Frontend Developer</h3></div>
                            <div><p>I really love coding things from scratch and creating things that are really catchy and still easy to use.</p></div>
                        </div>
                    </div>
                </div>
</div>
)
}

export default Header;