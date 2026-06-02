import type { DiscordMessage } from "../../model/types";
import DiscordCard from "../DiscordCard/DiscordCard";
import styles from "./DiscordMessageList.module.css";

interface IDiscordMessageList {
  messages: DiscordMessage[];
}

const DiscordMessageList = ({ messages }: IDiscordMessageList) => {
  return (
    <div className={styles.content}>
      {messages.map(({ avatar, name, time, message }) => (
        <DiscordCard
          key={name + message}
          avatar={avatar}
          name={name}
          time={time}
          message={message}
        />
      ))}
    </div>
  );
};

export default DiscordMessageList;
