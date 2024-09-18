import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import GradientLine from "../UI/GradientLine/GradientLine";
import HomePage from "./HomePage/HomePage";
import NoHello from "./NoHello/NoHello";
import styles from "./Pages.module.css";

type ComponentMap = Record<string, JSX.Element>;
const componentMap: ComponentMap = {
  "": <HomePage />,
  nohello: <NoHello />,
};

const Pages = () => {
  const url = location.pathname.split("/")[1];
  return (
    <div className={styles.pages}>
      <GradientLine height={8} />
      <div className={styles.pages__content}>
        <Header />
        {componentMap[url]}
      </div>
      <Footer />
    </div>
  );
};

export default Pages;
