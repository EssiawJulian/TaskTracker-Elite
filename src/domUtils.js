import defaultProjectImage from "./img/pound.svg";
import { findProject, projectLibrary } from "./project";
import { removeButtonEvent, enableProjectDeleteButton } from "./events";

/* Add a task to the webpage */
const taskDom = (title, task, date, priority, taskID) => {
  // Select the todo-list-body-container
  const todoListBodyContainer = document.querySelector(".todo-list-body");

  // Create a new task header
  const taskHeader = document.createElement("tr");
  taskHeader.classList.add("task-title");
  const headerName = document.createElement("th");
  headerName.textContent = title;
  headerName.colSpan = 4;
  taskHeader.appendChild(headerName);

  // Append the task header to the todo-list-body-container
  todoListBodyContainer.appendChild(taskHeader);

  // Create the task description
  const taskDescription = document.createElement("tr");
  const taskName = document.createElement("td");
  const taskDate = document.createElement("td");
  const taskPriority = document.createElement("td");
  const editAndDeleteButton = document.createElement("td");
  editAndDeleteButton.classList.add("edit-delete-button-container");
  // Add text content to the elements
  taskName.textContent = task;
  taskDate.textContent = date;
  taskPriority.textContent = priority;
  // Create the edit and delete buttons and append to editAndDeleteButton

  const projectTitle = document.querySelector(".project-title").textContent;

  if (projectTitle !== "Today's Tasks" && projectTitle !== "Upcoming Tasks") {
    // const editButton = document.createElement("button");
    // editButton.classList.add("edit");
    const deleteButton = document.createElement("button");

    deleteButton.setAttribute("data-id", taskID);

    deleteButton.classList.add("delete");
    // editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    // editAndDeleteButton.appendChild(editButton);
    editAndDeleteButton.appendChild(deleteButton);
    removeButtonEvent(deleteButton);
  }
  // Append the elements to the taskDescription
  taskDescription.appendChild(taskName);
  taskDescription.appendChild(taskDate);
  taskDescription.appendChild(taskPriority);
  taskDescription.appendChild(editAndDeleteButton);

  // Append the taskDescription to the todo-list-body-container
  todoListBodyContainer.appendChild(taskDescription);
};

/* Display Project of the sidebar */

const projectDOM = (projectName, badgeNum) => {
  // Select the project-list container
  const projectListContainer = document.querySelector(".project-list");

  // Create the project list
  const projectList = document.createElement("li");
  projectList.classList.add("tab");

  // Contents of the list
  const projectNameAndImageContainer = document.createElement("div");
  projectNameAndImageContainer.classList.add("side-item-name-icon");

  // Append contents of the newly created div
  const projectDefaultImage = document.createElement("img");
  projectDefaultImage.src = defaultProjectImage;
  projectDefaultImage.alt = "Project Image";
  projectNameAndImageContainer.appendChild(projectDefaultImage);
  const projName = document.createElement("p");
  projName.textContent = projectName;
  projName.classList.add("project-name");
  projectNameAndImageContainer.appendChild(projName);
  // Make content adjacent to div
  const badgeNumber = document.createElement("span");
  badgeNumber.classList.add("badge");
  badgeNumber.setAttribute("data-name", projectName);
  badgeNumber.textContent = badgeNum;

  // Append the contents to the project list
  projectList.appendChild(projectNameAndImageContainer);
  projectList.appendChild(badgeNumber);

  // Append the project list to the projectListContainer
  projectListContainer.appendChild(projectList);

  // Add click event to the project list
  addClickEvent(projectNameAndImageContainer);
};

/** Change the project title */
const changeProjectTitle = (title) => {
  const projectTitle = document.querySelector(".project-title");
  projectTitle.textContent = title;
};

/** Add close and open events once called */
const showAndCloseModal = () => {
  const modal = document.querySelector(".modal");
  const taskModal = document.querySelector(".task-modal");
  const addProjectButton = document.querySelector(".add-project");
  const closeButton = document.querySelector(".close-btn");
  const addTaskButton = document.querySelector(".add-item-button");
  const taskCloseButton = document.querySelector(".task-close-btn");
  const taskCancelButton = document.querySelector(".task-cancel-btn");
  const projectCancelButton = document.querySelector(".project-cancel-btn");

  addProjectButton.addEventListener("click", () => {
    modal.showModal();
  });

  closeButton.addEventListener("click", () => {
    modal.close();
  });

  addTaskButton.addEventListener("click", () => {
    taskModal.showModal();
  });

  taskCloseButton.addEventListener("click", () => {
    taskModal.close();
  });

  taskCancelButton.addEventListener("click", () => {
    taskModal.close();
  });

  projectCancelButton.addEventListener("click", () => {
    modal.close();
  });
};

/** Close the modal */
const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal.close();
};

const closeTaskModal = () => {
  const taskModal = document.querySelector(".task-modal");
  taskModal.close();
};

const addClickEvent = (selector) => {
  selector.addEventListener("click", () => {
    enableProjectDeleteButton();
    changeProjectTitle(selector.textContent);
    loadTasks(selector.textContent);
  });
};

const loadTasks = (projectName) => {
  const todoListBodyContainer = document.querySelector(".todo-list-body");
  todoListBodyContainer.innerHTML = "";
  const project = findProject(projectName);
  project.tasks.forEach((task) => {
    taskDom(
      task.taskName,
      task.taskDescription,
      task.taskDueDate,
      task.taskPriority,
      task.taskID
    );
  });
};

const loadProjects = () => {
  const projectListContainer = document.querySelector(".project-list");
  projectListContainer.innerHTML = "";
  const projects = projectLibrary.getProjects();
  projects.forEach((project) => {
    projectDOM(project.projectName, project.numTask);
  });
};

const highlightTab = () => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("active"));

      // Add active class to the clicked tab
      tab.classList.add("active");
    });
  });
};

const incrementBadge = (projectName) => {
  const badge = document.querySelector(`.badge[data-name="${projectName}"]`);
  if (badge) {
    badge.textContent = parseInt(badge.textContent) + 1;
  }
};

const decrementBadge = (projectName) => {
  const badge = document.querySelector(`.badge[data-name="${projectName}"]`);
  if (badge) {
    badge.textContent = parseInt(badge.textContent) - 1;
  }
};

export {
  taskDom,
  projectDOM,
  changeProjectTitle,
  showAndCloseModal,
  closeModal,
  highlightTab,
  incrementBadge,
  closeTaskModal,
  loadTasks,
  decrementBadge,
  loadProjects,
};
