import portfolio from '../Images/portfolio.png'
import web from '../Images/web.png'
import dic from '../Images/preview.jpg'
import arrow from '../Images/up-right-arrow (1).png'
import dark_arrow from '../Images/up-right-arrow (4).png'
import http from '../Images/http.png'
const Projects = ({value}) => {
  return (
    <div className="projects">
    <div className="inner-projects animate__animated animate__backInRight">
    <div className="project">
            <div className="intro">
                <div><img src={web} alt=""/></div>
                <div className='intro-text'>
                    <div className='intro-name'> <a href="https://adorable-yeot-4f1597.netlify.app"><h3>Entertainment web app</h3> <img className='arrow' src={value ? dark_arrow : arrow} alt=""/></a></div>
                   <p>I've designed an engaging entertainment web application that, while still in development, allows users to search, bookmark, and discover movies through a dynamic API. Stay tuned for future enhancements that will bring the world of cinema to your fingertips!</p>
                    <ul className="tech-stack">
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                
            </div>
         </div>

         <div className="project">
            <div className="intro">
                <div><img src={dic} alt=""/></div>
                <div className='intro-text'>
                <div className='intro-name'> <a href="https://friendly-capybara-0e4ebe.netlify.app"><h3>Dictionary web app</h3> <img className='arrow' src={value ? dark_arrow : arrow} alt=""/></a></div>
                    <p>I have developed a comprehensive dictionary web application using a combination of JavaScript, SCSS, and HTML. This feature-rich tool enables users to efficiently search for words while also providing audio pronunciation, enhancing the overall linguistic experience.</p>
                    <ul className="tech-stack">
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                
            </div>
         </div>

         <div className="project">
            <div className="intro">
                <div>  <img src={portfolio} alt=""/></div>
              
                <div className='intro-text'>
                <div className='intro-name'> <a href="https://gleaming-valkyrie-523361.netlify.app"><h3>Portfolio</h3> <img className='arrow' src={value ? dark_arrow : arrow} alt=""/></a></div>
                    <p>I've curated a diverse portfolio showcasing my creative endeavors, from web apps to design projects. Explore my work to get a glimpse of my passion for innovation and design, with more exciting projects on the horizon.</p>
                    <ul className="tech-stack">
                        <li>HTML</li>
                        <li>SASS</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                
            </div>
         </div>

    </div>
  
</div>
  )
}

// function project({img,app_name,app_descr,stack}){
//     return(
//         <div className="project">
//         <div className="intro">
//             <div><img src={web} alt=""/></div>
//             <div className='intro-text'>
//                 <div className='intro-name'> <a href="https://adorable-yeot-4f1597.netlify.app"><h3>Entertainment web app</h3> <img className='arrow' src={value ? dark_arrow : arrow} alt=""/></a></div>
//                <p>I've designed an engaging entertainment web application that, while still in development, allows users to search, bookmark, and discover movies through a dynamic API. Stay tuned for future enhancements that will bring the world of cinema to your fingertips!</p>
//                 <ul className="tech-stack">
//                     <li>HTML</li>
//                     <li>SASS</li>
//                     <li>Javascript</li>
//                 </ul>
//             </div>
            
//         </div>
//      </div>
//     )
// }

export default Projects