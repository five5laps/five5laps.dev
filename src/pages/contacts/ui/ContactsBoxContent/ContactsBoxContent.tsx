import styles from "./ContactsBoxContent.module.css";

const contacts = [
  {
    label: "Telegram",
    value: "@five5laps",
    href: "https://t.me/five5laps",
  },
  {
    label: "Mail",
    value: "bataleev.n@gmail.com",
    href: "mailto:bataleev.n@gmail.com",
  },
  {
    label: "VK",
    value: "id/five5laps",
    href: "https://vk.com/five5laps",
  },
  {
    label: "Discord",
    value: "@five5laps",
  },
];

const ContactsBoxContent = () => {
  return (
    <ul className={styles.content}>
      {contacts.map(({ label, value, href }) => (
        <li key={label}>
          <span className={styles.content__label}>{label}:</span>{" "}
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {value}
            </a>
          ) : (
            <span className={styles.content__value}>{value}</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ContactsBoxContent;
