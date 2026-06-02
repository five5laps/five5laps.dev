import { ContentBox } from "@shared/ui/content-box";
import { projects } from "@entities/project";
import ProjectBoxContent from "./ProjectBoxContent/ProjectBoxContent";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <div className={styles.projects}>
      {projects.map((project) => (
        <ContentBox
          key={project.id}
          boxClass={styles.projects__card}
          header={project.title}
          content={<ProjectBoxContent project={project} />}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
