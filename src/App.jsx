import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import { About } from './Components/About/About'
import { Education } from './Components/Education/Education'
import { Skills } from './Components/Skills/Skills'
import { ProjectGallery } from './Components/ProjectGallery/ProjectGallery'
import { Testimonial } from './Components/Testimonial/Testimonial'
import { Contact } from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>

      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Hero></Hero>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <ProjectGallery></ProjectGallery>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
      <Footer></Footer>


    </>
  )
}

export default App
