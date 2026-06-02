import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/button";
import { headerNavItems } from "@shared/config/navigation";
import styles from "./HeaderButtons.module.css";

const HeaderButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split("/")[1];

  return (
    <div className={styles.buttons}>
      {headerNavItems.map(({ label, path }) => (
        <Button
          key={path}
          onClick={() => navigate(path)}
          label={label}
          selected={currentPath === path.split("/")[1]}
        />
      ))}
    </div>
  );
};

export default HeaderButtons;
