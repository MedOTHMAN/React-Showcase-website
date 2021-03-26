import React, { useState } from 'react'
import {projectsData} from '../data/projectsData'

const Project = (props) => {
    const [currentData] = useState(projectsData);
    const project = currentData[props.projectNumber]
    return (
        <div className="project-main">
            <div className="project-content">
            <h1>{project.title}</h1>
            <p>{project.date}</p>
            <ul className="languages">
            {project.languages.map((el)=>
            <li key={el}>{el}</li>)}</ul>
            </div>

            <div className="img-content">
            <div className="img-container hover">
                <span>
                    <h3>{project.title}</h3>
                    <p>{project.infos}</p>
                </span>
                <img src={project.img}></img>
            </div>
            <div className="button-container">
                <a href={project.link} target='_blank' className='hover'>
                    <span className="button">voir le site</span>
                </a>
            </div>
            </div>
        </div>
    )
}

export default Project
