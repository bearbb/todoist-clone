import { collatedTasks } from "../constants/index";
export const collatedTaskExist = (selectedProject) => {
  collatedTasks.find((task) => task.key === selectedProject);
};
