import { useState, useEffect } from "react";
import { firebase, db } from "../firebase";
import { collatedTaskExist } from "../helper";
import moment from "moment";
export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection()
      .where("userId", "==", "tempUserId");
    unsubscribe =
      selectedProject && !collatedTaskExist(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;
    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id, //set the id by the task id (each doc in firestore has its own id)
        ...task.data(), //any data left will be mounted
      }));
      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), days) <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );
      setArchivedTasks(newTasks.filter((task) => task.archived === true));
    });
    return () => unsubscribe();
  }, [selectedProject]);
  return { tasks, archivedTasks };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    db.collection("projects")
      .where("userId", "==", "tempUserId")
      .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((projects) => ({
          ...projects.data(),
          docId: projects.id,
        }));
      });
    // return () => {

    // };
    if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
      setProjects(allProjects);
    }
  }, [projects]);
  return { projects, setProjects };
};
