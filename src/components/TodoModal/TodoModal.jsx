import { useState } from "react";
import styles from "../../styles/modules/modal.module.scss";
import styles2 from "../../styles/modules/button.module.scss";

import { MdOutlineClose } from "react-icons/md";

// eslint-disable-next-line react/prop-types
export const TodoModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState();
  const [status, setStatus] = useState("incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, status);
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
            <h1 className={styles.formTitle}>Add Todo</h1>
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
              <button className={styles2.button__primary} type="submit">
                Add Todo
              </button>
              <button
                onClick={() => setModalOpen(false)}
                onKeyDown={() => setModalOpen(false)}
                className={styles2.button__secondary}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};
