import {
  taskDom,
  projectDOM,
  closeModal,
  closeTaskModal,
  highlightTab,
  incrementBadge,
  loadTasks,
  decrementBadge,
  changeProjectTitle,
  loadProjects,
} from "./domUtils";
import {
  createProject,
  projectLibrary,
  task,
  findProject,
  removeTask,
  saveLocal,
  removeProject,
  restoreTodayBadge,
  restoreUpcomingBadge,
} from "./project";

/** Event Handler for Adding Projects to the DOM */
const makeProjectEvent = () => {
  const addProjectButton = document.querySelector(".confirm-submission");

  addProjectButton.addEventListener("click", (event) => {
    const form = document.querySelector("#project-form");
    const projectName = document.querySelector("#title").value;
    const projectNameSelector = document.querySelector("#title");

    projectNameSelector.setCustomValidity(
      "Project name already exists. Please choose another name."
    );
    if (
      projectLibrary
        .getProjects()
        .some((proj) => proj.projectName === projectName)
    ) {
      form.reportValidity();
    } else {
      projectNameSelector.setCustomValidity("");
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    event.preventDefault();

    const project = createProject(projectName);
    projectDOM(projectName, project.numTask);
    projectLibrary.addProject(project);
    saveLocal();

    highlightTab();
    closeModal();
  });
};

/** Event Handler for Adding Tasks to the DOM */
const addTaskEvent = () => {
  const addTaskButton = document.querySelector(".confirm-submission-task");

  addTaskButton.addEventListener("click", (event) => {
    const form = document.querySelector("#task-form");

    if (!form.checkValidity()) {
      form.reportValidity();
      console.log("form not valid");
      return;
    }

    event.preventDefault();

    const taskTitle = document.querySelector("#task-title").value;
    const taskDescription = document.querySelector("#task-name").value;
    const taskDueDate = document.querySelector("#date").value;
    const taskPriority = document.querySelector("#priority").value;

    const taskObj = task(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority,
      createUniqueId()
    );
    taskDom(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskObj.taskID
    );

    const projectName = document.querySelector(".project-title").textContent;
    const project = findProject(projectName);
    project.addTask(taskObj);
    incrementBadge(projectName);
    incrementUpcomingBadge();
    incrementTodayBadge(taskObj);
    saveLocal();

    closeTaskModal();
    console.log(project);
    console.log(projectLibrary.getProjects());
  });
};

function createUniqueId() {
  return `task-${Date.now()}`;
}

const removeButtonEvent = (button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-id");
    const projectName = document.querySelector(".project-title").textContent;
    removeTask(id, projectName);
    decrementBadge(projectName);
    decrementUpcomingBadge();
    saveLocal();

    loadTasks(projectName);
  });
};

const loadUpcomingTask = () => {
  const upcomingTasks = document.querySelector(".upcoming-tasks");
  const projects = projectLibrary.getProjects();
  const projectListContainer = document.querySelector(".todo-list-body");

  upcomingTasks.addEventListener("click", () => {
    disableProjectDeleteButton();
    changeProjectTitle("Upcoming Tasks");
    projectListContainer.innerHTML = "";
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        taskDom(
          task.taskName,
          task.taskDescription,
          task.taskDueDate,
          task.taskPriority,
          task.taskID
        );
      });
    });
  });

  upcomingTasks.add;
};

const loadTodayTasks = () => {
  const todayTasks = document.querySelector(".today-tasks");
  const projects = projectLibrary.getProjects();
  const projectListContainer = document.querySelector(".todo-list-body");

  todayTasks.addEventListener("click", () => {
    disableProjectDeleteButton();
    changeProjectTitle("Today's Tasks");
    projectListContainer.innerHTML = "";
    projects.forEach((project) => {
      project.tasks.forEach((task) => {
        if (isToday(task.taskDueDate)) {
          taskDom(
            task.taskName,
            task.taskDescription,
            task.taskDueDate,
            task.taskPriority,
            task.taskID
          );
        }
      });
    });
  });
};

const isToday = (date) => {
  const today = new Date();
  const taskDate = new Date(date);
  return (
    today.getFullYear() === taskDate.getFullYear() &&
    today.getMonth() === taskDate.getMonth() &&
    today.getDate() === taskDate.getDate()
  );
};

const incrementUpcomingBadge = () => {
  const badge = document.querySelector(".upcoming-badge");
  badge.textContent = parseInt(badge.textContent) + 1;
};

const decrementUpcomingBadge = () => {
  const badge = document.querySelector(".upcoming-badge");
  badge.textContent = parseInt(badge.textContent) - 1;
};

const incrementTodayBadge = (task) => {
  if (isToday(task.taskDueDate)) {
    const badge = document.querySelector(".today-badge");
    badge.textContent = parseInt(badge.textContent) + 1;
  }
};

const decrementTodayBadge = (task) => {
  if (isToday(task.taskDueDate)) {
    const badge = document.querySelector(".today-badge");
    badge.textContent = parseInt(badge.textContent) - 1;
  }
};

const removeProjectEvent = () => {
  const removeProjectButton = document.querySelector(".remove-project-btn");
  const projectTitle = document.querySelector(".project-title").textContent;

  removeProjectButton.addEventListener("click", () => {
    const projectName = document.querySelector(".project-title").textContent;
    removeProject(projectName);
    const todayBadge = document.querySelector(".today-badge");
    todayBadge.textContent = 0;
    const upcomingBadge = document.querySelector(".upcoming-badge");
    upcomingBadge.textContent = 0;
    restoreTodayBadge();
    restoreUpcomingBadge();
    saveLocal();
    loadProjects();
  });
};

const disableProjectDeleteButton = () => {
  const removeProjectButton = document.querySelector(".remove-project-btn");
  const removeAddItemButton = document.querySelector(".add-item-button");
  removeProjectButton.disabled = true;
  removeAddItemButton.disabled = true;
  removeProjectButton.style.opacity = 0.5;
  removeAddItemButton.style.opacity = 0.5;
};

const enableProjectDeleteButton = () => {
  const removeProjectButton = document.querySelector(".remove-project-btn");
  const removeAddItemButton = document.querySelector(".add-item-button");
  removeProjectButton.disabled = false;
  removeAddItemButton.disabled = false;
  removeProjectButton.style.opacity = 1;
  removeAddItemButton.style.opacity = 1;
};

export {
  makeProjectEvent,
  addTaskEvent,
  removeButtonEvent,
  loadUpcomingTask,
  loadTodayTasks,
  decrementTodayBadge,
  incrementTodayBadge,
  incrementUpcomingBadge,
  removeProjectEvent,
  enableProjectDeleteButton,
};
