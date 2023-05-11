import { useEffect, useState } from "react";
import styles from "../../styles/modules/modal.module.scss";
import Button from "../Button/Button";
import toast from "react-hot-toast";

import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";

import { addTodo, updateTodo } from "../Slices/todoSlices";
import { v4 as uuid } from "uuid";

export const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "edit" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle("");
      setStatus("incomplete");
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title.");
    }
    if (title && status) {
      if (type === "add") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Todo Added!");
        setModalOpen(false);
      }
      if (type === "edit") {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            })
          );
          toast.success("Todo Updated!");
          setModalOpen(false);
        } else {
          toast.error("There's no update");
        }
      }
    } else {
      // toast.error("Enter a title.");
    }
  };

  return (
    modalOpen && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModalOpen(false)}
            onKeyDown={() => setModalOpen(false)}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === "edit" ? "Edit" : "Add"} Todo
            </h1>
            <label htmlFor="title">
              Title{" "}
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <Button type="submit" variant="primary">
                {type === "edit" ? "Update" : "Add Todo"}
              </Button>

              <Button
                variant="secondary"
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                type="button"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
