
import React from 'react';
import  './Project.css';

function Project() {
  return (
    <div className="projectContainer">
      <h2 className="projectTitle">My Projects</h2>
      <div className="projectList">
        <div className="projectItem">
          <h3>Online Recipe Book</h3>
          <p>Source Code: <a href="https://github.com/Suhaima4/mern_client_server" className="projectLink" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
        <div className="projectItem">
          <h3>ToDo List</h3>
          <p>Source Code: <a href="https://github.com/Suhaima4/todolist" className="projectLink" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
        <div className="projectItem">
          <h3>Weather App</h3>
          <p>Source Code: <a href="https://github.com/Suhaima4/weather-app" className="projectLink" target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
        </div>
      </div>
    </div>
  );
}

export default Project;
