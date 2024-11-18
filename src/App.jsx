
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import MainPage from './Components/MainPage';
import ResumePage from './Components/ResumePage'; // Assuming ResumePage component exists


/*
1.navbar- portfolio title, projects, resume, about me
2.main name page; after scrolling, goods gather together
3.projects
    -master planner
    -evergreen society
4.resume link
5.contacts
 */

/* .container from index.css
 Class parent-child relationship:
 App -> NavBar, MainPage, ProjectsPage, Resume, Contacts ->  -> MasterPlanner, Evergreen Society*/

function App() {
  const [finishedScrolling, setfinishedScrolling] = useState(false)

  return (
       <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Your main page */}
        <Route path="/resume" element={<ResumePage />} /> {/* Resume page */}
       </Routes>
    </Router>
  )
}

export default App;
