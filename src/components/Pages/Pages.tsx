import { useWindowSize } from "react-use";
import { useArtem } from "../../store/useArtem/useArtem";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GradientLine from "../UI/GradientLine/GradientLine";
import Artem from "./Artem/Artem";
import HomePage from "./HomePage/HomePage";

import Confetti from "react-confetti";
import NoHello from "./NoHello/NoHello";
import styles from "./Pages.module.css";

type ComponentMap = Record<string, JSX.Element>;
const componentMap: ComponentMap = {
  "": <HomePage />,
  nohello: <NoHello />,
  artem: <Artem />,
};

const Pages = () => {
  const { width } = useWindowSize();
  const { found } = useArtem((state) => state);
  const url = location.pathname.split("/")[1];
  return (
    <>
      {found && (
        <Confetti numberOfPieces={500} width={width - 10} height={1300} />
      )}
      <div className={styles.pages}>
        <GradientLine height={4} />
        <div className={styles.pages__content}>
          <Header />
          {componentMap[url]}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pages;
