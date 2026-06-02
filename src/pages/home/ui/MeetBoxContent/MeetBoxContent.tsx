import { Link } from "react-router-dom";
import styles from "./MeetBoxContent.module.css";

const MeetBoxContent = () => {
  return (
    <div className={styles.content}>
      Hello everybody! On this site you will find information about my
      professional skills and hobbies, as well as memorable moments and my{" "}
      <Link to="/projects">projects</Link> that I want to share with you.{" "}
      <Link to="/nohello">
        If you are interested in anything and would like to contact me, be
        sure to visit the last tab.
      </Link>
    </div>
  );
};

export default MeetBoxContent;
