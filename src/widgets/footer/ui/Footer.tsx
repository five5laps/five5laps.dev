import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import FooterTop from "./FooterTop";
import { GradientLine } from "@shared/ui/gradient-line";
import { footerNavItems } from "@shared/config/navigation";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <GradientLine height={4} />
      <div className={styles.footer__container}>
        <FooterTop />
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom_links}>
            {footerNavItems.map(({ label, path }) => (
              <div
                className={styles.footer__bottom_links_item}
                onClick={() => navigate(path)}
                key={path}
              >
                {label}
              </div>
            ))}
          </div>
          <div className={styles.footer__bottom_copyright}>
            2024, All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
