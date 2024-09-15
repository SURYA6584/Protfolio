import './App.css'
import Header from './components/Header';
import Home from './components/Home/Home';
import  Education from './components/Education/Education';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Project';
import Certificate from './components/Certificates/Certificate';
import Achievement from './components/Achievements/Achivement';



function App() {

return (
    <div className="app_container">
   <Header></Header>  
   <Home></Home>
   <Education></Education>
   <Skill></Skill>
   <Projects></Projects>
   <Certificate></Certificate>
   <Achievement></Achievement>
     </div>
  )
}

export default App
