import React from 'react';
import './MainPage.css';
const ModelViewer = React.lazy(() => import('./ModelViewer'));
import ProjectsPage from './ProjectsPage';
import Navbar from './NavBar';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling effect
  });
};

function MainPage() {
  return (
   <main>
        <Navbar />
      <div className='mainPage'>
        <section className='modelContainer'>
          <ModelViewer /> {/* Add the 3D model below the text */}
        </section>
        <section className='mainPageText' id="home">
          <h1 className='mainPageTitle'> 
            <span style ={{fontWeight: '300'}}> Hi, I'm </span>
            <div> Minjoo Choi. </div> 
          </h1>
          <h2> A Software Developer</h2>

          <section className='descriptionContainer'>
                  <div className='titleLine'> </div>
                  <p className='description'>  
                    Passionate about building web applications that<br />  make 
                    a difference—focused on usability, growth, and  <br /> 
                    full-stack mastery.
                  </p>
          </section>

              <div className='welcomeTitle'> 
              <div className='welcomeBox'></div>
              <span className='welcomeTitleText'> Welcome to My Portfolio!</span>
              </div>
        </section>

        <button onClick={scrollToTop}>
        <div className='backToTop'>
              <div className='backToTopBox'> </div>
               <span> Back to <br /> Top</span> 
         </div>
         </button>
        
         <div className="grid-overlay"></div> {/* Grid overlay */}

      </div>
        <section id="projects">
          <ProjectsPage/>
        </section>
       
    </main>
  )
}

export default MainPage;