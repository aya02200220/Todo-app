import React, { useState } from "react";
import styles from "../../styles/modules/app.module.scss";
import { SelectButton } from "../Button/Button";
import { TodoModal } from "../TodoModal/TodoModal";
import Button from "../Button/Button";

export const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      {/* <Button onClick={() => setModalOpen(true)}>Add Todo</Button> */}
      <Button modalOpen={modalOpen} setModalOpen={setModalOpen}>
        Add Todo
      </Button>
      <SelectButton>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">complete</option>
      </SelectButton>
      <TodoModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
