import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Services from './assets/Service/Service'
import Hero from './Components/Hero/Hero';
import Experience from './assets/Exprience/Exprience'
import About from './Components/About/About';
import Education from './Components/Education/Education';
import ProjectGallery from './Components/ProjectGallery/ProjectGallery';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <>

      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Hero></Hero>
        <Services></Services>
        <Experience></Experience>
        <About></About>
        <Education></Education>      
        <ProjectGallery></ProjectGallery>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
      <Footer></Footer>


    </>
  )
}

export default App
