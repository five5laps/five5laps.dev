import styles from "../Footer.module.css";
import discord from "@images/logos/discord.svg";
import telegram from "@images/logos/telegram.svg";

const FooterTop = () => {
  return (
    <div className={styles.footer__top}>
      <div className={styles.footer__top_logo}>F5</div>
      <div className={styles.footer__top_socials}>
        <div className={styles.footer__top_socials_item}>
          <a target="_blank" href="https://discord.gg/fFSxt5f8bg">
            <img src={discord} alt="discord" />
          </a>
        </div>
        <div className={styles.footer__top_socials_item}>
          <a target="_blank" href="http://t.me/five5laps">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
