import styles from "./DiscordCard.module.css";

interface IDiscordCard {
  avatar: string;
  name: string;
  time: string;
  message: string;
}

const DiscordCard = (props: IDiscordCard) => {
  return (
    <div className={styles.card}>
      <img src={props.avatar} alt="avatar" />
      <div className={styles.card__message}>
        <div className={styles.card__message_top}>
          {props.name} <nav>{props.time}</nav>
        </div>
        <div className={styles.card__message_bottom}>{props.message}</div>
      </div>
    </div>
  );
};

export default DiscordCard;
