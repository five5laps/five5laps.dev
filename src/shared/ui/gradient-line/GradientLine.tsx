import styles from "./GradientLine.module.css";

interface IGradientLine {
  height: number;
}

const GradientLine = (props: IGradientLine) => {
  return (
    <div style={{ height: `${props.height}px` }} className={styles.line}></div>
  );
};

export default GradientLine;
