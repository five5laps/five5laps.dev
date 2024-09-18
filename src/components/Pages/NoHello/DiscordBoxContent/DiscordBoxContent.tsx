import styles from "./DiscordBoxContent.module.css";
import DiscordCard from "./DiscordCard/DiscordCard";

export interface Card {
  avatar: string;
  name: string;
  time: string;
  message: string;
}

interface IDiscordBoxContent {
  array: Card[];
}
const DiscordBoxContent = (props: IDiscordBoxContent) => {
  return (
    <div className={styles.content}>
      {props.array.map(({ avatar, name, time, message }) => {
        return (
          <DiscordCard
            key={name + message}
            avatar={avatar}
            name={name}
            time={time}
            message={message}
          />
        );
      })}
    </div>
  );
};

export default DiscordBoxContent;
