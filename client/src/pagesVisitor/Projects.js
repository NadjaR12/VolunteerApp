import React from 'react'
import ProjectListVisitor from '../components/ProjectListVisitor'
import NavbarVisitor from '../components/NavbarVisitor'

export default function Projects() {
  
  return (
    <>
      <NavbarVisitor />
       <div className="heading-project-container">
          <h1>UPCOMING PROJECTS</h1>
        </div>
        <div className="project-page-container bg-overlay">
        <div className="project-container">
          <ProjectListVisitor />
        </div>
      </div>
    </>
  )
}