import styles from "./TryThisBoxContent.module.css";

const TryThisBoxContent = () => {
  return (
    <div className={styles.content}>
      If you're worried about appearing rude,
      <p style={{ display: "inline" }}>
        {" "}
        you can still fill your message with as many pleasantries as you see
        fit.
      </p>
      <nav>For example:</nav>
      <ul>
        <li>
          «Hi, how are you? Can you tell me what date the report needs to be
          submitted?»
        </li>
        <li>«Hello, if you have time, can you help me with this task?» </li>
        <li>
          «Hello, I need to discuss your vacation with you, call me when you are
          free.»
        </li>
        <li>etc.</li>
      </ul>
      <p>This will make it much more convenient for both of you.</p>
    </div>
  );
};

export default TryThisBoxContent;
