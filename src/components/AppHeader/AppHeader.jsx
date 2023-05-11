import React, { useState } from "react";
import styles from "../../styles/modules/app.module.scss";
import { SelectButton } from "../Button/Button";
import { TodoModal } from "../TodoModal/TodoModal";
import Button from "../Button/Button";

export const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState(false);

  const updateFilter = () => {
    console.log("undating");
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Todo
      </Button>
      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">ALL</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">complete</option>
      </SelectButton>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};
