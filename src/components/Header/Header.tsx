import styles from "./Header.module.css";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
const Header = () => {
  return (
    <div className={styles.header}>
      <HeaderLogo />
      <HeaderButtons />
    </div>
  );
};

export default Header;
