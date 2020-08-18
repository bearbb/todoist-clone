import { db } from "../firebase";
import React from "react";

export const Checkbox = ({ id }) => {
  const archivedTask = () => {
    db.collection("tasks").doc(id).update({ archived: true });
  };
  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-action"
      onClick={() => archivedTask()}
    >
      <span className="checkbox"></span>
    </div>
  );
};
