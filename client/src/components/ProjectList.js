import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PopUpEditProject from './PopUpEditProject'
import PopUpCreateProject from './PopUpCreateProject'


export default function ProjectList(props){
// State of Projects
const [projects, setProjects] = useState([])
const [showCreateProject, setShowCreateProject] = useState(false)
const [projectToBeEdited, setProjectToBeEdited] = useState(null)

const storedToken = localStorage.getItem('authToken')
// Handle PopUp
const handleProjectToBeEdited = project => {
  console.log('project', project)
  setProjectToBeEdited(project)}

// get all projects from the backend
const getAllProjects = () => {
  // request 'api/projects'
  // for every request to a project route we need to also send the token
  axios.get('/api/projects', { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(response => {
          console.log('response.data',response.data)
          // set the state of projects
          setProjects(response.data)
      })
      .catch(err => {
          console.log(err)
      })
}
useEffect(() => {getAllProjects()}, [])

  return(
    <>
      <div>
        <div  className="dash-title-box">
          Projects
          <div>
            <button className="create-btn" onClick={() => setShowCreateProject(!showCreateProject)}>+</button>
              {showCreateProject && (
                <PopUpCreateProject refreshProjects={getAllProjects} handleClose={() => setShowCreateProject(false)}/>
              )}
          </div>
          </div>
          <div>
            <button className="drop-down-btn"><img className="img-arrow" src="/images/drop-down-arrow.png" alt="pfeil"></img></button>
          </div>
        </div>
        <div>
          {projects.map(project => {
            return (
              <>
                <div key={project._id} className="dash-list-item">
                  <div className="dash-list-title">{project.projectName}</div>
                  <div className="dash-btn-container">
                    <button className="dash-btn" onClick={() => {handleProjectToBeEdited(project)}}>Edit</button>
                      {projectToBeEdited && <PopUpEditProject
                     handleClose={() => {setProjectToBeEdited(null)}} thisproject={projectToBeEdited} refreshProjects={getAllProjects}/>
                      }
                    <button className="dash-btn" onClick={()=>{
                      axios.delete(`/api/projects/${project._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
                      .then(deletedProject => {
                        console.log('deletedProject', deletedProject)
                        // get all projects to show immediately list of projects without deleted item
                        getAllProjects();
                        })
                      .catch(err => console.log(err))
                    }}>Delete</button>
                  </div>
                </div>
                <div className="vol-link-container">
                  <img className="map-icon" src='/images/side-arrow.png' alt='arrow'/>
                  <Link className="vol-link-dash" to={`/behind-the-scences/project/volunteer/${project._id}`}>See Applications</Link>
                </div>
              </>
            )}
          )}      
      </div>
    </>
  )  
}