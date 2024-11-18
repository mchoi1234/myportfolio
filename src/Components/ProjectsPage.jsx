import React from 'react'
import { Link } from 'react-router-dom'; // Add this import
import './ProjectsPage.css'
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function ProjectsPage() {
  return (
    
    <div className='projectsPage'>
      <h2 className="projectsTitle">Projects</h2>
      
        <ul className='projectsList'>
        <li>

          <section className='projectListLeftSide'>
            <div className='projectListTitle'>
              <h3> Master Planner (Work in Progress) </h3>
              </div>
                <div className='projectPicture' > 
                  <video autoPlay loop muted>
                    <source src="./MasterPlannerVideo.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>
          </section>
          
          <div className='listDivisionLineParent'> </div>

          <section className='projectListRightSide'>
           <div className='projectDescription'>
                <p className='projectDescriptionText'>
                  Master Planner is an intelligent task 
                  management tool that allows users to   
                  categorize tasks, set time ranges, and 
                  automatically organizes them within the  
                  specified schedule. It adjusts deadlines  
                  dynamically and provides daily task  
                  updates, ensuring efficient task completion  
                  and time management. 
                </p>
                <div className='projectTags'> 
                  <div className='tagText'> Tags:</div>
                    <ul>
                      <li style={{color: "#333",background: "#EFD190"}}> React </li>
                      <li style={{color: "#333",background: "#EFD190"}}> Javascript </li>
                      <li style={{background: "#9CD4DC"}}> CSS</li>
                      <li style={{ background: "#9CD4DC"}}> HTML </li>
                      <li> MySQL</li>
                      <li > Figma </li>
                      <li style={{color: "#333",background: "#EFD190"}}> Node.js </li>
                      <li > Web Dev</li>
                      <li > App Dev</li>
                    </ul>
                </div>
            </div>
          </section>

        </li>
        <li>
          
           <section className='projectListLeftSide'>
            <div className='projectListTitle'>
              <h3> Adventure Puzzle Game (2024)</h3>
              </div>
                  <div className='twoPictures'>
                    <div className='firstPic'>
                      <img src="./EvergreenFirstPic1.png" alt="adventure game first picture" />
                    </div>
                      <a href="https://play.google.com/store/apps/details?id=com.munchgames.evergreensocietyofwitches&hl=en_US" target="_blank" rel="noopener noreferrer">
                          <div className='secondPic'>
                            <img src="./EvergreenSecondPic.png" alt="adventure game second picture, click to view example" />
                          </div>
                      </a>
                  </div>
          </section>
          
          <div className='listDivisionLineParent'> </div>

          <section className='projectListRightSide'>
           <div className='projectDescription'>
                <p className='projectDescriptionText'>
                  A published adventure puzzle game that 
                  offers a minimum of 3-4 hours of engaging 
                  gameplay. The game has gained over 300 downloads 
                  organically on Google Play Store and Apple Store.
                  Built using Unity, it offers immersive puzzle-solving
                  challenges and unique achievements unlocked on each
                  platform.
                </p>
                <div className='projectTags'> 
                  <div className='tagText'> Tags:</div>
                    <ul>
                      <li style={{color: "#333",background: "#EFD190"}}> Unity </li>
                      <li style={{color: "#333",background: "#EFD190"}}> C# </li>
                      <li > Google Play Store </li>
                      <li > Apple Store</li>
                      <li style={{ background: "#9CD4DC"}}> XCode </li>
                      <li> 2D Game </li>
                      <li style={{ background: "#9CD4DC"}}> Game Dev </li>
                       <li> Multi-Platform Integration</li>
                    </ul>
                </div>
            </div>
          </section>


        </li>
      </ul>
      
     <section className="resumeSection" id="resume">
      <div className='resumeBlueBorder'>
             <Link  to="/resume"  target="_blank" rel="noopener noreferrer">
             <div className='resumeWhiteBorder'> 
              <h2>  View My Resume </h2>
              </div>
            
          </Link>
      </div>
      </section>

    <footer class="contactsSection" id="contacts"> 
    <h2>Contacts</h2>
    <div class="mainContent">
        <p class="introText">
            I'd love to connect and am open to job opportunities—feel 
            free to reach out for project inquiries, collaboration, or
            any questions you might have.
        </p>
        <div class="contactLinks">
            <a href="mailto:minjoo.choi12345@example.com">
              <MdEmail/>
              <span> Email</span>
              <span class="emailAddress"> minjoo.choi12345@gmail.com</span>
             </a>
            <a href="https://github.com/mchoi1234" target="_blank" rel="noopener noreferrer">
            <FaGithub />
              <span> Github </span>
            </a>
        </div>
       </div>
         <p class="rightsReserved">© 2024 Minjoo Choi. All Rights Reserved.</p>
     </footer>

    </div>
  )
}

export default ProjectsPage