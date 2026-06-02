import styles from "./DoThisBoxContent.module.css";

const DoThisBoxContent = () => {
  return (
    <div className={styles.content}>
      John tried to be polite, but chatting has different rules! He could get an
      answer much faster, and Lewis wouldn't have to wait to find out what they
      wanted from him.
      <nav>
        So, despite good intentions, you simply force the interlocutor to wait
        while you formulate your question.
      </nav>
      The same applioes to:
      <ul>
        <li>«Hi, I have a question»</li>
        <li>«Here?»</li>
        <li>«Do you have a minute?»</li>
        <li>etc.</li>
      </ul>
    </div>
  );
};

export default DoThisBoxContent;
