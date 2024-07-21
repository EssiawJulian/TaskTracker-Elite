import { showAndCloseModal } from "./domUtils";
import {
  makeProjectEvent,
  addTaskEvent,
  loadUpcomingTask,
  loadTodayTasks,
  removeProjectEvent,
} from "./events";
import { restoreLocal, selectUpcomingTasks } from "./project";
import { startTutorial } from "./firstTimeInstructions";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  restoreLocal();
  showAndCloseModal();
  makeProjectEvent();
  addTaskEvent();
  loadUpcomingTask();
  loadTodayTasks();
  removeProjectEvent();
  selectUpcomingTasks();

  if (!localStorage.getItem("tutorialCompleted")) {
    startTutorial();
  }
});
