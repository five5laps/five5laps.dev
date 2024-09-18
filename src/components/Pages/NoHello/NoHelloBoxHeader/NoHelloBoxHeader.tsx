import { TypeAnimation } from "react-type-animation";
import styles from "./NoHelloBoxHeader.module.css";
const NoHelloBoxHeader = () => {
  return (
    <div className={styles.header}>
      No
      <div className={styles.typewriter}>
        <TypeAnimation
          sequence={["Hello", 5000, " ", 2000]}
          cursor={false}
          repeat={Infinity}
          wrapper="p"
        />
      </div>
    </div>
  );
};

export default NoHelloBoxHeader;
