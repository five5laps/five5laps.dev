import { useNavigate } from "react-router-dom";
import avatar from "@images/avatars/elf.png";
import { Header } from "@widgets/header";
import { Footer } from "@widgets/footer";
import { GradientLine } from "@shared/ui/gradient-line";
import styles from "./WorkInProgressPage.module.css";

const WorkInProgressPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wip__container}>
      <GradientLine height={8} />
      <div className={styles.wip__content}>
        <Header />
        <div className={styles.wip}>
          <img onClick={() => navigate("/")} src={avatar} alt="logo" />
          Work in progress!
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkInProgressPage;
