import React from 'react';
import config from '../../config';

export default function Project() {
  let isempty = false
  return (
    <div className="box alt container">
      {config.projects.map(project => {
        project.prototype === "/" ? isempty = true : isempty = false
        if (project.id % 2 !== 0) {
          return (
            <section className="feature left" key={project.current}>
              <iframe title={project.name} className="image" allow="fullscreen" allowFullScreen src={project.issuu}></iframe>
              <div className="content">
                <h3>{project.name}</h3>
                <a href={project.current} className="button teal" target="_blank" rel="noopener noreferrer">現行網站</a>
                <br />
                <br />
                <a href={project.prototype} className={isempty ? "button teal disabled" : "button teal"} target="_blank" rel="noopener noreferrer">設計雛型</a>
              </div>
            </section>
          )
        } else {
          return (
            <section className="feature right" key={project.current}>
              <iframe title={project.name} className="image" allow="fullscreen" allowFullScreen src={project.issuu}></iframe>
              <div className="content">
                <h3>{project.name}</h3>
                <a href={project.current} className="button teal" target="_blank" rel="noopener noreferrer">現行網站</a>
                <br />
                <br />
                <a href={project.prototype} className={isempty ? "button teal disabled" : "button teal"} target="_blank" rel="noopener noreferrer">設計雛型</a>
              </div>
            </section>
          )
        }
      })}
    </div>
  );
}
