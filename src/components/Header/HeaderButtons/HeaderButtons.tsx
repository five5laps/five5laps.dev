import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import styles from "./HeaderButtons.module.css";

type PathMap = Record<string, string>;

const pathMap: PathMap = {
  "": "/",
  projects: "/projects",
  "My servers": "/servers",
  memories: "/memories",
  contacts: "/contacts",
  nohello: "/nohello",
};

const HeaderButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/")[1];

  return (
    <div className={styles.buttons}>
      {Object.entries(pathMap).map(([key, path]) => (
        <Button
          key={key}
          onClick={() => navigate(path)}
          label={key ? key.charAt(0).toUpperCase() + key.slice(1) : "Home page"}
          selected={currentPath === path.split("/")[1]}
        />
      ))}
    </div>
  );
};

export default HeaderButtons;
