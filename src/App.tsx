import React from 'react'
import {Hero, About, Projects, Experience, Contact} from './sections'
import Navbar from './layout/Navbar'
import { Footer } from './layout/Footer'


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
          {/* Your main content goes here */}
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
