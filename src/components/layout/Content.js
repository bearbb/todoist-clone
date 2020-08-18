import React from "react";
import { Sidebar } from "./Sidebar";
import { Tasks } from "../task";
export const Content = () => {
  return (
    <section>
      <Sidebar />
      <Tasks />
    </section>
  );
};
