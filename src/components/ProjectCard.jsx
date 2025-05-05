import React from 'react';
import projects from '../assets/Projects';

const images = import.meta.glob('../assets/project_pics/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

function ProjectCard({ ProjID, darkMode }) {
  const project = projects[ProjID];
  const imageSrc = images[`../assets/project_pics/${project.photo}`];
console.log(project.demo.length)
  return (
    <div
      className={`card h-100 ${
        darkMode ? 'bg-dark text-light border-info' : 'bg-white text-dark border-primary'
      } border rounded-4 shadow-lg`}
    >
      <img
        src={imageSrc}
        className="card-img-top rounded-top-4"
        alt={project.name}
        style={{ objectFit: 'cover', height: '200px' }}
      />

      <div className="card-body d-flex flex-column">
        <h5 className={`card-title mb-2 ${darkMode ? 'text-info' : 'text-primary'}`}>
          <a
            href={project.demo || '#'}
            className={`text-decoration-none ${darkMode ? 'text-info' : 'text-primary'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.name}
          </a>
        </h5>

        <p className="card-text mb-3">{project.desc}</p>

        <div className="mt-auto d-flex justify-content-between">
          <a
            href={project.github}
            className={`btn btn-sm ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className={`btn btn-sm ${darkMode ? 'btn-info' : 'btn-primary'}`}
              target={project.demo.length > 0 ? "_blank" : ""}
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
