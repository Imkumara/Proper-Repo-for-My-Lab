import { useState } from 'react';
import AddProjectForm from './components/AddProjectForm';
import ProjectList from './components/ProjectList';
import './styles/App.css';

function App() {
  // projects lives here because both AddProjectForm (writes) 
  // and ProjectList (reads) need access to it
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of the project',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of the project',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of the project',
    },
  ]);

  function handleAddProject(newProject) {
    setProjects((prevProjects) => [
      ...prevProjects,
      { id: Date.now(), ...newProject },
    ]);
  }

  return (
    <div className="app">
      <h1>Personal Project Showcase App</h1>
      <AddProjectForm onAddProject={handleAddProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;