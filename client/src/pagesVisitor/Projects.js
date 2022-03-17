import React from 'react'
import ProjectListVisitor from '../components/ProjectListVisitor'
import NavbarVisitor from '../components/NavbarVisitor'

export default function Projects() {


  return (
    <div>
      <div>
        <NavbarVisitor />
      </div>
      <div>
        <ProjectListVisitor />
      </div>
    </div>
  )
}
