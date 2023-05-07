import React from "react";
// import "./Button.css";
import styles from "../../styles/modules/button.module.scss";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};

// export const Button = ({ children }) => {
//   return (
//     <button className={styles.button} type="button">
//       {children}
//     </button>
//   );
// };
function Button({ modalOpen, setModalOpen }) {
  return (
    <button
      onClick={() => setModalOpen(true)}
      className={styles.button}
      type="button"
    >
      Add Todo
    </button>
  );
}

function SelectButton({ children, ...rest }) {
  return <select className={styles.button__select}>{children}</select>;
}

export { SelectButton };
export default Button;
