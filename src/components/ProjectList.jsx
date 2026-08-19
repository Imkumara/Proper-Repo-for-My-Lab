import { useState } from 'react';
import ProjectCard from './ProjectCard';
import SearchBar from './SearchBar';

function ProjectList({ projects }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-list">
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredProjects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectList;