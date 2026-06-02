import type { IProject } from "@entities/project";
import styles from "./ProjectBoxContent.module.css";

interface IProjectBoxContent {
  project: IProject;
}

const ProjectBoxContent = ({ project }: IProjectBoxContent) => {
  return (
    <div className={styles.content}>
      <div className={styles.content__stack}>
        {project.stack.map((tech) => (
          <span key={tech} className={styles.content__tag}>
            {tech}
          </span>
        ))}
      </div>
      <p className={styles.content__description}>{project.description}</p>
      <ul className={styles.content__highlights}>
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a
        className={styles.content__link}
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit site →
      </a>
    </div>
  );
};

export default ProjectBoxContent;
