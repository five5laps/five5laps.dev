import styles from "./AboutBoxContent.module.css";
import { Link } from "react-router-dom";

const stack = ["React", "Next.js", "TypeScript", "JavaScript", "Zustand"];

const AboutBoxContent = () => {
  return (
    <div className={styles.content}>
      <p>
        I'm a web developer focused on frontend with confident backend skills
        using Next.js and Python. I build modern interfaces and full-stack
        products — from UI to API and deployment.
      </p>
      <p className={styles.content__label}>Main stack</p>
      <div className={styles.content__stack}>
        {stack.map((tech) => (
          <span key={tech} className={styles.content__tag}>
            {tech}
          </span>
        ))}
      </div>
      <p>
        Before reaching out, read{" "}
        <Link to="/nohello">how to message me properly</Link> — it helps us both
        save time.
      </p>
    </div>
  );
};

export default AboutBoxContent;
