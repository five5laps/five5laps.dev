import styles from "./LanguagesBoxContent.module.css";
import react from "@images/logos/react.svg";
import javascript from "@images/logos/javascript.svg";
import typescript from "@images/logos/typescript-icon.svg";
import html5 from "@images/logos/html.svg";
import css3 from "@images/logos/css.svg";
import sass from "@images/logos/sass.svg";
import nodejs from "@images/logos/nodejs.svg";
import vite from "@images/logos/vitejs.svg";
import npm from "@images/logos/file-type-npm.svg";
import java from "@images/logos/java.svg";
import cpp from "@images/logos/c-plusplus.svg";
import csharp from "@images/logos/Logo_C_sharp.svg";
import mysql from "@images/logos/mysql.svg";
import postgres from "@images/logos/postgresql.svg";
import docker from "@images/logos/docker-icon.svg";

const LanguagesBoxContent = () => {
  return (
    <div className={styles.content}>
      <img src={react} alt="react" />
      <img src={javascript} alt="js" />
      <img src={typescript} alt="ts" />
      <img src={html5} alt="html5" />
      <img src={css3} alt="css3" />
      <img src={sass} alt="sass" />
      <img src={nodejs} alt="nodejs" />
      <img src={vite} alt="vite" />
      <img src={npm} alt="npm" />
      <img src={java} alt="java" />
      <img src={cpp} alt="cpp" />
      <img src={csharp} alt="csharp" />
      <img src={mysql} alt="mysql" />
      <img src={postgres} alt="postgres" />
      <img src={docker} alt="docker" />
    </div>
  );
};

export default LanguagesBoxContent;
