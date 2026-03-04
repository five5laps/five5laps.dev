import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Text from "@carefully-coded/react-text-gradient";
import styles from "./Artem.module.css";
import { useArtem } from "../../../store/useArtem/useArtem";

const GRID = 10;

function manhattan(a: number, b: number) {
  const ax = a % GRID,
    ay = Math.floor(a / GRID);
  const bx = b % GRID,
    by = Math.floor(b / GRID);
  return Math.abs(ax - bx) + Math.abs(ay - by);
}

function hintByDist(d: number) {
  if (d === 0) return "Я и не думал, что у тебя получиться, заслужил! 🎁";
  if (d === 1) return "🔥🔥 (очень горячо)";
  if (d <= 2) return "🔥 (горячо)";
  if (d <= 4) return "🌡️ (теплее)";
  if (d <= 6) return "❄️ (холодно)";
  return "🧊 (очень холодно)";
}

const KEY = "J6PLTPVNVPPL9VGCQW9KM";
const chunks = [
  KEY.slice(0, 20),
  KEY.slice(20, 40),
  KEY.slice(40, 60),
  KEY.slice(80),
];

function maskedKey(openChunks: number) {
  const parts = chunks.map((c, i) => (i < openChunks ? c : "••••••"));
  return parts.join("-");
}

export default function Artem() {
  const giftIndexRef = useRef(Math.floor(Math.random() * GRID * GRID));

  const [opened, setOpened] = useState(() => new Set());
  const [tries, setTries] = useState(0);
  const [iq, setIq] = useState(0);
  const [ready, setReady] = useState(false);
  const [lastHint, setLastHint] = useState("Выбери коробку 📦");
  const { found, setFound } = useArtem((state) => state);

  // По попыткам приоткрываем ключ частями (интрига!)
  const openChunks = useMemo(() => {
    if (found) return chunks.length;
    if (tries >= 10) return 3;
    if (tries >= 6) return 2;
    if (tries >= 3) return 1;
    return 0;
  }, [tries, found]);

  const onCellClick = (i: number) => {
    if (found) return;

    setTries((t) => t + 1);
    setOpened((prev) => {
      const next = new Set(prev);
      next.add(i);
      return next;
    });

    const d = manhattan(i, giftIndexRef.current);
    const hint = hintByDist(d);
    setLastHint(hint);

    if (i === giftIndexRef.current) setFound(true);
  };

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(KEY);
      setLastHint("✅ Ключ скопирован!");
    } catch {
      setLastHint("Не смог скопировать 😅 выдели и скопируй вручную");
    }
  };

  useLayoutEffect(() => {
    prompt("Как вас зовут?", "");

    alert("Вообще-то ты сам пришел.");
    alert("Никто как бы не звал.");
  }, []);

  function handleIq(iq: number) {
    setIq(iq);
  }

  function getIq(iq: number) {
    if (iq < 0) return "Ты не так плох.";
    if (iq < 13) return "Похоже на правду.";
    if (iq == 0) return "";
    if (iq < 50 && iq > 0) return "Есть сомнения...";
    if (iq >= 50) return "Чел...";
  }

  function submitIq() {
    alert(
      `Сначала ты подумал про ${iq}, но подумав, ты решил ответить честно и выбрал 12! Но в честь дня рождения умножим на 2! 24 должно хватить.`
    );
    setIq(24);
    setReady(true);
  }

  return (
    <div className={styles.artem}>
      {!ready && (
        <div className={styles.header}>
          <div className={styles.title}>
            С днем рождения, мой дорогой{" "}
            <Text gradient={{ from: "#3CADDA", to: "#CCDD3B", type: "linear" }}>
              {"{realName}"}!
            </Text>
            🎂🥳🎉
          </div>
          <div className={styles.title}>
            Сейчас тебе придется пройти головоломку.{" "}
            <nav className={styles.subtitle}> (она очень сложная) </nav>
          </div>
          <div className={styles.title}>
            Для начала тебе нужно пройти проверку на iq!
            <nav className={styles.subtitle}>
              (тут ты про концерт шамана сказал в дискорде и что ты умный
              кстати)
            </nav>
            Введи свой iq {"->"}
            <input
              style={{ color: "unset", width: "40px" }}
              type="number"
              value={iq}
              onChange={(e) => handleIq(Number(e.currentTarget.value))}
            />
            <div className={styles.title}>
              {iq != 0 && getIq(iq)}{" "}
              {iq < 50 && iq > 0 && (
                <button className={styles.copyBtn} onClick={submitIq}>
                  Подтвердить
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {ready && (
        <>
          <div className={styles.title}>А вот и сама головоломка! </div>
          <div className={styles.subtitle}>Подсказка: {lastHint}</div>
          <div className={styles.keyBox}>
            <Text gradient={{ from: "#3CADDA", to: "#CCDD3B", type: "linear" }}>
              {found ? KEY : maskedKey(openChunks)}
            </Text>

            {found && (
              <div className={styles.btns}>
                <button className={styles.copyBtn} onClick={copyKey}>
                  Скопировать ключ
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://eu.checkout.battle.net/shop/en-us/checkout/key-claim?flowTrackingId",
                      "_blank"
                    )
                  }
                  className={styles.copyBtn}>
                  Активировать тут
                </button>
              </div>
            )}
          </div>

          <div
            className={styles.grid}
            style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}>
            {Array.from({ length: GRID * GRID }).map((_, i) => {
              const isOpen = opened.has(i);
              return (
                <button
                  key={i}
                  className={`${styles.cell} ${isOpen ? styles.open : ""} ${
                    found ? styles.done : ""
                  }`}
                  onClick={() => onCellClick(i)}
                  aria-label={`cell-${i}`}>
                  {isOpen ? "🎀" : "📦"}
                </button>
              );
            })}
          </div>

          <div className={styles.footer}>
            Попытки: <b>{tries}</b> {found ? "— нашёл! 🎉" : ""}
          </div>
        </>
      )}
    </div>
  );
}
