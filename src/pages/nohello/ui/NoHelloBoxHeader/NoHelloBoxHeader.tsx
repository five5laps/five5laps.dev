import { TypeAnimation } from "react-type-animation";
import styles from "./NoHelloBoxHeader.module.css";

const DISPLAY_MS = 5000;

const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "Olá",
  "Привет",
  "Merhaba",
  "你好",
  "こんにちは",
  "Hej",
  "Szia",
  "Salut",
];

const sequence = greetings.flatMap((word) => [word, DISPLAY_MS]);

const NoHelloBoxHeader = () => {
  return (
    <div className={styles.header}>
      No
      <div className={styles.typewriter}>
        <TypeAnimation
          sequence={sequence}
          cursor={false}
          repeat={Infinity}
          wrapper="p"
        />
      </div>
    </div>
  );
};

export default NoHelloBoxHeader;
