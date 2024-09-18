import { useNavigate } from "react-router-dom";
import styles from "./WorkInProgress.module.css";
import avatar from "@images/avatars/elf.png";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import GradientLine from "../../UI/GradientLine/GradientLine";
const WorkInProgress = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wip__container}>
      <GradientLine height={8} />
      <Header />
      <div className={styles.wip}>
        <img onClick={() => navigate("/")} src={avatar} alt="logo" />
        Work in progress!
      </div>
      <Footer />
    </div>
  );
};

export default WorkInProgress;
