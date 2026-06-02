import { ContentBox } from "@shared/ui/content-box";
import AboutBoxContent from "./AboutBoxContent/AboutBoxContent";
import ContactsBoxContent from "./ContactsBoxContent/ContactsBoxContent";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <ContentBox header="About me" content={<AboutBoxContent />} />
      <ContentBox header="Contacts" content={<ContactsBoxContent />} />
    </div>
  );
};

export default ContactsPage;
