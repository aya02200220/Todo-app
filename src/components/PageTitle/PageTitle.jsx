import React from "react";
import styles from "../../styles/modules/title.module.scss";

export const PageTitle = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};
