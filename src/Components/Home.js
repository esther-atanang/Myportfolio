import React from 'react'
import Header from './Header'
import Projects from './Projects'

const Home = ({themode}) => {
  return (
    <div>
     <main>
      <div className="header">
       <Header/>
       <Projects value={themode}/>
      </div>
    </main>
    </div>
  )
}

export default Home