import styles from "./NoHelloBoxContent.module.css";

const NoHelloBoxContent = () => {
  return (
    <div className={styles.content}>
      Please don't start chatting with just one word «Hello»
      <p>
        Imagine calling someone on the phone, saying hello and putting them on
        hold…
      </p>
    </div>
  );
};

export default NoHelloBoxContent;
