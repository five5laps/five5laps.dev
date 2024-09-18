import { ReactNode } from "react";
import styles from "./ContentBox.module.css";
import classNames from "classnames";

interface IContentBox {
  header?: ReactNode | boolean;
  content: ReactNode;
  boxClass?: string;
  headerClass?: string;
  contentClass?: string;
}

const ContentBox = (props: IContentBox) => {
  return (
    <div className={classNames(styles.box, props.boxClass)}>
      <div className={styles.box__inner}>
        {props.header && (
          <div className={classNames(styles.box__header, props.headerClass)}>
            {props.header}
          </div>
        )}
        <div className={classNames(styles.box__content, props.contentClass)}>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
