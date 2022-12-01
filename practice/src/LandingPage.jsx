import React from 'react';
import "./App.css"

const LandingPage = ({ProjectsList , showProject}) => {
    return (
        <div>
          {ProjectsList.map( (project )=>{
            return (
                <div key={project.projectId} className="container">
                    <div className="informationContainer">
                    <div><span>{project.projectName}</span></div>
                    <div>{project.description}</div>
                    </div>

                    <button id={project.projectId} onClick={showProject}>Show Project</button>
                </div>    
            )
          })}
        </div>
    );
}

export default LandingPage;
