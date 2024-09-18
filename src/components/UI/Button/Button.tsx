import classNames from "classnames";
import styles from "./Button.module.css";

interface IButton extends React.ButtonHTMLAttributes<HTMLDivElement> {
  selected: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Button = (props: IButton) => {
  return (
    <div
      {...props}
      onClick={props.onClick}
      className={classNames(
        styles.button,
        props.selected && styles.button_selected
      )}
    >
      <div className={styles.button__inner}>
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default Button;
