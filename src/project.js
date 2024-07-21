import {
  decrementTodayBadge,
  incrementTodayBadge,
  incrementUpcomingBadge,
} from "./events";
import { loadProjects, highlightTab } from "./domUtils";

const projectLibrary = (() => {
  let projects = [];
  const addProject = (project) => {
    projects.push(project);
  };
  const removeProject = (project) => {
    const index = projects.indexOf(project);
    projects.splice(index, 1);
  };
  const getProjects = () => projects;
  const setProjects = (objs) => {
    projects = objs.map((obj) => reattachMethods(obj));
  };
  return { addProject, getProjects, setProjects, removeProject };
})();

const createProject = (projectName) => {
  const project = {
    projectName,
    tasks: [],
    numTask: 0,
    addTask(task) {
      this.tasks.push(task);
      this.numTask++;
    },
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
      this.numTask--;
    },
  };
  return project;
};

const task = (taskName, taskDescription, taskDueDate, taskPriority, taskID) => {
  return {
    taskName,
    taskDescription,
    taskDueDate,
    taskPriority,
    taskID,
  };
};

const findProject = (projectName) => {
  const projects = projectLibrary.getProjects();
  return projects.find((project) => project.projectName === projectName);
};

const findTask = (id, projectName) => {
  const project = findProject(projectName);
  return project.tasks.find((task) => task.taskID === id);
};

const removeTask = (id, projectName) => {
  const project = findProject(projectName);
  const task = findTask(id, projectName);
  decrementTodayBadge(task);
  project.removeTask(task);
};

const saveLocal = () => {
  localStorage.setItem(
    "projectLibrary",
    JSON.stringify(projectLibrary.getProjects())
  );
};

const restoreLocal = () => {
  const storedProjects = localStorage.getItem("projectLibrary");
  if (storedProjects) {
    projectLibrary.setProjects(JSON.parse(storedProjects));
    loadProjects();
    restoreTodayBadge();
    restoreUpcomingBadge();
    highlightTab();
    console.log("Restored local storage");
  }
};

const reattachMethods = (obj) => {
  return {
    ...obj,
    addTask: createProject().addTask,
    removeTask: createProject().removeTask,
  };
};

const restoreTodayBadge = () => {
  const projects = projectLibrary.getProjects();
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      incrementTodayBadge(task);
    });
  });
};

const restoreUpcomingBadge = () => {
  const projects = projectLibrary.getProjects();
  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      incrementUpcomingBadge();
    });
  });
};

const removeProject = (projectName) => {
  const project = findProject(projectName);
  projectLibrary.removeProject(project);
  selectUpcomingTasks();
};

const selectUpcomingTasks = () => {
  const upcomingTasks = document.querySelector(".upcoming-tasks");
  upcomingTasks.click();
};

export {
  createProject,
  projectLibrary,
  task,
  findProject,
  removeTask,
  saveLocal,
  restoreLocal,
  removeProject,
  restoreTodayBadge,
  restoreUpcomingBadge,
  selectUpcomingTasks,
};
