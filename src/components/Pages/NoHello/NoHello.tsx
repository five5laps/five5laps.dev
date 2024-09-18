import ContentBox from "../../UI/ContentBox/ContentBox";
import DiscordBoxContent from "./DiscordBoxContent/DiscordBoxContent";
import DoThisBoxContent from "./DoThisBoxContent/DoThisBoxContent";
import styles from "./NoHello.module.css";
import NoHelloBoxContent from "./NoHelloBoxContent/NoHelloBoxContent";
import grey from "@images/avatars/grey.svg";
import black from "@images/avatars/black.svg";
import green from "@images/avatars/green.svg";
import TryThisBoxContent from "./TryThisBoxContent/TryThisBoxContent";
import NoHelloBoxHeader from "./NoHelloBoxHeader/NoHelloBoxHeader";

const NoHello = () => {
  const cardsBottom = [
    {
      avatar: green,
      name: "Marie",
      time: "12:21",
      message: "Hi, what time is our meeting today?",
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
  const cardsMiddle = [
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
          boxClass={styles.nohello__middleBox}
          content={<DiscordBoxContent array={cardsMiddle} />}
        />
        <ContentBox
          headerClass={styles.nohello__doThisHeader}
          header="Just ask your question"
          content={<DoThisBoxContent />}
        />
      </div>
      <p>Try this instead</p>
      <div className={styles.nohello__bottom}>
        <ContentBox
          boxClass={styles.nohello__middleBox}
          content={<DiscordBoxContent array={cardsBottom} />}
        />
        <ContentBox
          headerClass={styles.nohello__doThisHeader}
          header="When communication goes right, it's easier for everyone"
          content={<TryThisBoxContent />}
        />
      </div>
    </div>
  );
};

export default NoHello;
