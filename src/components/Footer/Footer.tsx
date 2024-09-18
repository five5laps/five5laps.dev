import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import FooterTop from "./FooterTop/FooterTop";
import GradientLine from "../UI/GradientLine/GradientLine";

type PathMap = Record<string, string>;

const pathMap: PathMap = {
  "Home page": "/",
  projects: "/projects",
  "My servers": "/servers",
  memories: "/memories",
  contacts: "/contacts",
  nohello: "/nohello",
};

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.footer}>
      <GradientLine height={4} />
      <div className={styles.footer__container}>
        <FooterTop />
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom_links}>
            {Object.entries(pathMap).map(([key, path]) => (
              <div
                className={styles.footer__bottom_links_item}
                onClick={() => navigate(path)}
                key={key}
              >
                {key}
              </div>
            ))}
          </div>
          <div>2024, All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
