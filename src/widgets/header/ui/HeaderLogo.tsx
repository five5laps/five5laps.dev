import { useNavigate } from "react-router-dom";
import styles from "./HeaderLogo.module.css";
const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")} className={styles.logo}>
      F5
    </div>
  );
};

export default HeaderLogo;
