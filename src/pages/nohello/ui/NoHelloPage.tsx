import { ContentBox } from "@shared/ui/content-box";
import { DiscordMessageList } from "@entities/discord-message";
import type { DiscordMessage } from "@entities/discord-message";
import DoThisBoxContent from "./DoThisBoxContent/DoThisBoxContent";
import styles from "./NoHelloPage.module.css";
import NoHelloBoxContent from "./NoHelloBoxContent/NoHelloBoxContent";
import grey from "@images/avatars/grey.svg";
import black from "@images/avatars/black.svg";
import green from "@images/avatars/green.svg";
import TryThisBoxContent from "./TryThisBoxContent/TryThisBoxContent";
import NoHelloBoxHeader from "./NoHelloBoxHeader/NoHelloBoxHeader";

const NoHelloPage = () => {
  const cardsBottom: DiscordMessage[] = [
    {
      avatar: green,
      name: "Marie",
      time: "12:21",
      message: "Hi, what time is our meeting?",
    },
    {
      avatar: black,
      name: "Lewis",
      time: "12:21",
      message: "Hello, at 17:30",
    },
    {
      avatar: green,
      name: "Marie",
      time: "12:25",
      message: "Thanks, see you!",
    },
    {
      avatar: black,
      name: "Lewis",
      time: "12:25",
      message: "OK good",
    },
  ];

  const cardsMiddle: DiscordMessage[] = [
    {
      avatar: grey,
      name: "John",
      time: "12:17",
      message: "Hi!",
    },
    {
      avatar: black,
      name: "Lewis",
      time: "12:21",
      message: "..?",
    },
    {
      avatar: grey,
      name: "John",
      time: "12:25",
      message: "What time are we going?",
    },
    {
      avatar: black,
      name: "Lewis",
      time: "12:25",
      message: "Ah, at 17:30",
    },
  ];

  return (
    <div className={styles.nohello}>
      <div className={styles.nohello__top}>
        <ContentBox
          header={<NoHelloBoxHeader />}
          content={<NoHelloBoxContent />}
        />
      </div>
      <p>Don't do this</p>
      <div className={styles.nohello__middle}>
        <ContentBox
          boxClass={styles.nohello__chatBox}
          contentClass={styles.nohello__chatContent}
          content={<DiscordMessageList messages={cardsMiddle} />}
        />
        <ContentBox
          headerClass={styles.nohello__doThisHeader}
          boxClass={styles.nohello__sideBox}
          header="Just ask your question"
          content={<DoThisBoxContent />}
        />
      </div>
      <p>Try this instead</p>
      <div className={styles.nohello__bottom}>
        <ContentBox
          boxClass={styles.nohello__chatBox}
          contentClass={styles.nohello__chatContent}
          content={<DiscordMessageList messages={cardsBottom} />}
        />
        <ContentBox
          headerClass={styles.nohello__doThisHeader}
          boxClass={styles.nohello__sideBox}
          header="When communication goes right, it's easier for everyone"
          content={<TryThisBoxContent />}
        />
      </div>
    </div>
  );
};

export default NoHelloPage;
