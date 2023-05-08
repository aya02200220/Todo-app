import styles from "../../styles/modules/todoItem.module.scss";

export const TodoItems = ({ todo }) => {
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        [ ]
        <div className={styles.texts}>
          <p
          // className={getClasses([
          //   styles.todoText,
          //   todo.status === "completed" && styles["todoText--completed"],
          // ])}
          >
            {todo.title}
          </p>
        </div>
      </div>
    </div>
  );
};
