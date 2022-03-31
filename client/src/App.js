import { Routes, Route } from 'react-router-dom'
import 'animate.css'
import './App.css';
import './css/Home.css';
import './css/Navbar.css';
import './css/ProjectListVisitor.css';
import './css/Login.css';
import './css/EventsVisitors.css'
import './css/ProjectDetails.css'
import './css/Dashboard.css'
import './css/VolunteerForm.css'
import './css/EventDetails.css'
import './css/PopUpProject.css'
import './css/PopUpEvent.css'
import './css/Menu.css'
import Home from './pagesVisitor/Home'
import Projects from './pagesVisitor/Projects'
import ProjectDetails from './pagesVisitor/ProjectDetails'
import Events from './pagesVisitor/Events'
import Volunteer from './pagesVisitor/Volunteer'
import AdminDashboard from './pagesAdmin/AdminDashboard';
import EditProject from './pagesAdmin/EditProject';
import ProjectVolunteerList from './pagesAdmin/ProjectVolunteerList';
import VolunteersFullList from './pagesAdmin/VolunteersFullList';
import EditEvent from './pagesAdmin/EditEvent';
import Login from './pagesLog/Login'
import Signup from './pagesLog/Signup';
import IsPrivate from './components/IsPrivate';
import EventDetails from './pagesVisitor/EventDetails';


function App() {
  return (
    <div className="App"> 
      <Routes>
      {/* Authorization  */}
        <Route path='/behind-the-scences/login' element={<Login />}/>
        <Route path='/behind-the-scences/signup' element={<Signup />}/>
      {/* Visitor */}
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/projects/:id' element={<ProjectDetails />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/events/:id' element={<EventDetails />}/>
        <Route path='/volunteer' element={<Volunteer />}/>
        <Route path='/volunteer/:id' element={<Volunteer />}/>
      {/* Admin */}
        <Route path='/behind-the-scences' element={<IsPrivate> <AdminDashboard /> </IsPrivate>} />
        <Route path='/behind-the-scences/project/edit/:id' element={<IsPrivate> <EditProject /> </IsPrivate>} />
        <Route path='behind-the-scences/project/volunteer/:id' element={<IsPrivate> <ProjectVolunteerList /> </IsPrivate>}/>
        <Route path='/behind-the-scences/event/edit/:id' element={<IsPrivate> <EditEvent /> </IsPrivate>} />
        <Route path='/behind-the-scences/volunteers/fullList' element={<IsPrivate> <VolunteersFullList /> </IsPrivate>} />
      </Routes>
    </div>
  );
}

export default App;