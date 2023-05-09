import styles from "../../styles/modules/todoItem.module.scss";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { getClasses } from "../../utils/getClasses";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Slices/todoSlices";
import { toast } from "react-hot-toast";

export const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("Todo is deleted");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        [ ]
        <div className={styles.texts}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === "complete" && styles["todoText--completed"],
            ])}
          >
            {todo.title}
          </p>
          <p className={styles.time}>
            {format(new Date(todo.time), "p, MM/dd/yyyy")}
          </p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div
          className={styles.icon}
          onClick={handleDelete}
          onKeyDown={handleDelete}
          role="button"
          tabIndex={0}
        >
          <MdDelete />
        </div>
        <div
          className={styles.icon}
          onClick={handleEdit}
          onKeyDown={handleEdit}
          role="button"
          tabIndex={0}
        >
          <MdEdit />
        </div>
      </div>
    </div>
  );
};
