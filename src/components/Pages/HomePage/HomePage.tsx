import ContentBox from "../../UI/ContentBox/ContentBox";
import Five5lapsBoxContent from "./Five5lapsBoxContent/Five5lapsBoxContent";
import styles from "./HomePage.module.css";
import LanguagesBoxContent from "./LanguagesBoxContent/LanguagesBoxContent";
import MeetBoxContent from "./MeetBoxContent/MeetBoxContent";
const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.homePage__top}>
        <ContentBox
          boxClass={styles.homePage__five5laps}
          header={"Five5laps"}
          content={<Five5lapsBoxContent />}
        />
        <ContentBox
          boxClass={styles.homePage__languages}
          header={"Languages and tools"}
          content={<LanguagesBoxContent />}
        />
      </div>
      <div className={styles.homePage__bottom}>
        <ContentBox
          boxClass={styles.homePage__meet}
          header="Nice to meet you"
          content={<MeetBoxContent />}
        />
      </div>
    </div>
  );
};

export default HomePage;
